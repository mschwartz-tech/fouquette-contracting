@echo off
echo Setting up Git and pushing changes...
echo.

REM Add Git to PATH for this session
set PATH=%PATH%;C:\Program Files\Git\bin;C:\Program Files\Git\cmd

REM Check if Git is available
git --version
if errorlevel 1 (
    echo Git is not found. Please ensure Git is installed.
    pause
    exit /b 1
)

echo.
echo Git found! Now configuring...
echo.

REM Configure Git user (you'll need to edit these)
echo Please enter your GitHub username:
set /p username=
git config --global user.name "%username%"

echo.
echo Please enter your GitHub email:
set /p email=
git config --global user.email "%email%"

echo.
echo Git configuration complete!
echo.
echo Current status:
git status

echo.
echo Adding all changes...
git add .

echo.
echo Creating commit...
git commit -m "Fix SEO indexing issues - remove static canonical, add dynamic sitemap generation"

echo.
echo Now pushing to GitHub...
echo You may be prompted for your GitHub credentials.
echo.
git push origin main

echo.
echo Done! Press any key to exit...
pause 