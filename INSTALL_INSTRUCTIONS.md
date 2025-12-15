# Installation Instructions

## Option 1: Install Node.js using PowerShell (Recommended)

### Run PowerShell as Administrator:
1. Press `Windows Key + X`
2. Select "Windows PowerShell (Admin)" or "Terminal (Admin)"
3. Navigate to the project folder:
   ```powershell
   cd C:\Users\karti\Website_Work
   ```
4. Run the installation script:
   ```powershell
   .\install-nodejs.ps1
   ```
   OR run directly:
   ```powershell
   winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
   ```

5. **Close and reopen PowerShell** (important for PATH to update)

6. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

7. Install project dependencies:
   ```powershell
   npm install
   ```

8. Start the development server:
   ```powershell
   npm run dev
   ```

## Option 2: Manual Installation

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Click "Download Node.js (LTS)"
   - Download the Windows Installer (.msi)

2. **Install Node.js:**
   - Run the downloaded installer
   - Click "Next" through the installation wizard
   - **Important:** Make sure "Add to PATH" is checked
   - Complete the installation

3. **Restart PowerShell:**
   - Close all PowerShell windows
   - Open a new PowerShell window

4. **Verify Installation:**
   ```powershell
   node --version
   npm --version
   ```

5. **Navigate to project and install:**
   ```powershell
   cd C:\Users\karti\Website_Work
   npm install
   npm run dev
   ```

## Option 3: Using Chocolatey (if installed)

If you have Chocolatey package manager:
```powershell
choco install nodejs-lts -y
```

Then restart PowerShell and run:
```powershell
npm install
npm run dev
```

## After Installation

Once Node.js is installed and you've run `npm install`, you can start the server with:

```powershell
npm run dev
```

Then open http://localhost:3000 in your browser.

## Troubleshooting

- **"node is not recognized"**: Restart PowerShell after installation
- **Permission errors**: Run PowerShell as Administrator
- **Installation fails**: Try manual download from nodejs.org
- **Port already in use**: The server will use the next available port

