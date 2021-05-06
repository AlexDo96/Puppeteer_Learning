const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();

    await page.goto("https://www.google.com");

    const count = await page.$$eval('a', element => element.length);

    console.log('Links count of Google page: ' + count);

    expect(count).to.equal(20);

    await browser.close();

})();