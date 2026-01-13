import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestCasesPage } from '../pages/TestCasesPage';
import testData from '../fixtures/testData.json';

test.describe.serial('Test Cases Management', () => {
  let loginPage: LoginPage;
  let testCasesPage: TestCasesPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    testCasesPage = new TestCasesPage(page);
    
    await page.goto('https://qa-sandbox.ni.htec.rs/login');
    const { email, password } = testData.validUser;
    await loginPage.login(email, password);
    await loginPage.verifySuccessfulLogin();
  });

  test('TC007: Navigate to Test Cases Page', async ({ page }) => {
    await testCasesPage.navigateToTestCases();
    await testCasesPage.verifyNewTestCaseButton();
  });

  test('TC005: Create New Test Case - Valid Data', async ({ page }) => {
    const testCase = testData.testCases[0];
    
    await testCasesPage.navigateToTestCases();
    await testCasesPage.clickNewTestCase();
    await testCasesPage.createComplexTestCase(
      testCase.title,
      testCase.description,
      testCase.expectedResult,
      testCase.testSteps,
      true
    );
    
    await page.waitForTimeout(2000);
  });

  test('TC006: Create Test Case - Missing Required Fields', async ({ page }) => {
    await testCasesPage.navigateToTestCases();
    await testCasesPage.clickNewTestCase();
    
    await testCasesPage.fillDescription('Test description without title');
    await testCasesPage.submitTestCase();
    
    await page.waitForTimeout(1000);
  });

  test('TC014: Edit Test Cases', async ({ page }) => {
    await testCasesPage.navigateToTestCases();
    await testCasesPage.editAllTestCases();
    await page.waitForTimeout(3000);
    
    await testCasesPage.navigateToTestCases();
    await expect(page.locator('.preview-card-title-value').first()).toBeVisible();
  });

  test('TC013: Delete All Test Cases', async ({ page }) => {
    await testCasesPage.navigateToTestCases();
    await testCasesPage.deleteAllTestCases();
    await page.waitForTimeout(4000);
    await testCasesPage.verifyEmptyTestCasesMessage();
  });
});