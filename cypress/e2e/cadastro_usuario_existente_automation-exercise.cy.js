import usuario from '../fixtures/usuario.json';

describe('Automation Exercise cadastro de usuário existente', () => {
  it('Caso 5 - Cadastrar usuário com e-mail existente', () => {
    cy.acessarPaginaInicial();
    cy.get('a[href="/login"]').click();
    cy.contains('h2', 'New User Signup!').should('be.visible');

    cy.get('[data-qa="signup-name"]').type(usuario.nome);
    cy.get('[data-qa="signup-email"]').type(usuario.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Email Address already exist!').should('be.visible');
  });
});
