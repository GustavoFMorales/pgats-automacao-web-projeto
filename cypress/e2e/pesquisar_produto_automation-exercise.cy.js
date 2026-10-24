import usuario from '../fixtures/usuario.json';

describe('Automation Exercise pesquisa de produto', () => {
  it('Pesquisar produto', () => {
    cy.login(usuario.email, usuario.senha);
    cy.clicaBotaoProduto();
    cy.get('#search_product').type('Men Tshirt');
    cy.get('#submit_search').click();
    cy.contains('p', 'Men Tshirt').should('be.visible');
  });
});
