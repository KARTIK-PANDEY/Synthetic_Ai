const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const outDir = path.join(__dirname, '..', 'public', 'screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const pages = [
    { url: 'http://localhost:3000', name: 'homepage' },
    { url: 'http://localhost:3000/photos', name: 'photos' },
    { url: 'http://localhost:3000/search?q=nature', name: 'search' },
  ];

  for (const p of pages) {
    try {
      console.log('Visiting', p.url);
      await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait a bit for animations to settle
      await page.waitForTimeout(1000);
      const file = path.join(outDir, `${p.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log('Saved', file);
    } catch (err) {
      console.error('Failed to capture', p.url, err.message);
    }
  }

  await browser.close();
})();
