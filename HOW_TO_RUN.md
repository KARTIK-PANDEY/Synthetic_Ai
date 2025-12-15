# How to Run the SyntheticsAI Website

## Step 1: Install Node.js (Required)

Since Node.js is not currently installed on your system, you need to install it first:

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for Windows
   - Choose the Windows Installer (.msi) - 64-bit recommended

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard (accept defaults)
   - Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation:**
   - Close and reopen your terminal/PowerShell
   - Run these commands to verify:
   ```powershell
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., v20.x.x and 10.x.x)

## Step 2: Install Project Dependencies

Once Node.js is installed, open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

**Expected output:** You'll see a progress bar and then "added XXX packages" message.

## Step 3: Run the Development Server

After dependencies are installed, start the development server:

```powershell
npm run dev
```

**Expected output:**
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in X seconds
```

## Step 4: Open in Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Navigate to: **http://localhost:3000**
3. You should see the SyntheticsAI homepage!

## Available Commands

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint to check code quality

## Troubleshooting

### If `npm install` fails:
- Make sure you have internet connection
- Try: `npm install --legacy-peer-deps`
- Or: `npm cache clean --force` then try again

### If port 3000 is already in use:
- The server will automatically try the next available port (3001, 3002, etc.)
- Check the terminal output for the actual URL

### If you see errors:
- Make sure you're in the correct directory (`C:\Users\karti\Website_Work`)
- Ensure Node.js is properly installed and in PATH
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

## Quick Start (After Node.js is Installed)

```powershell
# Navigate to project directory (if not already there)
cd C:\Users\karti\Website_Work

# Install dependencies (first time only)
npm install

# Start the server
npm run dev

# Open http://localhost:3000 in your browser
```

## What You'll See

Once running, you can:
- Browse the homepage with featured collections
- Search for images, videos, and music
- Use advanced filters
- View media detail pages
- Browse by categories
- Test upload functionality
- View user profiles

Enjoy SyntheticsAI! 🎨

---

## Cross-platform Notes

- Windows (PowerShell)
   - Use the provided helper to install Node (may require Admin and `winget`):
      ```powershell
      cd C:\path\to\repo
      .\install-nodejs.ps1
      ```
   - If `npm.ps1` is blocked by PowerShell execution policy, use `npm.cmd` (for example `npm.cmd install`) or run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` (requires admin to change system policies).

- macOS / Linux
   - Install Node using Homebrew or the official installer:
      ```bash
      # macOS (Homebrew)
      brew install node
      ```

## Environment & Ports

- To use a custom port, set the `PORT` environment variable:
   - PowerShell: `$env:PORT=4000; npm run dev`
   - bash/zsh: `PORT=4000 npm run dev`

## Additional Tips

- Use `nvm` (macOS/Linux) or `nvm-windows` to manage Node versions when working across projects.
- Do not copy `node_modules` across machines — always run `npm install` after copying the repo.

If you'd like, I can add a short link to this file in the `README.md` for easier discovery.

