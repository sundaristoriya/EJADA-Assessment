# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> Create Token
- Location: tests\api.spec.js:6:5

# Error details

```
SyntaxError: Unexpected token '<', "<html>
<he"... is not valid JSON
```

# Test source

```ts
  1  | // tests/api.spec.js
  2  | import { test, expect, request } from '@playwright/test';
  3  | 
  4  | let token;
  5  | 
  6  | test('Create Token', async () => {
  7  |   const api = await request.newContext();
  8  | 
  9  |   const res = await api.post('/api-clients/', {
  10 |     baseURL: 'https://simple-books-api.glitch.me',
  11 |     data: {
  12 |       clientName: 'PlaywrightUser',
  13 |       clientEmail: `user${Date.now()}@mail.com`
  14 |     }
  15 |   });
  16 | 
> 17 |   const body = await res.json();
     |                ^ SyntaxError: Unexpected token '<', "<html>
  18 |   token = body.accessToken;
  19 | 
  20 |   expect(res.status()).toBe(201);
  21 | });
  22 | 
  23 | test('GET Books', async ({ request }) => {
  24 |   const res = await request.get('https://simple-books-api.glitch.me/books');
  25 | 
  26 |   expect(res.status()).toBe(200);
  27 | });
  28 | 
  29 | test('POST Order', async ({ request }) => {
  30 |   const res = await request.post('https://simple-books-api.glitch.me/orders', {
  31 |     headers: {
  32 |       Authorization: `Bearer ${token}`
  33 |     },
  34 |     data: {
  35 |       bookId: 1,
  36 |       customerName: 'John'
  37 |     }
  38 |   });
  39 | 
  40 |   expect(res.status()).toBe(201);
  41 | });
```