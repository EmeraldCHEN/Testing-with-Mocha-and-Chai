# Testing-with-Mocha-and-Chai
- Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser - https://mochajs.org/
 
- Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework - https://www.chaijs.com/

Command line

- Run all the tests in headless mode: `npm test`

- Run tests in parallel: `npm test --parallel` 

ℹ️ Cypress 1) bundles the Chai assertion library; 2) uses Mocha under the hood so Cypress tests are written on top of Mocha's BDD interface adopting Mocha's BDD syntax; 3) is built on top of Mocha so the reporter built for Mocha is also used with Cypress. 
