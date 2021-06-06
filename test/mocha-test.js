const puppeteer = require('puppeteer');

describe('Test With Mocha', () => {
    before(async () => {
        browser = await puppeteer.launch({
            "headless": false
        });
    });

    it('Page Open successfully', async () => {
        page = await browser.newPage();
    });

    it('Website Should Load', async () => {
        const response = await page.goto("https://www.google.com", {
            waitUntil: 'domcontentloaded'
        });
    }).timeout(0);
    
    after(async () => {
        await browser.close();
    });
});