describe("Test Suite - Conjunto de Pruebas",()=>{

    beforeEach (()=> {
             cy.visit("http://zero.webappsecurity.com")
    })

    it("Validar pagina de inicio",() => {

        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")
        //validar la pagina de inicio, valida la imagen y el texto  (smoke test)
    })
     it("Prueba E2E- Transferencia de fondos",() => {

         cy.get('#signin_button').click()
         cy.get('[name="user_login"]').should("be.visible")
       
         cy.get('[name="user_login"]').click()
         cy.get('[name="user_login"]').type('username')

         cy.get('[name="user_password"]').click()
         cy.get('[name="user_password"]').type('password')

         cy.get('[name="user_remember_me"').check().should('be.checked')

         cy.get('[name="submit"]').should("be.visible")
         cy.get('[name="submit"]').click()

         cy.get('#transfer_funds_tab > a').click()
         cy.get('.board-header').contains("Transfer Money & Make Payments")

        cy.get('[name="fromAccountId"]').select('3')
        cy.get('#tf_fromAccountId').should('have.value', '3') 

        cy.get('[name="toAccountId"]').select('1')
        cy.get('[name="toAccountId"]').should('have.value', '1') 

        cy.get('[name="amount"]').click()
        cy.get('[name="amount"]').type('200')

        cy.get('[name="description"]').click()
        cy.get('[name="description"]').type('venta')

        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()

        cy.get('.board-header').contains("Transfer Money & Make Payments")
        cy.get('.alert').contains('You successfully submitted your transaction.')


    })
     it("Test de Validacion del grafico",() => {
         cy.get('#signin_button').click()
         cy.get('[name="user_login"]').should("be.visible")
       
         cy.get('[name="user_login"]').click()
         cy.get('[name="user_login"]').type('username')

         cy.get('[name="user_password"]').click()
         cy.get('[name="user_password"]').type('password')

         cy.get('[name="user_remember_me"').check().should('be.checked')

         cy.get('[name="submit"]').should("be.visible")
         cy.get('[name="submit"]').click()

         cy.get('#money_map_tab > a').click()
         cy.get('#ext-sprite-1259').should('be.visible')
         cy.get('#ext-sprite-1167 > tspan').click()
         cy.get('#ext-sprite-1259').should('not.be.visible')
        
    })



})