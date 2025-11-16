import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step(`Navigating to Url`, async () => {
    await page.goto('https://books.toscrape.com/index.html');
  })
  await test.step(`Verify the homepage title contains “Books”`, async () => {
    await expect(page.getByRole('complementary')).toContainText('Books');

  })
  await test.step(`Click on the “Travel” category and page contain title travel`, async () => {
    await page.getByRole('listitem').nth(3).click();
    await page.getByRole('link', { name: 'Travel' }).click();
    await page.getByRole('heading', { name: 'Travel' }).click();
    await expect(page.locator('h1')).toContainText('Travel');

  })
  await test.step(` Click on the “Fiction” category `, async () => {

    await page.getByRole('listitem').filter({ hasText: 'Historical Fiction' }).nth(1).click();
    await page.getByRole('link', { name: 'Historical Fiction' }).click();
    await page.getByRole('heading', { name: 'Historical Fiction' }).click();
    await expect(page.locator('h1')).toContainText('Historical Fiction');
    await page.locator('div').first().click();
  })

});