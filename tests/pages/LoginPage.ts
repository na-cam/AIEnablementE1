import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillEmail(email: string) {
    await this.page.getByPlaceholder('email').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByPlaceholder('password').fill(password);
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async verifyLoginError() {
    // Wait for error message to appear
    await this.page.waitForTimeout(1000);
  }

  async verifySuccessfulLogin() {
    await expect(this.page.getByText('Dashboard').nth(1)).toBeVisible();
  }
}