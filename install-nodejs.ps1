# PowerShell script to install Node.js using winget
# Run this script as Administrator if needed

Write-Host "Installing Node.js LTS version..." -ForegroundColor Green

# Try to install Node.js using winget
winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements --silent

Write-Host "`nInstallation complete!" -ForegroundColor Green
Write-Host "Please close and reopen PowerShell, then run: node --version" -ForegroundColor Yellow
Write-Host "After verifying Node.js is installed, run: npm install" -ForegroundColor Yellow

