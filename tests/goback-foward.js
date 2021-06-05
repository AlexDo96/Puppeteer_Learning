const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });

    const page = await browser.newPage();

    await page.goto("https://www.google.com");

    await page.waitForSelector('h1');

    await page.goto("https://dev.to");

    await page.waitForSelector('#top-bar');

    await page.goBack();

    await page.waitForSelector('h1');

    await page.goForward();

    await page.waitForSelector('#top-bar');

    await browser.close();

})();