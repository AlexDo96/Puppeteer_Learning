const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });

    const page = await browser.newPage();

    await page.goto("https://devexpress.github.io/testcafe/example/");

    await page.type('#developer-name', 'Alex', {
        delay: 200
    });

    await page.waitFor(3000); // Wait for 3 seconds

    await browser.close();

})();