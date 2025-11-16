import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://books.toscrape.com/');
});

/* -------------------------------
1. HOME PAGE TITLE
--------------------------------*/
test('Verify homepage title contains "Books" - top', async ({ page }) => {
  await expect(page.locator('.side_categories')).toContainText('Books');
});

/* -------------------------------
2. TRAVEL CATEGORY 
--------------------------------*/
test('Verify all books in "Travel" category belong to Travel', async ({ page }) => {
  // Click exact category
  await page.locator('a[href*="travel_2"]').click();

  // Assert category heading
  await expect(page.locator('h1')).toHaveText('Travel');

  const products = page.locator('.product_pod');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    await products.nth(i).locator('h3 a').click();

    // Breadcrumb: Home → Books → Travel → Book Name
    const category = page.locator('.breadcrumb li').nth(2);
    await expect(category).toHaveText('Travel');

    await page.goBack();
  }
});

/* -------------------------------
3. FICTION CATEGORY 
--------------------------------*/
test('Verify all books in "Fiction" category belong to Fiction', async ({ page }) => {
  // Click ONLY main Fiction category (id = 10)
  await page.locator('a[href*="fiction_10"]').click();

  await expect(page.locator('h1')).toHaveText('Fiction');

  const products = page.locator('.product_pod');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    await products.nth(i).locator('h3 a').click();

    // Verify correct breadcrumb category
    const category = page.locator('.breadcrumb li').nth(2);
    await expect(category).toHaveText('Fiction');

    await page.goBack();
  }
});

/* -------------------------------
4. BONUS TEST 
--------------------------------*/
test('Verify fields of the first book (bonus)', async ({ page }) => {
  await page.locator('.product_pod').first().locator('h3 a').click();

  // All selectors scoped to product page
  const price = page.locator('.price_color').first();
  const title = page.locator('h1');
  const description = page.locator('#product_description');
  const category = page.locator('.breadcrumb li').nth(2);

  await expect(title).toBeVisible();
  await expect(price).toBeVisible();
  await expect(description).toBeVisible();
  await expect(category).toBeVisible();
});
