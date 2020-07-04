/// <reference types="Cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import Conduit from '../pageObject/Conduit';
const conduit = new Conduit()
Given('I open BBC News', () => {
  conduit.navigate()
})

Then('I see {string} in the title', (title) => {
  conduit.title().should('eq',title)
})
