var el
describe('Upload document', ()=> {
    before(()=>{
      cy.visit('https://the-internet.herokuapp.com/upload')
      cy.fixture("uploadElements").then((sel)=> {
        el = sel

        })
    })

    it('user can upload documents', ()=>{
        //cy.get(el.chooseFieldButton).attachFile("testify.png")
        //OR
        cy.xpath("/html/body/div[2]/div/div[1]/form/input[1]").attachFile("testify.png")
        cy.get(el.uploadButton).click()
})
})