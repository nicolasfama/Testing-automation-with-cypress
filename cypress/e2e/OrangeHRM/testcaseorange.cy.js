describe("Test Suite - Conjunto de Pruebas OrangeHRM",()=>{

    beforeEach (()=> {
             cy.visit("https://opensource-demo.orangehrmlive.com")
        })
    })

    it("TC-1 Automatiza una suite de pruebas con casos para que se valide los elementos básicos de la página de inicio:",() => {

    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.get('.orangehrm-login-branding > img').should("be.visible")
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should("be.visible")
    cy.get('[name="username"]').type('admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').should("be.visible")
    cy.get('.oxd-button').click()

    })