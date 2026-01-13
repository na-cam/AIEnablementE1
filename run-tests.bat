@echo off
echo Installing dependencies...
npm install

echo Installing Playwright browsers...
npx playwright install

echo Running tests...
npx playwright test

echo Generating report...
npx playwright show-report

pause