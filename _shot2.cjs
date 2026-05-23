const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(800);

  const shoot = async (sel, file) => {
    const el = page.locator(sel).first();
    if (await el.count() === 0) { console.log('MISSING ' + sel); return; }
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await el.screenshot({ path: file });
    console.log('shot ' + file);
  };

  await shoot('section[aria-labelledby="objectives-title"]', 'C:/Users/lenovo/Downloads/site/_shot_obj.png');
  await shoot('section[aria-labelledby="authorities-title"]', 'C:/Users/lenovo/Downloads/site/_shot_auth.png');
  await shoot('section[aria-labelledby="region-title"]', 'C:/Users/lenovo/Downloads/site/_shot_region.png');
  await browser.close();
  console.log('DONE');
})().catch(e => { console.log('ERR ' + e.message); process.exit(1); });
