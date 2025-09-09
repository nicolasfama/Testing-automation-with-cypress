describe("Test Suite - Conjunto de Pruebas Bank zero",()=>{

    beforeEach (()=> {
             cy.visit("http://zero.webappsecurity.com")
    })

    it("TC-1-Validar todos los botones",() => {

        cy.get('#signin_button').click()
        cy.get('[name="user_login"]').should("be.visible")
        cy.go('back')

        cy.get('#online-banking').click()
        cy.go('back')
    })
     it.only("TC-2-Texto de anclaje",() => {

        cy.get('#onlineBankingMenu > div > strong').click()
        cy.go('back')
        cy.get('.active > .custom > h4').should("be.visible")

        cy.get('#feedback > div > strong').click()
        cy.go('back')
        cy.get('.active > .custom > h4').should("be.visible")


        cy.get('#feedback > div > strong').click()
        cy.go('back')
        cy.get('.active > .custom > h4').should("be.visible")


        cy.get('#account_activity_link').click()
        cy.go('back')
        cy.get('.active > .custom > h4').should("be.visible")

        cy.get('#transfer_funds_link').click()
        cy.go('back')
        cy.get('.active > .custom > h4').should("be.visible")

        cy.get('#money_map_link')
        cy.go('back')
        cy.get('.active > .custom > h4').should("be.visible")


})

        

})