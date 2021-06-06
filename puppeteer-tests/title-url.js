const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });

    const page = await browser.newPage();

    await page.goto("https://www.google.com");

    const title = await page.title();
    const url = await page.url();

    console.log('Page title: ' + title);
    console.log('Page URL: ' + url);

    await browser.close();

})();