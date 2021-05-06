const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();

    await page.goto("https://devexpress.github.io/testcafe/example/");

    await page.type('#developer-name', 'Alex', {delay: 200});
    
    await page.click('#remote-testing', {clickCount: 2}); // Double clicks

    await page.select('#preferred-interface', 'Javascript API');

    await page.type('#comments', 'Let fill some text', {delay: 200});

    await page.click('#submit-button');

    await page.waitForSelector('.result-content');

    await page.waitFor(2000);

    await browser.close();

})();