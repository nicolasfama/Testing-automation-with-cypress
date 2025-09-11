describe("Test Suite - Conjunto de Pruebas OrangeHRM",()=>{

    beforeEach (()=> {
        //inicializamos la pagina
             cy.visit("https://opensource-demo.orangehrmlive.com")
        })
    })

    it("Automatiza una suite de pruebas que corresponde al usuario:",() => {

    cy.visit("https://opensource-demo.orangehrmlive.com")//aqui no hacia falta poner de vuelta la URL de la pagina, pero no me funcionaba la pagina para probar 

    // Necesitamos que el logo de la pagina siempre este visible
    cy.get('.orangehrm-login-branding > img').should("be.visible")

    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should("be.visible")
    //Necesitamos que me localice y complete el campo de usuario
    cy.get('[name="username"]').type('admin')
    //Necesitamos que localice y complete el campo de contrasaña
    cy.get('[name="password"]').type('admin123')
    //necesitamos que el boton este visible
    cy.get('.oxd-button').should("be.visible")
    // y que hagamos click 
    cy.get('.oxd-button').click()
    //necesitamos que localice el logo en la pagina de usuario
    cy.get('.oxd-brand-banner > img').should('be.visible')


            //vamos a verificar que funcionen todos los botones 


            // 1. Hacer clic en el dropdown para abrirlo
cy.get('.oxd-userdropdown-tab').click(); // o el selector del botón

// 2. Hacer clic en la primera opción del menú desplegable en este caso no se usa select porque
// es una clase de tipo div. 
//Por consiguente se realiza de esta forma
cy.get('.oxd-dropdown-menu > :nth-child(1)').click();

// 3. hacer clic en el boton de close
cy.get('.oxd-dialog-close-button').click()

            //haremos lo mismo con el 2da opcion
    cy.get('.oxd-userdropdown-tab').click(); // o el selector del botón

    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();

    cy.go('back')

       //haremos lo mismo con el 2da opcion
    cy.get('.oxd-userdropdown-tab').click(); // o el selector del botón

    cy.get('.oxd-dropdown-menu > :nth-child(3)').click();

    cy.go('back')



    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-main-menu-item').click()
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.get(':nth-child(7) > .oxd-main-menu-item').click()
    cy.get(':nth-child(8) > .oxd-main-menu-item').click()
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()  
    cy.get(':nth-child(10) > .oxd-main-menu-item').click()
    cy.go('back')
    cy.get(':nth-child(11) > .oxd-main-menu-item').click()
    cy.get(':nth-child(12) > .oxd-main-menu-item').click()

        //en principio tenemos problemas con las API porque hace click en cada boton pero deberia
        //denegar el uso del siguente boton sin antes volver hacia atras
    
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-glass-button').click()

  })
   
