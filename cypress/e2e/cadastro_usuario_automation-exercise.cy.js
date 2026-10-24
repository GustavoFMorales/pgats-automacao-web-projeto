import usuario from '../fixtures/usuario.json';

describe('Automation Exercise cadastro de usuário', () => {
  it('Cadastrar um novo usuário com sucesso', () => {
    const email = `jose.santos_${Date.now()}@gmail.com`;

    cy.visit('/');
    cy.cadastrarUsuario(email);

    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');

    // Exclui a conta para não deixar contas de teste no site
    cy.excluirConta();
  });
});
