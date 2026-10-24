import usuario from '../fixtures/usuario.json';

describe('Automation Exercise realizar pedido', () => {
  it('Caso 15 - Cadastrar usuário antes de finalizar a compra', () => {
    const email = `jose.santos_${Date.now()}@gmail.com`;

    cy.acessarPaginaInicial();
    cy.cadastrarUsuario(email);
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');

    cy.adicionarProdutoAoCarrinho();
    cy.finalizarCompra();
    cy.pagar();

    cy.get('[data-qa="order-placed"]').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    cy.excluirConta();
  });

  it('Caso 16 - Fazer login antes de finalizar a compra', () => {
    const email = `jose.santos_${Date.now()}@gmail.com`;

    // Cria a conta pela API, pois ela será excluída no final do teste
    cy.criarUsuarioApi(email);

    cy.login(email, usuario.senha);
    cy.contains(`Logged in as ${usuario.nome}`).should('be.visible');

    cy.adicionarProdutoAoCarrinho();
    cy.finalizarCompra();
    cy.pagar();

    cy.get('[data-qa="order-placed"]').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    cy.excluirConta();
  });
});
