import usuario from '../fixtures/usuario.json';

describe('Automation Exercise login', () => {
  it('Login do usuário com e-mail e senha corretos', () => {
    cy.login(usuario.email, usuario.senha);
    cy.get('a[href="/logout"]').should('be.visible');
    cy.get('a[href="/delete_account"]').should('be.visible');
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');
  });

  it('Login do usuário com senha incorreta', () => {
    cy.login(usuario.email, '1234');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Login do usuário com email incorreto', () => {
    cy.login('jose.santosteste@gmail.com', usuario.senha);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
