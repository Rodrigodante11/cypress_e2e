describe('testando home ', () => {

    beforeEach(() => {
        
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagem de precisa ser minuscculo no campo de full name', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button' , 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('RODRIGO');
        cy.contains('button' , 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')

    })

})