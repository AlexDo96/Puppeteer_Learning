const puppeteer = require('puppeteer');

(async () => { // IIFE (Immediately invoked Functional Expression)
    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 50

    });

    const page = await browser.newPage();

    await page.goto("https://executeautomation.com/demosite/Login.html", {
        "waitUntil": 'domcontentloaded'
    });

    // $x will return Promise and must define variable as [variable]

    // Solution 1:
    /*
    const [txtUsername] = await page.$x("//*[@id='userName']/p/input[@name='UserName']");
    await txtUsername.type('executeautomtion');

    const [txtPassword] = await page.$x("//*[@id='userName']/p/input[@name='Password']");
    await txtPassword.type('admin');
    */

    // Solution 2:
    // Nếu ko có async và await ở dòng code dưới thì đôi khi puppeteer chỉ input một vài kí tự rồi sẽ nhảy qua field khác do cơ chế bất đồng bộ
    await page.waitForXPath("//*[@id='userName']/p/input[@name='UserName']");
    await page.$x("//*[@id='userName']/p/input[@name='UserName']").then(async txtUsername => {
        await txtUsername[0].type('executeautomtion');
    });

    await page.waitForXPath("//*[@id='userName']/p/input[@name='Password']");
    await page.$x("//*[@id='userName']/p/input[@name='Password']").then(async txtPassword => {
        await txtPassword[0].type('admin');
    });

    await page.keyboard.press('Enter');

    // Wait for 
    await page.waitFor(() => document.querySelector("[id=Initial"));
    await page.type('input[id=Initial]', 'KK');

    await browser.close();

})();