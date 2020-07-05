import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../pageObject/Login';
const login = new Login()

Given('I open open conduit login page', () => {
  login.navigate()
  login.title().should('eq', 'Conduit')
})

When('I type in', (datatable) => {
  login.login(datatable)
})

Then('{string} should be shown', (text) => {
  login.checkContent(text).should('be.visible')
})
