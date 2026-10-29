// shot.js entrada.html salida.png [ancho]
const { chromium } = require('playwright');
(async () => {
  const [,, html, png, w] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: parseInt(w||'900'), height: 600 },
                              deviceScaleFactor: 2 });
  await p.goto('file://' + require('path').resolve(html));
  const el = await p.$('#shot');
  await (el || p).screenshot({ path: png });
  await b.close();
})();
