// pages/CheckoutPage.js
export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('#checkout');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zip = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.successMsg = page.locator('.complete-header');
  }

  async completeCheckout() {
    await this.checkoutBtn.click();
    await this.firstName.fill('Test');
    await this.lastName.fill('User');
    await this.zip.fill('600001');
    await this.continueBtn.click();
    await this.finishBtn.click();
  }

  async successText() {
    return this.successMsg.textContent();
  }
}