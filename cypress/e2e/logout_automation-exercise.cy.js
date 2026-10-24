import usuario from '../fixtures/usuario.json';

describe('Automation Exercise logout', () => {
  it('Caso 4 - Logout do usuário logado', () => {
    cy.login(usuario.email, usuario.senha);
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');

    cy.get('a[href="/logout"]').click();
    cy.url().should('include', '/login');
    cy.contains('h2', 'Login to your account').should('be.visible');
  });
});
