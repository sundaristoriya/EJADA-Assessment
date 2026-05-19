# 🚀 Playwright Automation Framework (JavaScript)

This project is a scalable and maintainable **test automation framework** built using **Playwright (JavaScript)** following modern best practices.

It covers:
- UI Automation (SauceDemo)
- API Testing (Simple Books API)
- Cross-browser execution
- Parallel test execution
- Page Object Model (POM)
- Reporting (HTML & Allure)

---
# 📌 Tech Stack

- Playwright (Latest)
- JavaScript (ES Modules)
- Node.js
- Allure Reporting
- GitHub Actions 

---
# 📂 Project Structure

playwright-framework/
│
├── tests/
│ ├── login.spec.js
│ ├── order.spec.js
│ └── api.spec.js
│
├── pages/
│ ├── LoginPage.js
│ ├── InventoryPage.js
│ └── CheckoutPage.js
│
├── utils/
│ └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

# ✅ Features Implemented

## 🔹 UI Automation
- Login Scenarios:
  - Valid Login
  - Invalid Login
  - Locked User
- Product Flow:
  - Add to Cart
  - Checkout
  - Order Completion

## 🔹 API Automation
- GET Books
- POST Token Generation
- POST Order (Authorized)
- Token-based Authentication

## 🔹 Framework Features
- Page Object Model (POM)
- Reusable components
- Parallel execution
- Cross-browser support:
  - Chromium
  - Firefox
