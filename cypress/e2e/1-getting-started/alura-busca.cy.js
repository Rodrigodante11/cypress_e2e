describe('alura busca curso ', () => {

    beforeEach(() => {
        
        cy.visit('https://www.alura.com.br')
    })

    it('buscar curso de java', () => {

        // pego pelo dashboard ao roda o teste ate a pagina da alura e usar o targer
        cy.get('#header-barraBusca-form-campoBusca').type('java')
        cy.get('.header-barraBusca-form-submit').click();

        cy.get('h4.busca-resultado-nome')
        .should('contain', 'Formação Java e Orientação a Objetos');
        //should colocar o texto esperado

    })
})