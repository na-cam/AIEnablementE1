import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestCasesPage } from '../pages/TestCasesPage';
import testData from '../fixtures/testData.json';

test.describe('Test Cases Management - Multiple Test Cases', () => {
  let loginPage: LoginPage;
  let testCasesPage: TestCasesPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    testCasesPage = new TestCasesPage(page);
    
    // Login before each test
    await page.goto('/login');
    const { email, password } = testData.validUser;
    await loginPage.login(email, password);
    await loginPage.verifySuccessfulLogin();
  });

  test('TC008: Create Login Functionality Test Case', async ({ page }) => {
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

  test('TC009: Create New Test Case Creation Test', async ({ page }) => {
    const testCase = testData.testCases[1];
    
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

  test('TC010: Create Navigation Test Case', async ({ page }) => {
    const testCase = testData.testCases[2];
    
    await testCasesPage.navigateToTestCases();
    await testCasesPage.clickNewTestCase();
    await testCasesPage.createComplexTestCase(
      testCase.title,
      testCase.description,
      testCase.expectedResult,
      testCase.testSteps,
      false
    );
    
    await page.waitForTimeout(2000);
  });

  test('TC011: Create Form Validation Test Case', async ({ page }) => {
    const testCase = testData.testCases[3];
    
    await testCasesPage.navigateToTestCases();
    await testCasesPage.clickNewTestCase();
    await testCasesPage.createComplexTestCase(
      testCase.title,
      testCase.description,
      testCase.expectedResult,
      testCase.testSteps,
      false
    );
    
    await page.waitForTimeout(2000);
  });

  test('TC012: Create Automated Test Case', async ({ page }) => {
    const testCase = testData.testCases[4];
    
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
});