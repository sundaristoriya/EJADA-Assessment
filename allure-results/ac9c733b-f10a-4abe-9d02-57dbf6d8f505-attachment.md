# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login Tests >> Valid Login
- Location: tests\login.spec.js:8:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#user-name')
    - locator resolved to <input value="" type="text" id="user-name" name="user-name" autocorrect="off" data-test="username" autocapitalize="none" placeholder="Username" class="input_error form_input"/>
    - fill("standard_user")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Test source

```ts
  1  | // pages/LoginPage.js
  2  | export class LoginPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.username = page.locator('#user-name');
  6  |     this.password = page.locator('#password');
  7  |     this.loginBtn = page.locator('#login-button');
  8  |     this.error = page.locator('[data-test="error"]');
  9  |   }
  10 | 
  11 |   async goto() {
  12 |     await this.page.goto('https://www.saucedemo.com/');
  13 |   }
  14 | 
  15 |   async login(username, password) {
> 16 |     await this.username.fill(username);
     |                         ^ Error: locator.fill: Target page, context or browser has been closed
  17 |     await this.password.fill(password);
  18 |     await this.loginBtn.click();
  19 |   }
  20 | 
  21 |   async getError() {
  22 |     return this.error.textContent();
  23 |   }
  24 | }
```