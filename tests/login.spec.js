// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { users } from '../utils/testData.js';

test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.valid.username, users.valid.password);

    await expect(page).toHaveURL(/inventory/);
  });

  test('Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.invalid.username, users.invalid.password);

    await expect(login.error).toContainText('Username and password');
  });

  test('Locked User', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.locked.username, users.locked.password);

    await expect(login.error).toContainText('locked out');
  });

});