describe('Automation Exercise pesquisa de produto', () => {
  it('Caso 9 - Pesquisar produto', () => {
    cy.acessarPaginaInicial();
    cy.clicaBotaoProduto();

    cy.get('#search_product').type('Men Tshirt');
    cy.get('#submit_search').click();

    cy.contains('h2', 'Searched Products', { matchCase: false }).should('be.visible');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    cy.contains('.productinfo p', 'Men Tshirt').should('be.visible');
  });
});
