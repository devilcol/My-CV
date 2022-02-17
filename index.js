const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/', {
    waitUntil: 'networkidle2'
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('Done')
})();