// tests/api.spec.js
import { test, expect, request } from '@playwright/test';

test.describe('API Tests', () => {

  let token;

  test.beforeAll(async ({ request }) => {
    const res = await request.post('https://simple-books-api.glitch.me/api-clients/', {
      data: {
        clientName: 'User',
        clientEmail: `user${Date.now()}@mail.com`
      }
    });

    token = (await res.json()).accessToken;
  });

  test('Create Order', async ({ request }) => {
    const res = await request.post('https://simple-books-api.glitch.me/orders', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        bookId: 1,
        customerName: 'John'
      }
    });

    expect(res.status()).toBe(201);
  });

});