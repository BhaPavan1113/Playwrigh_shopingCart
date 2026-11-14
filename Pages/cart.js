class cartPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator("button[routerlink*='cart']");
    this.cartproducts = page.locator(".cartSection h3");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.selectCountry = page.getByPlaceholder("Select Country");
    this.placeorderButton = page.locator(".action__submit");
  }

  async checkoutPage(productName) {
    await this.cartButton.click();
    await this.cartproducts.first().waitFor({ state: "visible" });

    const cartProductCount = await this.cartproducts.count();
    let hasProduct = false;
    for (let i = 0; i < cartProductCount; i++) {
      const cartProductName = (await this.cartproducts.nth(i).textContent())?.trim();
      if (cartProductName?.toLowerCase() === productName.trim().toLowerCase()) {
        hasProduct = true;
        break;
      }
    }

    if (!hasProduct) {
      throw new Error(`Product "${productName}" was not found in the cart.`);
    }

    await this.checkoutButton.click();
    await this.selectCountry.waitFor({ state: 'visible' });
    await this.selectCountry.pressSequentially("ind");
    const dropdown = this.page.locator(".ta-results");
    await dropdown.waitFor();
    for (let i = 0; i < (await dropdown.locator("button").count()); i++) {
      const text = (
        await dropdown.locator("button").nth(i).textContent()
      ).trim();
      if (text === "India") {
        await dropdown.locator("button").nth(i).click();
        break;
      }
    }

    await this.placeorderButton.click();
  }
}

module.exports = { cartPage };
