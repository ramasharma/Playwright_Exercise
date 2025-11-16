import { Locator, Page } from '@playwright/test';

export class BookPage {
  readonly page: Page;
  readonly title: Locator;
  readonly price: Locator;
  readonly description: Locator;
  readonly category: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1');
    this.price = page.locator('.price_color').first();
    this.description = page.locator('#product_description');
    this.category = page.locator('.breadcrumb li').nth(2);
  }
}
