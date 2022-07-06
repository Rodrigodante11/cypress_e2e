describe('Login de usuarios alura pic ', () => {

    beforeEach(() => {
        
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    it('verifica mensagem de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button' , 'Register').click();
        cy.get('input[formcontrolname="email"]').type('rodrigo');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')

    })

    it('verifica mensagens validacao', () => {

        // localizar um elemento na pagina e fazer uma açao(click no caso)
        // cy.contains('nome div', 'value or text na div').ação()
        cy.contains('a', 'Register now').click();

        cy.contains('button' , 'Register').click();

        //cy.contains('ap-vmessage', 'mensagem que tem que aparecer').should('estar visivel')
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')

        cy.contains('button' , 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button' , 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button' , 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')

    })

    //dados em massa
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it.only(`Registrar novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
            
        })
    })
    


})