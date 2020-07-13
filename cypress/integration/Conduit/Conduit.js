/// <reference types="Cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open Conduit', () => {
  cy.visit('/')
  if (Cypress.browser.name === 'chrome') {
    cy.matchImageSnapshot('homePage')
  }
})

Then('I see {string} in the title', (title) => {
  cy.title().should('be', 'Conduit')
  cy.visit('/#/login?_k=06oljf')
  if (Cypress.browser.name === 'chrome') {
    cy.matchImageSnapshot('pre-loginPage')
  }
  cy.login()
  if (Cypress.browser.name === 'chrome') {
    cy.matchImageSnapshot('post-loggedInPage')
  }
})
