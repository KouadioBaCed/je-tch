import { chromium } from "playwright-core";
import fs from "fs";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
try {
  const page = await browser.newPage();
  for (const file of ["public/hero/web.png", "public/hero/mobile.png"]) {
    const b64 = fs.readFileSync(file).toString("base64");
    const dataUrl = "data:image/png;base64," + b64;
    const r = await page.evaluate(async (url) => {
      const img = new Image();
      await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error("x")); img.src = url; });
      const c = document.createElement("canvas");
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      const ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, c.width, c.height);
      const total = data.length / 4;
      let transparent = 0;
      // orange CTA detection + vertical position
      let orange = 0, orangeYsum = 0, orangeXsum = 0, orangeMinY = c.height, orangeMaxY = 0;
      // green-dark background sampling at corners
      const corner = (x, y) => { const i = (y * c.width + x) * 4; return [data[i], data[i+1], data[i+2], data[i+3]]; };
      let rS=0,gS=0,bS=0,op=0;
      for (let i = 0; i < data.length; i += 4) {
        const a = data[i+3];
        if (a < 24) { transparent++; continue; }
        op++; const r=data[i],g=data[i+1],b=data[i+2]; rS+=r;gS+=g;bS+=b;
        // orange-ish (F58220 / D96A0C)
        if (r > 205 && g > 85 && g < 175 && b < 95) {
          orange++; const idx=i/4; const y=Math.floor(idx/c.width), x=idx%c.width;
          orangeYsum+=y; orangeXsum+=x; if(y<orangeMinY)orangeMinY=y; if(y>orangeMaxY)orangeMaxY=y;
        }
      }
      return {
        size: `${c.width}x${c.height}`,
        pctTransparent: +(100*transparent/total).toFixed(1),
        avgColor: op?`rgb(${Math.round(rS/op)},${Math.round(gS/op)},${Math.round(bS/op)})`:"n/a",
        corners: { TL: corner(2,2), TR: corner(c.width-3,2), BL: corner(2,c.height-3), BR: corner(c.width-3,c.height-3) },
        orange: {
          pct: +(100*orange/total).toFixed(2),
          centroidYpct: orange?+(100*(orangeYsum/orange)/c.height).toFixed(1):null,
          centroidXpct: orange?+(100*(orangeXsum/orange)/c.width).toFixed(1):null,
          bandTopPct: orange?+(100*orangeMinY/c.height).toFixed(1):null,
          bandBottomPct: orange?+(100*orangeMaxY/c.height).toFixed(1):null,
        },
      };
    }, dataUrl);
    console.log(file, JSON.stringify(r, null, 0));
  }
} finally {
  await browser.close();
}
