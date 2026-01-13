import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../fixtures/testData.json';

test.describe('Login Functionality', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://qa-sandbox.ni.htec.rs/login');
  });

  test('TC001: Successful Login', async ({ page }) => {
    const { email, password } = testData.validUser;
    
    await loginPage.login(email, password);
    await loginPage.verifySuccessfulLogin();
  });

  test('TC002: Invalid Email Login', async ({ page }) => {
    const invalidUser = testData.invalidUsers[0];
    
    await loginPage.login(invalidUser.email, invalidUser.password);
    await loginPage.verifyLoginError();
  });

  test('TC003: Invalid Password Login', async ({ page }) => {
    const invalidUser = testData.invalidUsers[1];
    
    await loginPage.login(invalidUser.email, invalidUser.password);
    await loginPage.verifyLoginError();
  });

  test('TC004: Empty Fields Login', async ({ page }) => {
    const emptyUser = testData.invalidUsers[2];
    
    await loginPage.login(emptyUser.email, emptyUser.password);
    await loginPage.verifyLoginError();
  });
});