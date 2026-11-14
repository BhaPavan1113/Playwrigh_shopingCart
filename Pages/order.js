const {expect} = require('@playwright/test')

class orderPage {
  constructor(page) {
    this.page = page;
    this.message = page.locator(".hero-primary");
    this.orderidMessage = page.locator(
      "//td[@class='em-spacer-1']//label[@class='ng-star-inserted']",
    );
  }

  async finalorderPage() {
    await  this.message.waitFor();
    const confirmMessage = await  this.message.textContent();
    expect(confirmMessage).toBe(" Thankyou for the order. ");
    const orderId = await this.orderidMessage.textContent();
    const orderIdValue = (await orderId.split(" ")[2]).trim();
    console.log(orderIdValue);
  }
}

module.exports={orderPage};
