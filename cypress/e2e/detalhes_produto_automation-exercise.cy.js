import usuario from '../fixtures/usuario.json';

describe('Automation Exercise lista de produto e detalhes produto', () => {
  it('Verificar todos os produtos e a página de detalhes do produto', () => {
    cy.login(usuario.email, usuario.senha);
    cy.clicaBotaoProduto();
    cy.get('a[href="/product_details/1"]').click();
    cy.contains('h2', 'Blue Top').should('be.visible');
    cy.contains('p', 'Category: Women > Tops').should('be.visible');
    cy.contains('span', 'Rs. 500').should('be.visible');
    cy.contains('b', 'Availability:').should('be.visible');
    cy.contains('b', 'Condition:').should('be.visible');
    cy.contains('b', 'Brand:').should('be.visible');
  });
});
