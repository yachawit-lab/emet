<#
.SYNOPSIS
    Post a markdown brief to the trading desk's Discord channel via an incoming webhook.

.DESCRIPTION
    Reads a markdown file and posts it to Discord, splitting it across as many messages
    as needed. Discord caps a message at 2000 characters, so long briefs (First Sign,
    /scan output) must be chunked. Chunks are split on line boundaries, never mid-line,
    and fenced code blocks are closed and reopened across a split so formatting survives.

    The webhook URL is resolved in this order:
      1. -WebhookUrl parameter
      2. $env:DISCORD_WEBHOOK_URL
      3. DISCORD_WEBHOOK_URL in .env.local at the repo root (gitignored)

.PARAMETER File
    Path to the markdown file to post.

.PARAMETER Title
    Optional header line posted above the content.

.PARAMETER WebhookUrl
    Override the configured webhook.

.PARAMETER DryRun
    Show how the file would be chunked without posting anything.

.EXAMPLE
    .\scripts\post-discord.ps1 firstsign\first_sign_20260728.md -Title "First Sign - 28 Jul"

.EXAMPLE
    .\scripts\post-discord.ps1 scans\nas100_scan_20260728.md -DryRun
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$File,

    [string]$Title,

    [string]$WebhookUrl,

    [switch]$DryRun
)

$ErrorActionPreference = 'Stop'

# Discord requires TLS 1.2+; Windows PowerShell 5.1 can still negotiate lower by default.
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Built from a char code so the backtick never has to be escaped in a PowerShell string.
$Fence = ([char]96).ToString() * 3

# Discord's hard cap is 2000; leave headroom for reopened fences and the part counter.
$ChunkLimit = 1900

function Resolve-WebhookUrl {
    param([string]$Explicit)

    if (-not [string]::IsNullOrWhiteSpace($Explicit)) { return $Explicit }
    if (-not [string]::IsNullOrWhiteSpace($env:DISCORD_WEBHOOK_URL)) { return $env:DISCORD_WEBHOOK_URL }

    $envFile = Join-Path $PSScriptRoot '..\.env.local'
    if (Test-Path $envFile) {
        foreach ($line in (Get-Content -LiteralPath $envFile -Encoding UTF8)) {
            $trimmed = $line.Trim()
            if ($trimmed -eq '' -or $trimmed.StartsWith('#')) { continue }
            $idx = $trimmed.IndexOf('=')
            if ($idx -lt 1) { continue }
            if ($trimmed.Substring(0, $idx).Trim() -eq 'DISCORD_WEBHOOK_URL') {
                return $trimmed.Substring($idx + 1).Trim()
            }
        }
    }
    return $null
}

function Split-ForDiscord {
    param(
        [string[]]$Lines,
        [int]$Limit
    )

    $chunks = New-Object System.Collections.ArrayList
    $buf = New-Object System.Text.StringBuilder
    $inFence = $false

    foreach ($line in $Lines) {
        $isFenceLine = $line.TrimStart().StartsWith($Fence)

        # If we are inside a fence we must reserve room to close it before splitting.
        $reserve = 0
        if ($inFence) { $reserve = $Fence.Length + 1 }

        $projected = $buf.Length + $line.Length + 1 + $reserve

        if ($buf.Length -gt 0 -and $projected -gt $Limit) {
            $text = $buf.ToString().TrimEnd()
            if ($inFence) { $text = $text + "`n" + $Fence }
            [void]$chunks.Add($text)

            $buf = New-Object System.Text.StringBuilder
            if ($inFence) { [void]$buf.AppendLine($Fence) }
        }

        [void]$buf.AppendLine($line)
        if ($isFenceLine) { $inFence = -not $inFence }
    }

    if ($buf.Length -gt 0) {
        $tail = $buf.ToString().TrimEnd()
        if ($inFence) { $tail = $tail + "`n" + $Fence }
        if ($tail -ne '') { [void]$chunks.Add($tail) }
    }

    # Emit the chunks; the caller wraps the result in @() so a single chunk still lands
    # as a one-element array rather than a bare string (indexing a string yields a char).
    return $chunks.ToArray()
}

function Send-Chunk {
    param(
        [string]$Url,
        [string]$Content,
        [int]$Index,
        [int]$Total
    )

    $payload = @{ content = $Content } | ConvertTo-Json -Depth 3 -Compress
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($payload)

    try {
        Invoke-RestMethod -Uri $Url -Method Post `
            -ContentType 'application/json; charset=utf-8' -Body $bytes | Out-Null
        Write-Host ("  [{0}/{1}] posted, {2} chars" -f $Index, $Total, $Content.Length) -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host ("  [{0}/{1}] FAILED: {2}" -f $Index, $Total, $_.Exception.Message) -ForegroundColor Red
        return $false
    }
}

# --- main ---------------------------------------------------------------

if (-not (Test-Path -LiteralPath $File)) {
    Write-Host "File not found: $File" -ForegroundColor Red
    Write-Host "Pass a path relative to the repo root, e.g. scans\gold_scan_20260728.md"
    exit 1
}

$url = Resolve-WebhookUrl -Explicit $WebhookUrl
if ([string]::IsNullOrWhiteSpace($url)) {
    Write-Host "No Discord webhook configured." -ForegroundColor Red
    Write-Host "Set DISCORD_WEBHOOK_URL in .env.local, or pass -WebhookUrl."
    exit 1
}

$body = Get-Content -LiteralPath $File -Encoding UTF8
if (-not [string]::IsNullOrWhiteSpace($Title)) {
    $body = @("**$Title**", '') + $body
}

# @() guarantees an array even if the splitter produced exactly one chunk.
$chunks = @(Split-ForDiscord -Lines $body -Limit $ChunkLimit)
$total = $chunks.Count

Write-Host ""
Write-Host ("{0} -> {1} message(s)" -f (Split-Path $File -Leaf), $total) -ForegroundColor Cyan

if ($DryRun) {
    Write-Host "DRY RUN - nothing posted." -ForegroundColor Yellow
    for ($i = 0; $i -lt $total; $i++) {
        $preview = $chunks[$i].Split("`n")[0]
        if ($preview.Length -gt 70) { $preview = $preview.Substring(0, 70) + '...' }
        Write-Host ("  [{0}/{1}] {2,5} chars | {3}" -f ($i + 1), $total, $chunks[$i].Length, $preview)
    }
    exit 0
}

$failed = 0
for ($i = 0; $i -lt $total; $i++) {
    $ok = Send-Chunk -Url $url -Content $chunks[$i] -Index ($i + 1) -Total $total
    if (-not $ok) { $failed++ }
    # Discord rate-limits webhooks at roughly 5 requests/sec.
    if ($i -lt ($total - 1)) { Start-Sleep -Milliseconds 400 }
}

Write-Host ""
if ($failed -gt 0) {
    Write-Host ("Done with errors: {0} of {1} message(s) failed." -f $failed, $total) -ForegroundColor Red
    exit 1
}
Write-Host ("Done. Posted {0} message(s) to Discord." -f $total) -ForegroundColor Green
