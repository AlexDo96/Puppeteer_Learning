const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];

(async () => {
    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();
    await page.emulate(iPhonex);
    await page.goto('https://www.facebook.com/');
    await page.screenshot({
        path: 'facebook.png'
    });
    const host = await page.evaluate(() => location.host);
    console.log(host); // www.facebook.com'  
    browser.close();
})();