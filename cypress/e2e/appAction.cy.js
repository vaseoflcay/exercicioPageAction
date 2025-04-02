/// <reference types="cypress" />


const {email, password}= require('../fixtures/data.json')
const { profilePage }= require("../support/pages/profile.Page")

it('deve fazer login e depois checkout', () => {
   cy.checkout(email,password)
   
  //  profilePage.customerName().should('contain', 'marques luis')
});