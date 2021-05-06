const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);

    await page.goto("https://www.google.com");

    const count = await page.$$eval('a', element => element.length);

    console.log('Links count of Google page: ' + count);

    await browser.close();

})();