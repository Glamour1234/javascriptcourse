Cypress.Commands.add("login",()=>{
    cy.fixture("command").then ((sel)=>{
        cy.get(sel.usernameField).type(sel.username)
        cy.get(sel.passwordField).type(sel.password)
        cy.get(sel.loginButton).click()
    })
})

//OR
Cypress.Commands.add("login2",(username,password)=>{
    cy.fixture("command").then ((sel)=>{
        cy.get(sel.usernameField).type(username)
        cy.get(sel.passwordField).type(password)
        cy.get(sel.loginButton).click()

    })
})