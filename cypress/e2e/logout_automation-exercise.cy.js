import usuario from '../fixtures/usuario.json';

describe('Automation Exercise logout', () => {
  it('Logout do usuário logado', () => {
    cy.login(usuario.email, usuario.senha);
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');
    cy.get('a[href="/logout"]').click();
    cy.get('a[href="/login"]').should('be.visible');
    cy.contains('h2', 'Login to your account').should('be.visible');
  });
});
