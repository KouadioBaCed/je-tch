const { chromium } = require('playwright-core');
(async () => {
  const channels = ['msedge', 'chrome'];
  let browser = null, used = null;
  for (const ch of channels) {
    try { browser = await chromium.launch({ channel: ch }); used = ch; break; }
    catch (e) { /* try next */ }
  }
  if (!browser) { console.log('NO_BROWSER'); process.exit(2); }
  console.log('using ' + used);
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'C:/Users/lenovo/Downloads/site/_shot_home.png', fullPage: true });
  await browser.close();
  console.log('OK');
})().catch(e => { console.log('ERR ' + e.message); process.exit(1); });
