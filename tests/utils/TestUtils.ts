import { Page } from '@playwright/test';

export class TestUtils {
  static async takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `test-results/screenshots/${name}.png` });
  }

  static async waitForElement(page: Page, selector: string, timeout: number = 30000) {
    await page.waitForSelector(selector, { timeout });
  }

  static generateRandomString(length: number = 8): string {
    return Math.random().toString(36).substring(2, length + 2);
  }

  static getCurrentTimestamp(): string {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }
}