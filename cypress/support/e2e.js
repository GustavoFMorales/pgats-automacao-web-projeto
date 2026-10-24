import 'cypress-mochawesome-reporter/register';
import './commands';

// Ignora apenas erros vindos dos anúncios do site; qualquer outro erro continua falhando o teste
Cypress.on('uncaught:exception', (err) => {
  if (/adsbygoogle|googlesyndication|doubleclick|Script error/i.test(`${err.message} ${err.stack}`)) {
    return false;
  }
});
