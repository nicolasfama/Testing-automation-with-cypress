Automation test with Cypress

A comprehensive end-to-end testing framework built with Cypress for web application testing. This project demonstrates various Cypress testing patterns, best practices, and real-world testing scenarios.

## 🛠️ Requisitos previos

Antes de ejecutar este proyecto, asegúrese de tener instalado lo siguiente:

- **Node.js** (versión 14 o superior)
- Gestor de paquetes **npm**
- **Git** para el control de versiones.

## 🧪 Ejecución de pruebas

### Modo interactivo (Cypress Test Runner)

```bash
npx cypress open
````

### 🛠️ Instalación
```bash
Clonar el repositorio
```
git clone https://github.com/rishivajre/CypressDemoRSA.git
cd CypressDemoRSA
Instalar dependencias

npm install
Verificar la instalación de Cypress

npx cypress verify
##🏃‍♂️ Ejecución de pruebas

### Modo interactivo (Cypress Test Runner)
````bash
npx cypress open
````

Modo sin cabeza (línea de comandos)
# Run all tests
npm test

# Run tests in headed mode
npm run headTest

# Run tests in Chrome browser
npm run chromeTest

# Run specific test suite
npm run angularWebsiteTest

# Run smoke tests
npm run SmokeTest
Grabación del panel de control (si está configurado)
npm run recordDashBoardTest
📁 Estructura del proyecto
cypress/
├── downloads/          # Downloaded files during tests
├── fixtures/           # Test data and mock files
│   └── example.json
├── integration/        # Test specifications
│   ├── examples/       # Sample test cases
│   └── PageObjects/    # Page Object Model files
├── reports/            # Generated test reports
├── screenshots/        # Screenshots of failed tests
├── support/           # Support files and custom commands
│   ├── commands.js    # Custom Cypress commands
│   └── e2e.js        # Global configuration
└── videos/            # Recorded test videos
📝 Escenarios de prueba incluidos
Ejemplos de pruebas de UI
AngularWebsitePractice.js : Patrones de prueba de aplicaciones Angular
CalenderTest.js : Selector de fechas e interacciones con el calendario
CheckBox01.js - Pruebas de validación de casillas de verificación y formularios
ChildPopUpWindows.js - Manejo de ventanas emergentes
ChildTabsHand.js - Prueba de navegación con múltiples pestañas
Cypress_iframes.js - Pruebas de interacción con iFrame
GreenKartTesting.js - Pruebas de carritos de compra de comercio electrónico
HandlingTables.js - Validación dinámica de datos de tablas
JWTsession.js - Autenticación y gestión de sesiones
Ejemplos de pruebas de API
MockLibraryTest.js - Simulación y stubbing de API
MockResponse.js - Prueba de manipulación de respuestas
⚙️ Configuración
Configuración de Cypress ( cypress.config.js)
module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
  },
  e2e: {
    specPattern: 'cypress/integration/examples/*.js',
    env: {
      "url": "https://rahulshettyacademy.com"
    }
  }
});
Variables de entorno
Crear un cypress.env.jsonarchivo para datos confidenciales:

{
  "username": "your-username",
  "password": "your-password",
  "apiKey": "your-api-key"
}
📊 Informes
Este proyecto utiliza Mochawesome para generar informes HTML detallados con:

Resumen de ejecución de pruebas
Capturas de pantalla de fallos
Mensajes de error detallados
Cronograma de ejecución
Los informes se generan en el cypress/reports/html/directorio.

🔧 Comandos personalizados
El proyecto incluye comandos Cypress personalizados en cypress/support/commands.js:

Asistentes de inicio de sesión
Interacciones comunes de la interfaz de usuario
Envoltorios de solicitudes de API
Utilidades de manipulación de datos
Integración CI/CD
Este marco está listo para la integración CI/CD con:

Acciones de GitHub
Jenkins
GitLab CI
Azure DevOps
Ejemplo de flujo de trabajo de Acciones de GitHub:

name: Cypress Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: cypress-io/github-action@v2
        with:
          build: npm install
          start: npm start
          wait-on: 'http://localhost:3000'
🤝 Contribuyendo
Bifurcar el repositorio
Crear una rama de características:git checkout -b feature/new-test
Confirme sus cambios:git commit -am 'Add new test scenario'
Empujar a la rama:git push origin feature/new-test
Enviar una solicitud de extracción
📚 Mejores prácticas implementadas
Modelo de objetos de página para código de prueba mantenible
Pruebas basadas en datos mediante accesorios
Estrategias de espera adecuadas en lugar de esperas difíciles
Aislamiento de pruebas : cada prueba es independiente
Descripciones de pruebas claras y afirmaciones significativas
Manejo de errores y mecanismos de reintento
Captura de pantalla sobre fallos en las pruebas
🐛 Solución de problemas
Problemas comunes
Las pruebas fallan intermitentemente

Verificar las condiciones de espera adecuadas
Verificar selectores de elementos
Revisar los tiempos de las solicitudes de red
Problemas al iniciar el navegador

Verificar la instalación del navegador
Comprobar la compatibilidad del navegador Cypress
Borrar caché de Cypress:npx cypress cache clear
Errores de permisos

Ejecutar con los permisos adecuados
Comprobar los derechos de acceso a archivos/carpetas
📞 Soporte
Para preguntas y soporte:

Crear un problema en este repositorio
Consulte la documentación de Cypress
Visita el Foro de la Comunidad de Cypress
📄 Licencia
Este proyecto está licenciado bajo la licencia ISC: consulte el archivo de LICENCIA para obtener más detalles.

🙏 Agradecimientos
Cypress.io por su increíble marco de pruebas
Academia Rahul Shetty para ejemplos de aplicaciones de prueba
Comunidad de pruebas para encontrar las mejores prácticas y patrones
¡Feliz prueba! 🎉

Creado con ❤️ usando Cypress
