//import { selectors } from "../fixtures/elements"
var el
describe('LOGIN SUCCESSFULLY', () => {
before(()=>{
  Cypress.on("uncaught:exception", ()=>{
    return false        //for handling exceptions/errors
  })
  cy.visit('/')
  cy.fixture("locators").then((sel)=> { 
  el = sel
})
})
  it('input valid credentials', () => {
    
      cy.get(el.image).should("be.visible").wait(2000)
      cy.get(el.usernameField).fill(el.username1)
   //or
    //cy.get(selectors.image).should("be.visible").wait(2000)
    //cy.get(selectors.usernameField).type(selectors.username1)

  })

    it('input valid credentials', () => {
        cy.get(el.passwordField).fill(el.password)
        //cy.get(el.loginButton).click()
        cy.findByText("LOGIN").click()
        //cy.findByText("Logout").click()
        
      })
     
    //cy.get('[data-test="username"]').should('have.value','standard_user')
//or
    //cy.get(selectors.passwordField).type('secret_sauce')
   // cy.wait(5000)
    //cy.get(selectors.loginButton).click()
    //cy.screenshot('testify')
  
  })


  
