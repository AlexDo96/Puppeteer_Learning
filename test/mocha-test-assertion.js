const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Test With Chai', () => {
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

    it('Check links of Google page', async () => {
        const count = await page.$$eval('a', element => element.length);
        console.log('Links count of Google page: ' + count);
        expect(count).to.equal(19);
    });

    after(async () => {
        await browser.close();
    });
});