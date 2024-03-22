var el
describe('creating custom login commands approach 2', () => {
    before(()=>{
        cy.fixture("command").then((sel)=>{
            el = sel
        })
      cy.visit('/')
      Cypress.on("uncaught:exception", ()=>{
        return false        
      }) 
    })

    it("user can login successfully2",()=>{
        cy.login2(el.username,el.password)
    })
    })