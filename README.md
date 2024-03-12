# Cypress/TypeScript Test Automation Suite

### About

This project presents my skills in building a test automation suite from scratch, using Cypress and TypeScript. It is focused on [The Internet](https://the-internet.herokuapp.com/), a demo site made for automation practice by [Elemental Selenium](https://elementalselenium.com/). The suite covers a wide selection of the site's pages and functionalities, such as different log in methods, file upload/download, and other element interaction modules.

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ctmcnutt/cypress-playground
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure cypress.env.json**

- Make a new file in the top folder named `cypress.env.json`
- Include the following json:
  ```json
  {
    "BASIC_AUTH_PASSWORD": "admin",
    "FORM_AUTH_PASSWORD": "SuperSecretPassword!"
  }
  ```
- _Note:_ These passwords are plainly available on the target site and are not required to be kept secret. This is a demonstration of how to handle secured variables in a real-world situation.

### Running Tests

Execute the following commands to run the Cypress tests:

- Interactive:
  ```bash
  npm run cypress:open
  ```
- Headless:
  ```bash
  npm run cypress:run
  ```

### CI/CD

- This project is regularly being run on GitHub Actions. You can see the recent runs [here](https://github.com/ctmcnutt/cypress-playground/actions)
- It is currently executed (headlessly) in the following situations:
  - On PR Creation/Update

### Folder Structure

- `/cypress/data/`: Test data store (interface files, data object exports, etc)
- `/cypress/support/`: Page objects and Cypress custom command files
- `/cypress/tests/`: Test spec files
