# Playwright_Exercise

## About
+ This assignment contains automated UI tests written in **Playwright + TypeScript**, using the **Page Object Model (POM)** design pattern.  
+ All tests are executed against the demo site: https://books.toscrape.com/
+ The exercise includes verifying page titles, navigating categories, validating book categories, and inspecting book details.

### POM Structure: The following Page Object classes are implemented:
- HomePage.ts
- CategoryPage.ts
- Books.ts

### Test Class:
- Book.spec.ts – contains all test scenarios

## Technologies Used
+ Playwright
+ TypeScript
+ Node.js
+ VS Code

## Get Started

### Install Dependencies
- Make sure Node.js (v16+) is installed, then run: npm install
- Install Playwright browsers: npx playwright install
- Run a single test file: npx playwright test tests/Book.spec.ts
-  View HTML Report: npx playwright show-report



