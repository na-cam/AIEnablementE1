# QA Sandbox Test Plan

## Test Scope
Testing the QA Sandbox application focusing on login functionality and test case management features.

## Test Cases

### TC001: Successful Login
**Objective**: Verify user can login with valid credentials
**Preconditions**: User has valid account
**Steps**:
1. Navigate to login page
2. Enter email: nasveta.camdzic@htecgroup.com
3. Enter password: Test1234!!
4. Click Login button
**Expected Result**: User is redirected to dashboard, Test Cases tab is visible

### TC002: Invalid Email Login
**Objective**: Verify login fails with invalid email
**Steps**:
1. Navigate to login page
2. Enter email: invalid@email.com
3. Enter password: Test1234!!
4. Click Login button
**Expected Result**: Error message displayed, user remains on login page

### TC003: Invalid Password Login
**Objective**: Verify login fails with invalid password
**Steps**:
1. Navigate to login page
2. Enter email: nasveta.camdzic@htecgroup.com
3. Enter password: wrongpassword
4. Click Login button
**Expected Result**: Error message displayed, user remains on login page

### TC004: Empty Fields Login
**Objective**: Verify login fails with empty credentials
**Steps**:
1. Navigate to login page
2. Leave email field empty
3. Leave password field empty
4. Click Login button
**Expected Result**: Validation errors shown for required fields

### TC005: Create New Test Case - Valid Data
**Objective**: Verify user can create a new test case with all required fields
**Preconditions**: User is logged in
**Steps**:
1. Click on Test Cases tab
2. Click "New Test Case" button
3. Fill Title: "Sample Test Case"
4. Fill Description: "Test case description"
5. Fill Expected Result: "Expected outcome"
6. Add test step: "Step 1 description"
7. Click "Add Test Step"
8. Check "Automated" checkbox
9. Click Submit button
**Expected Result**: Test case is created and appears in test cases list

### TC006: Create Test Case - Missing Required Fields
**Objective**: Verify validation for required fields in test case creation
**Preconditions**: User is logged in and on New Test Case form
**Steps**:
1. Click on Test Cases tab
2. Click "New Test Case" button
3. Leave Title field empty
4. Fill Description: "Test description"
5. Click Submit button
**Expected Result**: Validation error shown for missing Title field

### TC007: Navigate to Test Cases Page
**Objective**: Verify user can access Test Cases page after login
**Preconditions**: User is logged in
**Steps**:
1. After successful login, locate Test Cases tab
2. Click on "Test Cases" text/tab
3. Verify page loads
**Expected Result**: Test Cases page opens showing "There are no test cases created" message and "New Test Case" button

## Test Environment
- **Application**: QA Sandbox
- **Browser**: Chrome (latest)
- **Test Data**: Valid user credentials provided in scenario
- **Execution**: Automated using Playwright framework