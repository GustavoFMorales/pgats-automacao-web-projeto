# Automação Web - Automation Exercise

Testes automatizados de interface do site [Automation Exercise](https://automationexercise.com), feitos com [Cypress](https://www.cypress.io/) como trabalho da Pós-graduação em Automação de Testes de Software (PGATS).

## Cenários automatizados

Casos da página [Test Cases](https://automationexercise.com/test_cases) do site:

| Caso | Cenário | Arquivo |
| --- | --- | --- |
| 1 | Cadastro de um novo usuário | `cadastro_usuario_automation-exercise.cy.js` |
| 2 | Login com e-mail e senha corretos | `login_automation-exercise.cy.js` |
| 3 | Login com e-mail e senha incorretos | `login_automation-exercise.cy.js` |
| 4 | Logout do usuário | `logout_automation-exercise.cy.js` |
| 5 | Cadastro com e-mail já existente | `cadastro_usuario_existente_automation-exercise.cy.js` |
| 8 | Lista de produtos e página de detalhes | `detalhes_produto_automation-exercise.cy.js` |
| 9 | Pesquisa de produto | `pesquisar_produto_automation-exercise.cy.js` |
| 10 | Assinatura na página inicial | `assinatura_pagina_automation-exercise.cy.js` |
| 15 | Pedido com cadastro antes da compra | `realizar_pedido_automation-exercise.cy.js` |
| 16 | Pedido com login antes da compra | `realizar_pedido_automation-exercise.cy.js` |

## Estrutura

```
cypress/
  e2e/          # cenários de teste
  fixtures/     # dados de teste (usuario.json)
  support/
    commands.js # comandos customizados (login, cadastro, carrinho, pagamento...)
    e2e.js      # configuração global carregada antes dos testes
.github/workflows/cypress.yml  # execução no GitHub Actions
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 22 ou superior

## Como rodar

```bash
npm install       # instala as dependências
npm test          # roda todos os testes em modo headless
npm run cy:open   # abre a interface do Cypress
```

## Relatório

Cada execução gera um relatório HTML com o resultado de cada teste em `cypress/reports/index.html`. Os testes que falham aparecem com screenshot.

No GitHub Actions, o relatório fica disponível para download como artefato `relatorio-cypress`, na página de cada execução da aba **Actions**.

## Integração contínua

Os testes rodam no GitHub Actions a cada `push` e `pull request`. Também é possível rodar manualmente pela aba **Actions**, em **Testes Cypress** > **Run workflow**.
