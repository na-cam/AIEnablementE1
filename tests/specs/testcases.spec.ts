import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestCasesPage } from '../pages/TestCasesPage';
import testData from '../fixtures/testData.json';

test.describe('Test Cases Management', () => {
  let loginPage: LoginPage;
  let testCasesPage: TestCasesPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    testCasesPage = new TestCasesPage(page);
    
    // Login before each test
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
      true // automated
    );
    
    // Verify test case was created (page should redirect or show success)
    await page.waitForTimeout(2000);
  });

  test('TC006: Create Test Case - Missing Required Fields', async ({ page }) => {
    await testCasesPage.navigateToTestCases();
    await testCasesPage.clickNewTestCase();
    
    // Try to create test case without title
    await testCasesPage.fillDescription('Test description without title');
    await testCasesPage.submitTestCase();
    
    // Should remain on form due to validation error
    await page.waitForTimeout(1000);
  });

  test('QA Sandbox Complete Scenario', async ({ page }) => {
    // Step 1: Login to QA Sandbox (already done in beforeEach)
    
    // Clean slate - delete any existing test cases first
    await testCasesPage.navigateToTestCases();
    await testCasesPage.deleteAllTestCases();
    
    // Step 2: Create at least 5 Use Cases
    for (let i = 0; i == 5; i++) {
      await testCasesPage.navigateToTestCases();
      await testCasesPage.clickNewTestCase();
      await testCasesPage.createComplexTestCase(
        `Use Case ${i + 1}`,
        `Description for use case ${i + 1}`,
        `Expected result for use case ${i + 1}`,
        [`Step 1 for use case ${i + 1}`, `Step 2 for use case ${i + 1}`],
        false
      );
      await page.waitForTimeout(2000);
    }
    
    // Step 3: Edit title for all use cases 'The [id] of this use case is even/odd.'
    // Step 4: Edit the use case details 'This [fieldName] belongs to [id] which is even/odd.'
    await testCasesPage.navigateToTestCases();
    await testCasesPage.editAllTestCases();
    await page.waitForTimeout(2000);
    
    // Step 5: Delete all created Use Cases
    await testCasesPage.navigateToTestCases();
    await testCasesPage.deleteAllTestCases();
    await testCasesPage.verifyEmptyTestCasesMessage();
  });

  test('TC013: Delete All Test Cases', async ({ page }) => {
    await testCasesPage.navigateToTestCases();
    await testCasesPage.deleteAllTestCases();
    await page.waitForTimeout(4000);
    await testCasesPage.verifyEmptyTestCasesMessage();
  });
});