/// <reference types="Cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open Conduit', () => {
  cy.visit('/')
})

Then('I see {string} in the title', (title) => {
  cy.title().should('be', 'Conduit')
  cy.visit('/#/login?_k=06oljf')
  cy.login()
})