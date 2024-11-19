describe('Agenda de Contatos - Testes Automatizados', () => {
    beforeEach(() => {
        
      cy.visit('/');
    });
  
    it('Deve adicionar um novo contato', () => {

      cy.contains('Adicionar contato').click();
  
      cy.get('input[name="name"]').type('João da Silva');
      cy.get('input[name="email"]').type('joao.silva@email.com');
      cy.get('input[name="phone"]').type('11999999999');
  
      cy.contains('Salvar').click();
  
      cy.contains('João da Silva').should('exist');
      cy.contains('joao.silva@email.com').should('exist');
    });
  
    it('Deve editar um contato existente', () => {

      cy.contains('João da Silva').click();
      
      cy.get('input[name="name"]').clear().type('João Silva Editado');
      cy.get('input[name="email"]').clear().type('joao.silva.edited@email.com');
  
      cy.contains('Salvar').click();
  
      cy.contains('João Silva Editado').should('exist');
      cy.contains('joao.silva.edited@email.com').should('exist');
    });
  
    it('Deve remover um contato', () => {

      cy.contains('João Silva Editado')
        .parent()
        .contains('Remover')
        .click();

      cy.contains('João Silva Editado').should('not.exist');
    });
  });
  