import usuario from '../fixtures/usuario.json';

Cypress.Commands.add('acessarPaginaInicial', () => {
  cy.visit('/');
  cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('login', (email, senha) => {
  cy.acessarPaginaInicial();
  cy.get('a[href="/login"]').click();
  cy.contains('h2', 'Login to your account').should('be.visible');
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('clicaBotaoProduto', () => {
  cy.get('a[href="/products"]').click();
  cy.contains('h2', 'All Products').should('be.visible');
});

// Preenche as duas telas de cadastro pela interface
Cypress.Commands.add('cadastrarUsuario', (email) => {
  cy.get('a[href="/login"]').click();
  cy.contains('h2', 'New User Signup!').should('be.visible');
  cy.get('[data-qa="signup-name"]').type(usuario.nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  // Informações da conta
  cy.contains('h2', 'Enter Account Information', { matchCase: false }).should('be.visible');
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type(usuario.senha);
  cy.get('[data-qa="days"]').select(usuario.dataNascimento.dia);
  cy.get('[data-qa="months"]').select(usuario.dataNascimento.mes);
  cy.get('[data-qa="years"]').select(usuario.dataNascimento.ano);
  cy.get('#newsletter').check();
  cy.get('#optin').check();

  // Informações pessoais
  cy.get('[data-qa="first_name"]').type(usuario.primeiroNome);
  cy.get('[data-qa="last_name"]').type(usuario.sobrenome);
  cy.get('[data-qa="company"]').type(usuario.empresa);

  // Endereço
  cy.get('[data-qa="address"]').type(usuario.endereco);
  cy.get('[data-qa="address2"]').type(usuario.complemento);
  cy.get('[data-qa="country"]').select(usuario.pais);
  cy.get('[data-qa="state"]').type(usuario.estado);
  cy.get('[data-qa="city"]').type(usuario.cidade);
  cy.get('[data-qa="zipcode"]').type(usuario.cep);
  cy.get('[data-qa="mobile_number"]').type(usuario.celular);
  cy.get('[data-qa="create-account"]').click();
});

// Cria a conta direto pela API, sem passar pela interface
Cypress.Commands.add('criarUsuarioApi', (email) => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: usuario.nome,
      email: email,
      password: usuario.senha,
      title: 'Mr',
      birth_date: usuario.dataNascimento.dia,
      birth_month: usuario.dataNascimento.mesNumero,
      birth_year: usuario.dataNascimento.ano,
      firstname: usuario.primeiroNome,
      lastname: usuario.sobrenome,
      company: usuario.empresa,
      address1: usuario.endereco,
      address2: usuario.complemento,
      country: usuario.pais,
      state: usuario.estado,
      city: usuario.cidade,
      zipcode: usuario.cep,
      mobile_number: usuario.celular,
    },
  })
    .its('status')
    .should('eq', 200);
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  cy.get('.features_items .productinfo a[data-product-id="1"]').click();
  cy.contains('button', 'Continue Shopping').click();
});

// Abre o carrinho e vai até a tela de revisão do pedido
Cypress.Commands.add('finalizarCompra', () => {
  cy.get('.shop-menu a[href="/view_cart"]').click();
  cy.get('#cart_info').should('be.visible');
  cy.contains('Proceed To Checkout').click();

  cy.get('#address_delivery').should('contain', usuario.endereco);
  cy.contains('h2', 'Review Your Order').should('be.visible');
  cy.get('textarea[name="message"]').type('Pedido de teste da automação');
  cy.get('a[href="/payment"]').click();
});

Cypress.Commands.add('pagar', () => {
  cy.get('[data-qa="name-on-card"]').type(usuario.cartao.nome);
  cy.get('[data-qa="card-number"]').type(usuario.cartao.numero);
  cy.get('[data-qa="cvc"]').type(usuario.cartao.cvc);
  cy.get('[data-qa="expiry-month"]').type(usuario.cartao.mesValidade);
  cy.get('[data-qa="expiry-year"]').type(usuario.cartao.anoValidade);
  cy.get('[data-qa="pay-button"]').click();
});

Cypress.Commands.add('excluirConta', () => {
  cy.get('a[href="/delete_account"]').click();
  cy.get('[data-qa="account-deleted"]').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});
