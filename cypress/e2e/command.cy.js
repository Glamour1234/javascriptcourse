describe('creating custom login commands', () => {
    before(()=>{
      cy.visit('/')
      Cypress.on("uncaught:exception", ()=>{
        return false        
      }) 
    })

    it("user can login successfully",()=>{
        cy.login()
    })
    })