const puppeteerFirefox = require('puppeteer-firefox');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const test = async browser => {
        const page = await browser.newPage();

        //Set view of the page
        /*
        await page.setViewport({
            "width": "1920",
            "height": "1080"
        });
        */

        await page.goto("https://www.google.com");

        await browser.close();
    }

    const firefox = await puppeteerFirefox.launch({
        "headless": false
    });

    await test(firefox);
})();