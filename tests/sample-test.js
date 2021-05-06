const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();

    await page.goto("https://www.google.com");

    await browser.close();

})();