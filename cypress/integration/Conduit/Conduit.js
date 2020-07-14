/// <reference types="Cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open Conduit', () => {
  cy.viewport(1000, 644)
  cy.visit('/')
  if (Cypress.browser.name === 'chrome') {
    cy.viewport(1000, 644)
    cy.matchImageSnapshot('homePage')
  }
})

Then('I see {string} in the title', (title) => {
  cy.viewport(1000, 644)
  cy.title().should('be', 'Conduit')
  cy.visit('/#/login?_k=06oljf')
  if (Cypress.browser.name === 'chrome') {
    cy.viewport(1000, 644)
    cy.matchImageSnapshot('pre-loginPage')
  }
  cy.login()
  if (Cypress.browser.name === 'chrome') {
    cy.viewport(1000, 644)
    cy.matchImageSnapshot('post-loggedInPage')
  }
})
