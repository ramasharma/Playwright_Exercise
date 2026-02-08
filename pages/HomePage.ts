import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly sideCategories: Locator;
  readonly travelCategory: Locator;
  readonly fictionCategory: Locator;
  readonly firstBook: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sideCategories = page.locator('.side_categories');
    this.travelCategory = page.locator('a[href*="travel_2"]');
    this.fictionCategory = page.locator('a[href*="fiction_10"]');
    this.firstBook = page.locator('.product_pod').first().locator('h3 a');
  }

  async goto() {
    await this.page.goto('https://books.toscrape.com/');
    await this.page.waitForTimeout(3000);
  }

  async openTravelCategory() {
    await this.travelCategory.click();
  }

  async openFictionCategory() {
    await this.fictionCategory.click();
  }

  async openFirstBook() {
    await this.firstBook.click();
  }
}
