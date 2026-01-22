# QA Sandbox Test Automation Framework - Recreation Prompt

## Project Overview
Create a complete Playwright TypeScript test automation framework for the QA Sandbox application with Page Object Model architecture, comprehensive test coverage, and advanced editing capabilities.

## Requirements

### Framework Setup
- Initialize Playwright TypeScript project with proper configuration
- Implement Page Object Model (POM) architecture
- Configure parallel execution, retry logic, and cross-browser support
- Set up HTML and JUnit XML reporting with failure artifacts

### Test Application Details
- **URL**: https://qa-sandbox.ni.htec.rs/login
- **Test Credentials**: nasveta.camdzic+01@htecgroup.com / Test1234!!

### Page Objects Required

#### BasePage
- Common page functionality and utilities
- Navigation helpers and wait methods

#### LoginPage
- Login functionality with email/password fields
- Success/failure verification methods
- Handle various login scenarios (valid/invalid credentials, empty fields)

#### TestCasesPage
- Navigate to test cases section
- Create new test cases with multiple fields:
  - Title, Description, Expected Result
  - Multiple test steps with dynamic addition
  - Automated toggle functionality
- **Advanced Edit Functionality**:
  - Edit all existing test cases with smart detection
  - Use title snapshots to iterate through all test cases
  - Apply conditional editing based on description format
  - Edit titles: "The [id] of this use case is even/odd"
  - Edit descriptions: "This [fieldName] belongs to [id] which is even/odd"
  - Edit all fields including test steps with even/odd logic
- Delete all test cases functionality
- Validation handling for missing required fields

### Test Coverage Required

#### Login Tests (4 scenarios)
1. Valid credentials login
2. Invalid email handling  
3. Invalid password handling
4. Empty fields validation

#### Test Case Management (3 scenarios)
1. Navigate to Test Cases page
2. Create test case with valid data
3. Validation for missing required fields
4. **Edit all test cases with advanced logic**
5. Delete all test cases

### Technical Specifications

#### Locator Strategy
- Use semantic locators: getByPlaceholder, getByText, getByRole
- Avoid CSS selectors where possible
- Use exact text matching for reliable element identification

#### Edit Test Cases Logic
- Count initial test cases before iteration to avoid infinite loops
- Always click first available card (index-based with safety limit)
- Use Promise.all to wait for URL navigation to **/edit-testcase/*
- Add unique timestamp suffix to titles to prevent duplicate validation errors
- Check current description against expected format
- Only edit test cases that don't match expected description pattern
- Apply even/odd logic based on sequential ID (index + 1)
- Ensure test step inputs are visible and enabled before filling
- Use simplified submit with minimal 500ms delay
- Navigate back to test cases list after each edit operation
- Use state-based waits, avoid arbitrary timeouts where possible

#### Configuration Requirements
- Test timeout: 60 seconds for complex operations
- Parallel execution enabled
- Retry logic for flaky tests (2 retries in CI)
- Multiple browser support (Chromium, Firefox, WebKit)
- Screenshot and video capture on failure
- Trace on first retry for debugging

#### Reporting
- HTML report with detailed test results
- JUnit XML for CI/CD integration
- Failure artifacts (screenshots, videos, traces)
- Test execution summary and statistics

### File Structure
```
├── docs/                    # Documentation
├── tests/
│   ├── pages/              # Page Object classes
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   └── TestCasesPage.ts
│   ├── specs/              # Test specifications
│   │   ├── login.spec.ts
│   │   └── testcases.spec.ts
│   ├── fixtures/           # Test data
│   │   └── testData.json
│   └── utils/              # Helper functions
├── test-results/           # Reports and artifacts
├── playwright.config.ts    # Framework configuration
├── rules.md               # Framework rules and standards
├── run-tests.bat          # Execution script
└── README.md              # Project documentation
```

### Test Data Structure
Create JSON fixture with:
- Valid user credentials
- Test case templates with titles, descriptions, expected results
- Multiple test steps arrays
- Various test scenarios data

### Execution Requirements
- Batch script for easy test execution
- npm scripts for different test runs
- Report generation and viewing commands
- Cross-platform compatibility

### Quality Standards
- Clean, maintainable code structure
- Comprehensive error handling
- Proper async/await usage
- Type safety with TypeScript
- Consistent naming conventions
- Minimal but effective comments

### Advanced Features
- Smart test case editing with conditional logic and unique title generation
- Index-based iteration with safety limits to prevent infinite loops
- Navigation synchronization using Promise.all
- Visibility and enabled state checks for dynamic form inputs
- Minimal delays to avoid UI overlay interference
- Robust element interaction handling with state-based waits
- Comprehensive test cleanup procedures
- Serial test execution for test case management tests
- Flexible test execution options

## Success Criteria
- All tests pass consistently
- Framework handles edge cases gracefully
- Reports provide clear test insights
- Code is maintainable and extensible
- Edit functionality works for all test cases regardless of count
- Even/odd logic applies correctly to all fields