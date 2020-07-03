/// <reference types="Cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open BBC News', () => {
  cy.visit('https://www.bbc.co.uk/news')
})

Then('I see {string}" in the title', (title) => {
  cy.title().should('eq',title)
})
