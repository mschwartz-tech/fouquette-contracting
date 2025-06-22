@echo off
echo ================================================================
echo       Fouquette Contracting - Automated Git Setup & Push
echo ================================================================
echo.

REM Set Git paths explicitly
set "GIT_PATH=C:\Program Files\Git\bin"
set "GIT_CMD_PATH=C:\Program Files\Git\cmd"

REM Add Git to PATH for this session
set "PATH=%GIT_PATH%;%GIT_CMD_PATH%;%PATH%"

REM Test if Git is available
echo [1/6] Testing Git installation...
"%GIT_PATH%\git.exe" --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Git not found at expected location.
    echo Please check if Git is installed at: %GIT_PATH%
    exit /b 1
)

echo ✅ Git found! Version:
"%GIT_PATH%\git.exe" --version
echo.

REM Check if we're in a git repository
echo [2/6] Checking repository status...
"%GIT_PATH%\git.exe" status >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: This directory is not a Git repository.
    exit /b 1
)

echo ✅ Git repository detected
echo.

REM Check and set up Git user configuration
echo [3/6] Checking Git user configuration...
for /f "delims=" %%i in ('"%GIT_PATH%\git.exe" config --global user.name 2^>nul') do set "current_name=%%i"
for /f "delims=" %%i in ('"%GIT_PATH%\git.exe" config --global user.email 2^>nul') do set "current_email=%%i"

if "%current_name%"=="" (
    echo ⚠️  Setting up default Git user configuration...
    "%GIT_PATH%\git.exe" config --global user.name "Matt Fouquette"
    "%GIT_PATH%\git.exe" config --global user.email "matt@fouquettecontracting.com"
    echo ✅ Git user configuration set to defaults
    echo    Name: Matt Fouquette
    echo    Email: matt@fouquettecontracting.com
    echo    (You can change these later by running git-config.bat)
) else (
    echo ✅ Git user already configured:
    echo    Name: %current_name%
    echo    Email: %current_email%
)
echo.

REM Check remote repository
echo [4/6] Checking remote repository...
"%GIT_PATH%\git.exe" remote -v >nul 2>&1
if errorlevel 1 (
    echo ⚠️  No remote repository configured
) else (
    echo ✅ Remote repository configured:
    "%GIT_PATH%\git.exe" remote -v
)
echo.

REM Show current status
echo [5/6] Current repository status:
"%GIT_PATH%\git.exe" status --short
echo.

REM Handle commits and push
echo [6/6] Processing changes...
"%GIT_PATH%\git.exe" diff-index --quiet HEAD -- >nul 2>&1
if errorlevel 1 (
    echo 📝 Changes detected, adding all files...
    "%GIT_PATH%\git.exe" add .
    
    echo 💾 Creating commit...
    "%GIT_PATH%\git.exe" commit -m "Fix SEO indexing issues - remove static canonical, add dynamic sitemap generation"
    
    if errorlevel 1 (
        echo ❌ Commit failed.
        exit /b 1
    )
    
    echo 🚀 Pushing to GitHub...
    "%GIT_PATH%\git.exe" push origin main
    
    if errorlevel 1 (
        echo ❌ Push failed. This might be due to:
        echo   • Authentication issues
        echo   • Network connectivity issues
        echo   • Branch protection rules
        exit /b 1
    )
    
    echo ✅ Successfully pushed to GitHub!
) else (
    echo ℹ️  No changes to commit. Repository is up to date.
    
    echo 🚀 Attempting to push staged changes...
    "%GIT_PATH%\git.exe" push origin main
    
    if errorlevel 1 (
        echo ⚠️  Push failed or not needed
    ) else (
        echo ✅ Push completed successfully!
    )
)

echo.
echo ================================================================
echo                        🎉 COMPLETE! 🎉
echo ================================================================
echo Your Fouquette Contracting website changes have been processed.
echo. 