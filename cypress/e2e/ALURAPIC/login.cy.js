describe('Login de usuarios alura pic ', () => {

    beforeEach(() => {
        
        cy.visit('https://alura-fotos.herokuapp.com')

        // cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', { //mockando
        //     statusCode:400
        // }).as('stubPost')
    })

    it('fazer login de usuario valido', () => {

        cy.login(Cypress.env('userName'), Cypress.env('password')) // comando personalizado

        // cy.wait('@stubPost') //usando o mock

        cy.contains('a', '(Logout)').should('be.visible');

    })
    //teste
    it('fazer login de usuario invalido', () => {

        cy.login('jacqueline', '1234') // comando personalizado
        // cy.get('input[formcontrolname="userName"]').type('jacqueline');
        // cy.get('input[formcontrolname="password"]').type('1234');
        // cy.get('button[type="submit"]').click();
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

    })

})