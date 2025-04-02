// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { homePage } from "./pages/home.Page"
import loginPage from "./pages/login.Page"

Cypress.Commands.add('checkout', (email, password) => { 
  cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
  cy.visit('/')
  homePage.openMenu('Account')
  loginPage.login(email, password)
  cy.get('[data-testid="home-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(2) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"]').click()
  cy.get('[data-testid="addToCart"]').click()
  cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(2) > .r-nqhrom > :nth-child(1)').should('contain', 'Total Amount')
  cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
  cy.get('[data-testid="option-1"] > [style="flex-direction: row;"] > :nth-child(2) > .css-146c3p1').should('contain','Cash on Delivery')
  cy.get('[data-testid="completeCheckout"]').click()
  cy.get('[data-testid="goBackHome"]').should('contain','Go Back Home')

 
})

//