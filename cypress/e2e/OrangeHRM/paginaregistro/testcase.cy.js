describe("Test Suite - Conjunto de Pruebas OrangeHRM",()=>{

    beforeEach (()=> {
        //inicializamos la pagina
             cy.visit("https://opensource-demo.orangehrmlive.com")
        })
    })

    it("TC-1 Automatiza una suite de pruebas con casos para que se valide los elementos básicos de la página de inicio:",() => {

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



    })

/*describe('My First Mock API test',function()
{
    it('Mock API',function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com")

    cy.get('.orangehrm-login-branding > img').should("be.visible")

    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should("be.visible")
    //Necesitamos que me localice y complete el campo de usuario
    cy.get('[name="username"]').type('admin')
    //Necesitamos que localice y complete el campo de contrasaña
    cy.get('[name="password"]').type('admin123')
    //necesitamos que el boton este visible
    cy.get('.oxd-button').should("be.visible")
    // y que hagamos click 
    cy.get('.oxd-button').click()*/
    
    describe('Login Test', () => {
  it('Debe iniciar sesión exitosamente (200)', () => {
    // Interceptar la petición POST del login
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginRequest');

    // Visitar la página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Llenar el formulario
    cy.get('[name="username"]').type('admin')
    cy.get('[name="password"]').type('admin123')

    // Hacer clic en el botón de login
      cy.get('.oxd-button').click()

    // Esperar la petición y validar que la respuesta sea 200
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // ✅ Esperado
    });
  });
});



      /*  // cypress no realiza esta llamada 
        // escuchara que se realiza esta llamada en el buscador 
        cy.intercept(
            {      //realizamos la llamada de respuesta: enviamos el sigiente cuerpo
            
            method : "GET",
            url : 'https://opensource-demo.orangehrmlive.com'

            },
            {   //podemos obtener la respuesta aqui 
                statuscode: 200,
                body : [{     
                        }]
            })
        cypress.browser
        
    })
    it.only("Browser information",() => {
console.log(Cypress.browser)
        displayName:'Chrome'
        family: 'Chromium'
    })*/