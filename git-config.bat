@echo off
echo Git Configuration Setup
echo ========================
echo.

REM Set Git paths explicitly
set "GIT_PATH=C:\Program Files\Git\bin"

echo Please enter your information for Git commits:
echo.

set /p username="Enter your full name (e.g., John Doe): "
set /p email="Enter your email address: "

echo.
echo Configuring Git with your information...

"%GIT_PATH%\git.exe" config --global user.name "%username%"
"%GIT_PATH%\git.exe" config --global user.email "%email%"

echo.
echo Git configuration complete!
echo.
echo Current configuration:
"%GIT_PATH%\git.exe" config --global user.name
"%GIT_PATH%\git.exe" config --global user.email

echo.
echo You can now use the git-fix-and-push.bat file to commit and push changes.
echo.
pause 