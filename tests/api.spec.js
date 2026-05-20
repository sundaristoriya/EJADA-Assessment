// tests/api.spec.js
import { test, expect } from '@playwright/test';

test.describe('API Tests - Parallel Safe', () => {

  test('Create Order', async ({ request }) => {

    // ✅ Step 1: Generate token (unique per test)
    const tokenRes = await request.post('https://simple-books-api.glitch.me/api-clients/', {
      data: {
        clientName: 'User',
        clientEmail: `user${Date.now()}_${Math.random()}@mail.com`
      }
    });

    expect(tokenRes.status()).toBe(201);

    const token = (await tokenRes.json()).accessToken;

    // ✅ Step 2: Create Order
    const orderRes = await request.post('https://simple-books-api.glitch.me/orders', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        bookId: 1,
        customerName: 'John'
      }
    });

    console.log(await orderRes.text()); // debug

    expect(orderRes.status()).toBe(201);
  });

});