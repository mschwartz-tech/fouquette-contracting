@echo off
echo Fouquette Contracting - Git Push Helper
echo =======================================
echo.

REM Set Git paths explicitly
set "GIT_PATH=C:\Program Files\Git\bin"
set "GIT_CMD_PATH=C:\Program Files\Git\cmd"

REM Add Git to PATH for this session
set "PATH=%GIT_PATH%;%GIT_CMD_PATH%;%PATH%"

REM Test if Git is now available
echo Testing Git installation...
"%GIT_PATH%\git.exe" --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git not found at expected location.
    echo Please check if Git is installed at: %GIT_PATH%
    echo.
    echo You can download Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Git found! Version:
"%GIT_PATH%\git.exe" --version
echo.

REM Check if we're in a git repository
"%GIT_PATH%\git.exe" status >nul 2>&1
if errorlevel 1 (
    echo ERROR: This directory is not a Git repository.
    echo Please run this script from your project directory.
    pause
    exit /b 1
)

echo Current repository status:
"%GIT_PATH%\git.exe" status
echo.

REM Check if there are any changes to commit
"%GIT_PATH%\git.exe" diff-index --quiet HEAD --
if errorlevel 1 (
    echo Adding all changes...
    "%GIT_PATH%\git.exe" add .
    
    echo.
    echo Creating commit...
    "%GIT_PATH%\git.exe" commit -m "Fix SEO indexing issues - remove static canonical, add dynamic sitemap generation"
    
    echo.
    echo Pushing to GitHub...
    "%GIT_PATH%\git.exe" push origin main
    
    if errorlevel 1 (
        echo.
        echo Push failed. This might be due to:
        echo 1. Authentication issues - you may need to set up Git credentials
        echo 2. No remote repository configured
        echo 3. Network connectivity issues
        echo.
        echo Let's check the remote configuration:
        "%GIT_PATH%\git.exe" remote -v
        echo.
        echo To fix authentication, you can:
        echo 1. Use GitHub Desktop
        echo 2. Set up a Personal Access Token
        echo 3. Use SSH keys
        pause
        exit /b 1
    )
    
    echo.
    echo ✅ Successfully pushed to GitHub!
) else (
    echo No changes to commit. Repository is up to date.
)

echo.
echo Done! Press any key to exit...
pause >nul 