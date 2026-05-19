// pages/InventoryPage.js
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator('.inventory_item button').first();
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProduct() {
    await this.addToCartBtn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}