import usuario from '../fixtures/usuario.json';

describe('Automation Exercise assinatura da página', () => {
  it('Verificar assinatura na página inicial', () => {
    cy.visit('/');
    cy.contains('h2', 'Subscription').should('be.visible');
    cy.get('#susbscribe_email').type(usuario.email);
    cy.get('#subscribe').click();
    cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
  });
});
