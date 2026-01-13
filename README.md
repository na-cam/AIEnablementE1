# QA Sandbox Test Automation Framework

## Assignment: AI-Accelerated Test Automation - Beginner

This project implements automated testing for the QA Sandbox application using Playwright with TypeScript, following Page Object Model (POM) architecture.

## Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Setup & Execution
1. **Install dependencies:**
   ```bash
   npm install
   npx playwright install
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **View results:**
   ```bash
   npm run report
   ```

### Alternative: Use the batch script
```bash
run-tests.bat
```

## Project Deliverables

✅ **rules.md** - Framework architecture and coding standards  
✅ **Test Plan** - 7 test cases covering login and test case management  
✅ **Framework** - Complete Playwright TypeScript automation framework  
✅ **Tests** - UI tests for all planned scenarios  
✅ **Reporting** - HTML and JUnit XML reports with failure artifacts  
✅ **Documentation** - Complete setup and execution guides  

## Test Coverage

### Login Tests (4 scenarios)
- ✅ Valid credentials login
- ✅ Invalid email handling
- ✅ Invalid password handling  
- ✅ Empty fields validation

### Test Case Management (3 scenarios)
- ✅ Navigate to Test Cases page
- ✅ Create test case with valid data
- ✅ Validation for missing required fields

## Framework Features

- **Architecture**: Page Object Model (POM)
- **Locators**: Semantic locators (getByPlaceholder, getByText, getByRole)
- **Reporting**: HTML + JUnit XML with screenshots/videos on failure
- **Parallel Execution**: Faster test runs
- **Retry Logic**: Handles flaky tests
- **Cross-browser**: Configurable browser support

## File Structure
```
├── docs/                    # Documentation
├── tests/
│   ├── pages/              # Page Object classes
│   ├── specs/              # Test specifications  
│   ├── fixtures/           # Test data
│   └── utils/              # Helper functions
├── test-results/           # Reports and artifacts
├── playwright.config.ts    # Framework configuration
├── rules.md               # Framework rules
└── run-tests.bat          # Execution script
```

## Test Application
- **URL**: https://qasandbox.dev
- **Credentials**: nasveta.camdzic@htecgroup.com / Test1234!!

## Reports Location
- HTML Report: `test-results/html-report/index.html`
- JUnit XML: `test-results/junit-report.xml`
- Screenshots/Videos: `test-results/artifacts/`

For detailed documentation, see [docs/framework-documentation.md](docs/framework-documentation.md)
