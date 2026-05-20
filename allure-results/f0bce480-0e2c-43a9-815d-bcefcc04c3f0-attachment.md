# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> API Tests >> Create Order
- Location: tests\api.spec.js:19:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
```

# Test source

```ts
  1  | // tests/api.spec.js
  2  | import { test, expect, request } from '@playwright/test';
  3  | 
  4  | test.describe('API Tests', () => {
  5  | 
  6  |   let token;
  7  | 
  8  |   test.beforeAll(async ({ request }) => {
  9  |     const res = await request.post('https://simple-books-api.glitch.me/api-clients/', {
  10 |       data: {
  11 |         clientName: 'User',
  12 |         clientEmail: `user${Date.now()}@mail.com`
  13 |       }
  14 |     });
  15 | 
  16 |     token = (await res.json()).accessToken;
  17 |   });
  18 | 
  19 |   test('Create Order', async ({ request }) => {
  20 |     const res = await request.post('https://simple-books-api.glitch.me/orders', {
  21 |       headers: {
  22 |         Authorization: `Bearer ${token}`
  23 |       },
  24 |       data: {
  25 |         bookId: 1,
  26 |         customerName: 'John'
  27 |       }
  28 |     });
  29 | 
> 30 |     expect(res.status()).toBe(201);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  31 |   });
  32 | 
  33 | });
```