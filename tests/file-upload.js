const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 50

    });

    const page = await browser.newPage();

    await page.goto("https://uppy.io/examples/xhrupload/", {
        "waitUntil": 'domcontentloaded'
    });

    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click('.uppy-FileInput-btn')
    ]);

    await fileChooser.accept(['./Automation_requirement.png']);

    await browser.close();

})();