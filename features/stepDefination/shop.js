const { Given, When, Then } = require('@cucumber/cucumber');

Given('User is on the login page', async function () {
await this.pom.login().goto();
});

When('User enters the {string} and {string} and clicks on login button', async function (username, password) {
  await this.pom.login().login(username, password);
});



When('User adds the {string} to the cart',async function (productName) {
await this.pom.dashboard().addtocart(productName);
});

Then('User should be able to the {string}  checkout the product and place the order successfully',async function (productName) {
 await this.pom.cart().checkoutPage(productName);
 await this.pom.order().finalorderPage();
});

