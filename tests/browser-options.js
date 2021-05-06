const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    // Launch browser options
    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 500,
        "devtools": true
    });
    const page = await browser.newPage();

    await page.goto("https://www.google.com");

    await browser.close();

})();