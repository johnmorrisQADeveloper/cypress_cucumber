/// <reference types="Cypress" />

class Conduit {
  navigate () {
    cy.visit('/')
  }

  title () {
    return cy.title()
  }
}

export default Conduit
