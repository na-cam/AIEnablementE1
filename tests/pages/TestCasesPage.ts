import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TestCasesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToTestCases() {
    await this.page.getByRole('link', { name: 'Test Cases ' }).click();
  }

  async clickNewTestCase() {
    await this.page.locator('a.btn.btn-primary[href="/new-testcase"]').click();
  }

  async fillTitle(title: string) {
    await this.page.getByPlaceholder('Title').fill(title);
  }

  async fillDescription(description: string) {
    await this.page.getByPlaceholder('Description').fill(description);
  }

  async fillExpectedResult(expectedResult: string) {
    await this.page.getByPlaceholder('Expected result').fill(expectedResult);
  }

  async addTestStep(stepDescription: string) {
    await this.page.getByPlaceholder('Test step').fill(stepDescription);
    await this.page.getByText('Add Test step').click();
  }

  async checkAutomated() {
    await this.page.locator('.react-switch-bg').click();
  }

  async submitTestCase() {
    await this.page.getByText('Submit').click();
    await this.page.waitForTimeout(500);
  }

  async addMultipleTestSteps(steps: string[]) {
    for (let i = 0; i < steps.length; i++) {
      await this.page.getByPlaceholder('Test step').last().fill(steps[i]);
      await this.page.getByText('Add Test step').click();
      await this.page.waitForTimeout(500);
    }
  }

  async createComplexTestCase(title: string, description: string, expectedResult: string, testSteps: string[], automated: boolean = false) {
    await this.fillTitle(title);
    await this.fillDescription(description);
    await this.fillExpectedResult(expectedResult);
    await this.addMultipleTestSteps(testSteps);
    
    if (automated) {
      await this.checkAutomated();
    }
    
    await this.submitTestCase();
  }

  async editTestCase(testCaseId: string) {
    await this.page.locator('.preview-card-title-value').first().click();
    await this.page.waitForTimeout(2000);
  }

  async editTitle(id: string) {
    const isEven = parseInt(id) % 2 === 0;
    const uniqueSuffix = Date.now();
    const newTitle = `The ${id} of this use case is ${isEven ? 'even' : 'odd'} - ${uniqueSuffix}.`;
    await this.page.getByPlaceholder('Title').fill('');
    await this.page.getByPlaceholder('Title').fill(newTitle);
  }

  async editDescription(id: string) {
    const isEven = parseInt(id) % 2 === 0;
    const newDescription = `This description belongs to ${id} which is ${isEven ? 'even' : 'odd'}.`;
    await this.page.getByPlaceholder('Description').fill('');
    await this.page.getByPlaceholder('Description').fill(newDescription);
  }

  async editExpectedResult(id: string) {
    const isEven = parseInt(id) % 2 === 0;
    const newExpectedResult = `This expected result belongs to ${id} which is ${isEven ? 'even' : 'odd'}.`;
    await this.page.getByPlaceholder('Expected result').fill('');
    await this.page.getByPlaceholder('Expected result').fill(newExpectedResult);
  }

  async editAllTestSteps(id: string) {
    const isEven = parseInt(id) % 2 === 0;
    const testStepInputs = this.page.getByPlaceholder('Test step');
    const count = await testStepInputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = testStepInputs.nth(i);
      const newStepText = `This test step ${i + 1} belongs to ${id} which is ${isEven ? 'even' : 'odd'}.`;
      
      await expect(input).toBeVisible();
      await expect(input).toBeEnabled();
      await input.fill(newStepText);
    }
  }

  async editAllFields(id: string) {
    await this.editTitle(id);
    await this.editDescription(id);
    await this.editExpectedResult(id);
    await this.editAllTestSteps(id);
    await this.submitTestCase();
  }

  async editAllTestCases() {
    const getCards = () => this.page.locator('.preview-card-title-value');
    
    await this.navigateToTestCases();
    await expect(getCards().first()).toBeVisible();
    
    const initialCount = await getCards().count();
    let index = 1;
    
    while (index <= initialCount) {
      const firstCard = getCards().first();
      await expect(firstCard).toBeVisible();
      
      await Promise.all([
        this.page.waitForURL('**/edit-testcase/*', { timeout: 10000 }),
        firstCard.click()
      ]);
      
      const titleInput = this.page.getByPlaceholder('Title');
      await expect(titleInput).toBeVisible();
      
      const id = index.toString();
      const isEven = parseInt(id) % 2 === 0;
      const expectedDescription = `This description belongs to ${id} which is ${isEven ? 'even' : 'odd'}.`;
      
      const currentDescription = await this.page.getByPlaceholder('Description').inputValue();
      
      if (currentDescription !== expectedDescription) {
        await this.editAllFields(id);
      }
      
      await this.navigateToTestCases();
      await expect(getCards().first()).toBeVisible();
      
      index++;
    }
  }

  async deleteAllTestCases() {
    await this.page.waitForTimeout(2000);
    
    while (true) {
      const testCaseCards = this.page.locator('.preview-card-title-value');
      const count = await testCaseCards.count();
      
      if (count === 0) break;
      
      await testCaseCards.first().click();
      await this.page.locator('.btn.btn-danger').click();
      await this.page.locator('.confirmation-dialog--buttons--confirm').click();
      await this.page.waitForTimeout(2000);
    }
  }

  async verifyEmptyTestCasesMessage() {
    await expect(this.page.getByText('There are no test cases created')).toBeVisible();
  }

  async verifyNewTestCaseButton() {
    await expect(this.page.locator('a.btn.btn-primary[href="/new-testcase"]')).toBeVisible();
  }
}