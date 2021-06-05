const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });

    const page = await browser.newPage();

    await page.goto("https://www.google.com");

    await page.waitForSelector("input[name='q']");

    await page.type("input[name='q']", "Hello World");

    await page.keyboard.press('Enter', {
        delay: 50
    });

    await page.waitFor(3000); // Wait for 3 seconds

    await browser.close();

})();