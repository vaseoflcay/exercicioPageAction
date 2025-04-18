/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.Page")
const loginPage  = require("../support/pages/login.Page")
const {email, senha} = require('../fixtures/data.json');
const { signup } = require("../support/pages/signup.Page");
const signupPage = require("../support/pages/signup.Page");

describe('teste de autenticacao', () => {

 beforeEach(() => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
  cy.visit('/')
 });



  it('deve criar conta com sucesso', () => {
    homePage.openMenu('Account')
    cy.get('[data-testid="signUp"]').click()
    signupPage.signup('luis','silva','119345654','greatester@gmail.com','senha123','senha123')
    cy.get('[data-testid="create"]').click()
    homePage.openMenu('Account')

    //loginPage.login(email,senha)
  })
})
