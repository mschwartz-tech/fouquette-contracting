@echo off
echo Setting up Git with GitHub CLI authentication...
echo.

REM Add Git to PATH for this session
set PATH=%PATH%;C:\Program Files\Git\bin;C:\Program Files\Git\cmd

REM Check if Git is available
git --version
if errorlevel 1 (
    echo Git is not found. Please ensure Git is installed.
    echo Attempting to use Git from common locations...
    set PATH=%PATH%;C:\Program Files\Git\bin;C:\Program Files\Git\cmd;C:\Program Files (x86)\Git\bin
)

echo.
echo Checking GitHub CLI...
gh --version
if errorlevel 1 (
    echo GitHub CLI not found. Installing GitHub CLI is recommended for easier authentication.
    echo You can download it from: https://cli.github.com/
    echo.
    echo Continuing with standard Git authentication...
    echo.
)

REM Configure Git if not already configured
git config --global user.name >nul 2>&1
if errorlevel 1 (
    echo.
    echo Git user configuration needed...
    set /p username="Enter your GitHub username: "
    git config --global user.name "%username%"
    
    set /p email="Enter your GitHub email: "
    git config --global user.email "%email%"
)

echo.
echo Current Git configuration:
git config --global user.name
git config --global user.email

echo.
echo Repository status:
git status

echo.
echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "Fix SEO indexing issues - remove static canonical, add dynamic sitemap generation"

echo.
echo Attempting to push changes...
echo.

REM Try pushing - this will prompt for credentials if needed
git push origin main

if errorlevel 1 (
    echo.
    echo Push failed. Trying to set up authentication...
    echo.
    
    REM Check if gh is available and try to authenticate
    gh --version >nul 2>&1
    if not errorlevel 1 (
        echo Using GitHub CLI for authentication...
        gh auth login
        echo.
        echo Retrying push...
        git push origin main
    ) else (
        echo Please enter your GitHub credentials when prompted...
        git push origin main
    )
)

echo.
echo Done! Press any key to exit...
pause 