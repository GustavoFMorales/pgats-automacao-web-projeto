describe('Automation Exercise lista de produto e detalhes produto', () => {
  it('Caso 8 - Verificar todos os produtos e a página de detalhes do produto', () => {
    cy.acessarPaginaInicial();
    cy.clicaBotaoProduto();
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);

    cy.get('a[href="/product_details/1"]').click();
    cy.url().should('include', '/product_details/1');
    cy.contains('h2', 'Blue Top').should('be.visible');
    cy.contains('p', 'Category: Women > Tops').should('be.visible');
    cy.contains('span', 'Rs. 500').should('be.visible');
    cy.contains('b', 'Availability:').should('be.visible');
    cy.contains('b', 'Condition:').should('be.visible');
    cy.contains('b', 'Brand:').should('be.visible');
  });
});
