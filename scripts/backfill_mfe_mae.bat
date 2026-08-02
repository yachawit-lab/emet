@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Drag one or more Exness-exported CSV files onto this icon to backfill MFE/MAE.
    echo.
    echo ^(Or run manually: backfill_mfe_mae.bat "path\to\export.csv"^)
    echo.
    pause
    exit /b 1
)

for %%F in (%*) do (
    set "INPUT=%%~fF"
    set "OUTPUT=%%~dpF%%~nF_backfilled.csv"
    echo ============================================================
    echo Input:  !INPUT!
    echo Output: !OUTPUT!
    echo.
    python "%~dp0backfill_mfe_mae.py" "!INPUT!" "!OUTPUT!"
    echo.
)

echo ============================================================
echo Done. Backfilled file(s) saved next to the original, with "_backfilled" added to the name.
echo Import that file into Ledger via Import CSV.
echo.
pause
