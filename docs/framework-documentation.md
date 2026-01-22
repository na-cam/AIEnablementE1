# QA Sandbox Test Automation Framework

## Overview
This project contains automated tests for the QA Sandbox application using Playwright with TypeScript, following the Page Object Model (POM) pattern.

## Project Structure
```
├── docs/                    # Documentation
│   └── test-plan.md        # Test plan with test cases
├── tests/                  # Test automation code
│   ├── pages/              # Page Object Model classes
│   │   ├── BasePage.ts     # Base page with common functionality
│   │   ├── LoginPage.ts    # Login page interactions
│   │   └── TestCasesPage.ts # Test cases page interactions
│   ├── specs/              # Test specifications
│   │   ├── login.spec.ts   # Login functionality tests
│   │   └── testcases.spec.ts # Test case management tests
│   ├── fixtures/           # Test data
│   │   └── testData.json   # Static test data
│   └── utils/              # Utility functions
│       └── TestUtils.ts    # Common test helpers
├── playwright.config.ts    # Playwright configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── rules.md               # Framework rules and standards
└── run-tests.bat          # Execution script
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Run the setup script:
   ```bash
   npm install
   npx playwright install
   ```

### Running Tests
Execute all tests:
```bash
npm test
```

Run tests in headed mode:
```bash
npm run test:headed
```

Debug tests:
```bash
npm run test:debug
```

View test report:
```bash
npm run report
```

### Test Cases Covered

#### Login Tests (4 scenarios)
1. **TC001**: Successful Login - Valid credentials
2. **TC002**: Invalid Email Login - Wrong email format
3. **TC003**: Invalid Password Login - Wrong password
4. **TC004**: Empty Fields Login - Missing credentials

#### Test Case Management (5 scenarios)
5. **TC005**: Create New Test Case - Valid data with all fields
6. **TC006**: Create Test Case - Missing required fields validation
7. **TC007**: Navigate to Test Cases Page - Page accessibility
8. **TC014**: Edit Test Cases - Smart editing with conditional updates
9. **TC013**: Delete All Test Cases - Cleanup functionality

#### Multiple Test Cases Creation (5 scenarios)
10. **TC008**: Create Login Functionality Test Case
11. **TC009**: Create New Test Case Creation Test
12. **TC010**: Create Navigation Test Case
13. **TC011**: Create Form Validation Test Case
14. **TC012**: Create Automated Test Case

## Framework Features
- **Page Object Model**: Organized, maintainable test structure
- **Semantic Locators**: Preferred use of getByPlaceholder, getByText, getByRole
- **Advanced Edit Logic**: Index-based iteration with unique titles and conditional updates
- **Navigation Sync**: Promise.all for URL navigation and state-based waits
- **Stability Features**: Visibility/enabled checks, minimal delays, no Toastify dependencies
- **Parallel Execution**: Tests run in parallel for faster execution
- **Serial Execution**: Test case management tests run serially for proper order
- **Multiple Reporting**: HTML and JUnit XML reports
- **Screenshot/Video**: Captured on test failures
- **Retry Logic**: Automatic retries for flaky tests (2 retries in CI)
- **Extended Timeout**: 60s timeout for complex operations

## Test Data
- Valid credentials: nasveta.camdzic+01@htecgroup.com / Test1234!!
- Test data stored in JSON fixtures for easy maintenance
- Dynamic unique title generation using timestamps
- Even/odd logic for test case field values

## Reporting
- HTML reports generated in `test-results/html-report/`
- JUnit XML reports in `test-results/junit-report.xml`
- Screenshots and videos captured on failures
- Artifacts stored in `test-results/artifacts/`

## CI/CD Integration
The framework is configured for CI/CD with:
- Headless browser execution
- Retry logic for unstable tests
- Artifact collection
- Multiple browser support (configurable)