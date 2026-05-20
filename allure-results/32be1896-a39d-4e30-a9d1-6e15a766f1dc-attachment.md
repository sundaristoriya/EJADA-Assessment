# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: order.spec.js >> End-to-End Order
- Location: tests\order.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#login-button')
    - locator resolved to <input type="submit" value="Login" id="login-button" name="login-button" data-test="login-button" class="submit-button btn_action"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: standard_user
      - textbox "Password" [ref=e13]: secret_sauce
      - button "Login" [active] [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
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
  16 |     await this.username.fill(username);
  17 |     await this.password.fill(password);
> 18 |     await this.loginBtn.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |   }
  20 | 
  21 |   async getError() {
  22 |     return this.error.textContent();
  23 |   }
  24 | }
```