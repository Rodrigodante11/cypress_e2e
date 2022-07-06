describe('Login e registro de usuarios alura pic ', () => {

    beforeEach(() => {
        
        cy.visit('https://alura-fotos.herokuapp.com')
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

    it('verifica mensagem de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button' , 'Register').click();
        cy.get('input[formcontrolname="email"]').type('rodrigo');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')

    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button' , 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button' , 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')

    })

    it('verifica mensagem de precisa ser minuscculo no campo de full name', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button' , 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('RODRIGO');
        cy.contains('button' , 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')

    })

    it.only('fazer login de usuario valido', () => {

        cy.login('flavio', '123') // comando personalizado

        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click();
        
        cy.contains('a', '(Logout)').should('be.visible');

    })
    //teste
    it.only('fazer login de usuario invalido', () => {

        cy.login('jacqueline', '1234') // comando personalizado
        // cy.get('input[formcontrolname="userName"]').type('jacqueline');
        // cy.get('input[formcontrolname="password"]').type('1234');
        // cy.get('button[type="submit"]').click();
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

    })


})