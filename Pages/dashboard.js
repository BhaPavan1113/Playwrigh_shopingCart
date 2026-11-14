class dashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card");
  }

  async addtocart(productName) {
    await this.products.first().waitFor({ state: "visible" });
    const productCount = await this.products.count();

    for (let i = 0; i < productCount; i++) {
      const pName = (await this.products.nth(i).locator("b").textContent())?.trim();
      if (pName?.toLowerCase() === productName.trim().toLowerCase()) {
        await this.products
          .nth(i)
          .getByRole("button", { name: " Add To Cart" })
          .click();
        return;
      }
    }

    throw new Error(`Product "${productName}" was not found on the dashboard.`);
  }
}

module.exports = { dashboardPage };
