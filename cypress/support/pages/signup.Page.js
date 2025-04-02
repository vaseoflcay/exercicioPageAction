/// <reference types = "cypress"/>

class signupPage {
    get #firstName() {return cy.get('[data-testid="firstName"]')}
    get #lastName() {return cy.get('[data-testid="lastName"]')}
    get #phoneNumber() {return cy.get('[data-testid="phone"]')}
    get #email() {return cy.get('[data-testid="email"]') }
    get #password() {return  cy.get('[data-testid="password"]')}
    get #repassword() {return cy.get('[data-testid="repassword"]')}
    get #create() {return  cy.get('[data-testid="create"]')}




    signup(firstName,lastName,phoneNumber,email,password,repassword){
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phoneNumber.type(phoneNumber)
        this.#email.type(email)
        this.#password.type(password)
        this.#repassword.type(repassword)
        this.#create.click()
    }

}

module.exports = new signupPage()