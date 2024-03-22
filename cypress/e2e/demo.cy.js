var el
describe('Automate demo easy', () => {
before(()=>{
  Cypress.on("uncaught:exception", ()=>{
    return false        
  })
  cy.visit('https://demo.seleniumeasy.com/')
  cy.fixture("demoElements").then((sel)=> { 
  el = sel
})
})

it("user can view web page image",()=>{
    cy.get(el.siteImage).should("be.visible")
})
it("user can click on input form button",()=>{
    cy.get(el.inputFormsDropdownButton).click()
})
it("user can view simple form button and click on it",()=>{
    cy.get(el.simpleFormDemoButton).click()
})
it("user ca type on the message field",()=>{
    cy.get(el.messageField).type(el.message)
})
it("user can click on show message button to view message",()=>{
    cy.get(el.showMessage).click()
})
it("user can input on value A field",()=>{
    cy.get(el.value1).scrollIntoView().fill(3)
})
it("user can input on value B field",()=>{
    cy.get(el.value2).scrollIntoView().fill(6)
})
it("user can click on get total button",()=>{
    cy.get(el.getTotalButton).click()
})
})