export default class login {
  navigate () {
    cy.visit('/#/login?_k=stnllq')
  }

  title () {
    return cy.title()
  }

  email () {
    return cy.get('input[type="email"]')
  }

  password () {
    return cy.get('input[type="password"]')
  }

  signInButton () {
    return cy.get('.btn').contains('Sign in')
  }

  login (dataTable) {
    dataTable.hashes().forEach(element => {
      this.email().type(element.username)
      this.password().type(element.password)
      this.signInButton().click()
    })
  }

  checkContent (content) {
    return cy.contains(content, { timeout: 2000 })
  }
}
