class dashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card");
  }

  async addtocart(productName) {
    const productCount = await this.products.count();

    for (let i = 0; i < productCount; i++) {
      const pName = await this.products.nth(i).locator("b").textContent();
      if (pName === productName) {
        await this.products
          .nth(i)
          .getByRole("button", { name: " Add To Cart" })
          .click();
        break;
      }
    }
  }
}

module.exports = { dashboardPage };
