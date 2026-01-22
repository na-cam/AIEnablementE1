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
✅ **Advanced Edit Logic** - Smart test case editing with conditional updates

## Test Coverage

### Login Tests (4 scenarios)
- ✅ Valid credentials login
- ✅ Invalid email handling
- ✅ Invalid password handling  
- ✅ Empty fields validation

### Test Case Management (5 scenarios)
- ✅ Navigate to Test Cases page
- ✅ Create test case with valid data
- ✅ Validation for missing required fields
- ✅ Edit all test cases with smart detection
- ✅ Delete all test cases

## Framework Features

- **Architecture**: Page Object Model (POM)
- **Locators**: Semantic locators (getByPlaceholder, getByText, getByRole)
- **Advanced Editing**: Index-based iteration, unique titles, conditional updates, even/odd logic
- **Smart Detection**: Only edits test cases that need modification
- **Navigation Sync**: Promise.all for URL navigation, state-based waits
- **Stability**: Visibility and enabled checks, minimal delays, no Toastify dependencies
- **Reporting**: HTML + JUnit XML with screenshots/videos on failure
- **Parallel Execution**: Faster test runs with configurable workers
- **Retry Logic**: Handles flaky tests in CI environments
- **Cross-browser**: Configurable browser support
- **Test Timeout**: 60s to accommodate complex operations

### Advanced Edit Functionality

### Smart Test Case Editing
- Counts initial test cases and iterates through them by index
- Always clicks first available card to avoid stale element issues
- Waits for URL navigation to edit page before interacting with form
- Applies conditional editing based on description format validation
- Implements even/odd logic for dynamic content generation
- Adds unique timestamp suffix to titles to prevent duplicate validation errors
- Uses visibility and enabled checks for test step inputs
- Simplified submit with minimal delay to avoid Toastify overlay interference
- Ensures proper navigation back to test cases list after each edit

### Edit Patterns
- **Titles**: "The [id] of this use case is even/odd - [timestamp]"
- **Descriptions**: "This description belongs to [id] which is even/odd"
- **Expected Results**: "This expected result belongs to [id] which is even/odd"
- **Test Steps**: "This test step [stepNumber] belongs to [id] which is even/odd"

## File Structure
```
├── docs/                    # Documentation
│   ├── framework-documentation.md
│   └── project-recreation-prompt.md
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
- **URL**: https://qa-sandbox.ni.htec.rs/login
- **Credentials**: nasveta.camdzic+01@htecgroup.com / Test1234!!


## Reports Location
- HTML Report: `test-results/html-report/index.html`
- JUnit XML: `test-results/junit-report.xml`
- Screenshots/Videos: `test-results/artifacts/`

## Project Recreation
For complete project recreation instructions, see [docs/project-recreation-prompt.md](docs/project-recreation-prompt.md)

For detailed documentation, see [docs/framework-documentation.md](docs/framework-documentation.md)