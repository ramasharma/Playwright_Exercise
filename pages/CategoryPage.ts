import { Locator, Page, expect } from '@playwright/test';

export class CategoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly productPods: Locator;
  readonly breadcrumbCategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1');
    this.productPods = page.locator('.product_pod');
    this.breadcrumbCategory = page.locator('.breadcrumb li').nth(2);
  }

  async assertCategoryName(expected: string) {
    await expect(this.title).toHaveText(expected);
  }

  async openBookNth(index: number) {
    await this.productPods.nth(index).locator('h3 a').click();
  }

  async countBooks() {
    return await this.productPods.count();
  }

  async assertBreadcrumb(expected: string) {
    await expect(this.breadcrumbCategory).toHaveText(expected);
  }
}
