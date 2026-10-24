import usuario from '../fixtures/usuario.json';

describe('Automation Exercise cadastro de usuário existente', () => {
  it('Cadastrar usuário com e-mail existente', () => {
    cy.visit('/');
    cy.get('a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(usuario.nome);
    cy.get('[data-qa="signup-email"]').type(usuario.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Email Address already exist!').should('be.visible');
  });
});
