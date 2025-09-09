describe("Test Suite - Conjunto de Bugs",()=>{

    beforeEach (()=> {
             cy.visit("http://zero.webappsecurity.com")
        })
    })

    it("TC-1-Validar imput de busqueda",() => {

    cy.visit("http://zero.webappsecurity.com")
    cy.get('[name="searchTerm"]').type('register')
    cy.wait(3000)
    cy.get('[name="searchTerm"]').type('{enter}')
    cy.get('h2').should("be.visible")
    cy.wait(3000)
    cy.get('.brand').click()
    cy.get('.active > .custom > h4').should("be.visible")
    

    })