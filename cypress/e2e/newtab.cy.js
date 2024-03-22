describe("autome newtab", ()=>{
    before(()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    Cypress.on("uncaught:exception", ()=>{
        return false        
      })
    })

    it.only("open a new tab",()=>{
      cy.get(".example > a").click()
    })

    it("don't open a new tab",()=>{
        cy.get(".example > a").invoke("removeAttr","target").click()
    })
})