import usuario from '../fixtures/usuario.json';

describe('Automation Exercise assinatura da página', () => {
  it('Caso 10 - Verificar assinatura na página inicial', () => {
    cy.acessarPaginaInicial();
    cy.get('footer').scrollIntoView();

    cy.contains('h2', 'Subscription').should('be.visible');
    cy.get('#susbscribe_email').type(usuario.email);
    cy.get('#subscribe').click();
    cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
  });
});
