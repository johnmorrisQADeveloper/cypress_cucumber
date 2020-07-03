/// <reference types="Cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open BBC News', () => {
  cy.visit('https://react-redux.realworld.io/')
})

Then('I see {string}" in the title', (title) => {
  cy.title().should('eq',title)
})
