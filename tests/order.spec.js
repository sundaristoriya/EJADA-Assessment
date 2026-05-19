// tests/order.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { users } from '../utils/testData.js';

test('End-to-End Order', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(users.valid.username, users.valid.password);

  await inventory.addProduct();
  await inventory.openCart();

  await checkout.completeCheckout();

  await expect(checkout.successMsg).toHaveText(/Thank you/);
});