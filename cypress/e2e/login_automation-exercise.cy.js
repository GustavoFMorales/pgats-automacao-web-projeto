import usuario from '../fixtures/usuario.json';

describe('Automation Exercise login', () => {
  it('Caso 2 - Login do usuário com e-mail e senha corretos', () => {
    const email = `jose.santos_${Date.now()}@gmail.com`;

    // Cria a conta pela API, pois ela será excluída no final do teste
    cy.criarUsuarioApi(email);

    cy.login(email, usuario.senha);
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');
    cy.get('a[href="/logout"]').should('be.visible');

    cy.excluirConta();
  });

  it('Caso 3 - Login do usuário com e-mail e senha incorretos', () => {
    cy.login('jose.santosteste@gmail.com', '1234');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Caso 3 - Login do usuário com senha incorreta', () => {
    cy.login(usuario.email, '1234');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Caso 3 - Login do usuário com e-mail incorreto', () => {
    cy.login('jose.santosteste@gmail.com', usuario.senha);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
