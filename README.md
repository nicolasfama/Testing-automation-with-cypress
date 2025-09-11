# 🚀 Automation test with Cypress

A comprehensive end-to-end testing framework built with Cypress for web application testing. This project demonstrates various Cypress testing patterns, best practices, and real-world testing scenarios.

## 🚀 Features

- **Cross-browser Testing:** Supports Chrome, Firefox, Edge, and Electron  
- **Parallel Test Execution:** Configured for CI/CD pipeline integration   
- **Custom Commands:** Extended Cypress functionality for common operations  
- **Multiple Test Scenarios:** Covers various UI testing patterns including:  
  - Form interactions and validations  
  - Dynamic element handling  
  - API testing and mocking  
  - File uploads/downloads  
  - iFrame handling  
  - Pop-up and tab management  

🛠️ Installation
Clone the repository

git clone https://github.com/nicolasfama
cd CypressDemoRSA
Install dependencies

npm install
Verify Cypress installation

npx cypress verify
🏃‍♂️ Running Tests
Interactive Mode (Cypress Test Runner)
npx cypress open
Headless Mode (Command Line)
# Run all tests
npm test

# Run tests in headed mode
npm run headTest

# Run tests in Chrome browser
npm run chromeTest

# Run specific test suite
npm run angularWebsiteTest

# Run smoke tests
npm run SmokeTest
Dashboard Recording (if configured)
npm run recordDashBoardTest
📁 Project Structure
cypress/
├── downloads/          # Downloaded files during tests
├── fixtures/           # Test data and mock files
│   └── example.json
├── integration/        # Test specifications
│   ├── examples/       # Sample test cases
│   └── PageObjects/    # Page Object Model files
├── reports/            # Generated test reports
├── screenshots/        # Screenshots of failed tests
├── support/           # Support files and custom commands
│   ├── commands.js    # Custom Cypress commands
│   └── e2e.js        # Global configuration
└── videos/            # Recorded test videos
📝 Test Scenarios Included
🔍 UI Testing Examples
AngularWebsitePractice.js - Angular application testing patterns
CalenderTest.js - Date picker and calendar interactions
CheckBox01.js - Checkbox and form validation testing
ChildPopUpWindows.js - Pop-up window handling
ChildTabsHand.js - Multi-tab navigation testing
Cypress_iframes.js - iFrame interaction testing
GreenKartTesting.js - E-commerce shopping cart testing
HandlingTables.js - Dynamic table data validation
JWTsession.js - Authentication and session management
🌐 API Testing Examples
MockLibraryTest.js - API mocking and stubbing
MockResponse.js - Response manipulation testing
⚙️ Configuration
Cypress Configuration (cypress.config.js)
module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
  },
  e2e: {
    specPattern: 'cypress/integration/examples/*.js',
    env: {
      "url": "https://rahulshettyacademy.com"
    }
  }
});
Environment Variables
Create a cypress.env.json file for sensitive data:

{
  "username": "your-username",
  "password": "your-password",
  "apiKey": "your-api-key"
}
📊 Reporting
This project uses Mochawesome for generating detailed HTML reports with:

Test execution summary
Screenshots of failures
Detailed error messages
Execution timeline
Reports are generated in the cypress/reports/html/ directory.

🔧 Custom Commands
The project includes custom Cypress commands in cypress/support/commands.js:

Login helpers
Common UI interactions
API request wrappers
Data manipulation utilities
🚀 CI/CD Integration
This framework is ready for CI/CD integration with:

GitHub Actions
Jenkins
GitLab CI
Azure DevOps
Example GitHub Actions workflow:

name: Cypress Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: cypress-io/github-action@v2
        with:
          build: npm install
          start: npm start
          wait-on: 'http://localhost:3000'
🤝 Contributing
Fork the repository
Create a feature branch: git checkout -b feature/new-test
Commit your changes: git commit -am 'Add new test scenario'
Push to the branch: git push origin feature/new-test
Submit a pull request
📚 Best Practices Implemented
Page Object Model for maintainable test code
Data-driven testing using fixtures
Proper wait strategies instead of hard waits
Test isolation - each test is independent
Clear test descriptions and meaningful assertions
Error handling and retry mechanisms
Screenshot capture on test failures
🐛 Troubleshooting
Common Issues
Tests failing intermittently

Check for proper wait conditions
Verify element selectors
Review network requests timing
Browser launch issues

Verify browser installation
Check Cypress browser support
Clear Cypress cache: npx cypress cache clear
Permission errors

Run with appropriate permissions
Check file/folder access rights
📞 Support
For questions and support:

Create an issue in this repository
Check Cypress Documentation
Visit Cypress Community Forum
📄 License
This project is licensed under the ISC License - see the LICENSE file for details.

🙏 Acknowledgments
Cypress.io for the amazing testing framework
Rahul Shetty Academy for test application examples
Testing community for best practices and patterns
Happy Testing! 🎉

Built with ❤️ using Cypress
