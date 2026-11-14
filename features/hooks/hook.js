const {Before, After, setDefaultTimeout} = require('@cucumber/cucumber');

const {chromium} = require('@playwright/test');
const {pageObjectManager} = require('../../Pages/POManager');

setDefaultTimeout(30 * 1000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.pom = new pageObjectManager(this.page);
});

After(async function () {
  await this.context?.close();
  await this.browser?.close();
});