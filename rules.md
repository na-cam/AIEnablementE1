# Test Automation Rules & Framework

## Architecture
- **Pattern**: Page Object Model (POM)
- **Framework**: Playwright with TypeScript
- **Structure**: Separate page objects, test files, and utilities

## Locator Hierarchy (Priority Order)
1. **Semantic locators** (getByRole, getByText, getByPlaceholder, getByLabel)
2. **Data attributes** (data-testid)
3. **CSS selectors** (fallback only)
4. **XPath** (last resort)

## Test Data Management
- Use fixtures for static test data
- Generate dynamic data with faker.js
- Store credentials in environment variables
- Use factories for complex object creation

## Coding Standards
### Naming Conventions
- Page classes: `LoginPage`, `TestCasesPage`
- Test files: `login.spec.ts`, `testcases.spec.ts`
- Methods: camelCase (`fillLoginForm`, `clickSubmitButton`)
- Constants: UPPER_SNAKE_CASE

### File Structure
```
tests/
├── pages/
├── fixtures/
├── utils/
└── specs/
```

### Assertions
- Use Playwright's expect() assertions
- Prefer specific assertions over generic ones
- Include meaningful error messages

### Error Handling
- Implement retry logic for flaky elements
- Use proper timeouts (30s max)
- Capture screenshots on failures

## Framework-Specific Rules
### Page Object Model
- One page class per application page
- Encapsulate locators and actions
- Return page objects for method chaining
- Use async/await for all interactions

### Advanced Edit Operations
- Take snapshots of elements before iteration
- Use exact text matching with filter({ hasText: title })
- Implement conditional editing based on content validation
- Apply even/odd logic for dynamic content generation
- Ensure proper navigation between edit operations

### Element Interaction Rules
- Avoid using .first() for iterative operations
- Use title snapshots for reliable element identification
- Implement proper wait strategies between operations
- Handle stale element references with fresh locators

### Fixtures
- Define reusable test data in JSON files
- Use Playwright's test fixtures for setup/teardown

### Utilities
- Common functions in separate utility files
- Browser configuration in playwright.config.ts

## Reporting
- **Format**: HTML + JUnit XML
- **Storage**: `test-results/` directory
- **Screenshots**: On failure only
- **Videos**: On failure for debugging

## Execution Rules
- Run tests in parallel where possible
- Use headless mode for CI/CD
- Implement proper test isolation
- Clean up test data after execution
- Ensure delete operations run last in test suites