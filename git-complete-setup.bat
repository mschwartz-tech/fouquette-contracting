@echo off
echo ================================================================
echo           Fouquette Contracting - Complete Git Setup
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
    echo You can download Git from: https://git-scm.com/download/win
    pause
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
    echo Please run this script from your project directory.
    pause
    exit /b 1
)

echo ✅ Git repository detected
echo.

REM Check and set up Git user configuration
echo [3/6] Checking Git user configuration...
"%GIT_PATH%\git.exe" config --global user.name >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Git user configuration needed...
    echo.
    set /p username="Enter your full name (e.g., Matt Fouquette): "
    set /p email="Enter your email address: "
    
    "%GIT_PATH%\git.exe" config --global user.name "!username!"
    "%GIT_PATH%\git.exe" config --global user.email "!email!"
    
    echo ✅ Git user configuration complete!
) else (
    echo ✅ Git user already configured:
    echo Name: 
    "%GIT_PATH%\git.exe" config --global user.name
    echo Email: 
    "%GIT_PATH%\git.exe" config --global user.email
)
echo.

REM Check remote repository
echo [4/6] Checking remote repository...
"%GIT_PATH%\git.exe" remote -v
if errorlevel 1 (
    echo ⚠️  No remote repository configured
    echo You may need to add a remote repository first
) else (
    echo ✅ Remote repository configured
)
echo.

REM Show current status
echo [5/6] Current repository status:
"%GIT_PATH%\git.exe" status
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
        echo ❌ Commit failed. This might be due to configuration issues.
        pause
        exit /b 1
    )
    
    echo 🚀 Pushing to GitHub...
    "%GIT_PATH%\git.exe" push origin main
    
    if errorlevel 1 (
        echo ❌ Push failed. This might be due to:
        echo   • Authentication issues - you may need to set up Git credentials
        echo   • No remote repository configured
        echo   • Network connectivity issues
        echo   • Branch protection rules
        echo.
        echo 🔧 Troubleshooting tips:
        echo   1. Try using GitHub Desktop for easier authentication
        echo   2. Set up a Personal Access Token
        echo   3. Check your internet connection
        echo   4. Verify the remote repository URL
        pause
        exit /b 1
    )
    
    echo.
    echo ✅ Successfully pushed to GitHub!
) else (
    echo ℹ️  No changes to commit. Repository is up to date.
    
    echo 🚀 Attempting to push anyway (in case of staged changes)...
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
echo Next steps:
echo • Check your GitHub repository to confirm changes
echo • Your website should update automatically via Netlify
echo • You can run this script again anytime to push new changes
echo.
echo Press any key to exit...
pause >nul 