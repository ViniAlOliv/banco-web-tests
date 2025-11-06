# Banco Web Tests (Cypress)

Projeto de automação de testes end-to-end com Cypress e JavaScript para validar Login e Transferências da aplicação "banco-web".

## Motivo
Este repositório demonstra como automatizar cenários de Login e Transferências usando Cypress, organizando a lógica reutilizável em Custom Commands e gerando relatórios com `cypress-mochawesome-reporter`.

## Componentes do projeto
- Configuração do Cypress: [cypress.config.js](cypress.config.js)  
- Scripts do projeto: [package.json](package.json)  
- Suporte e comandos globais: [cypress/support/e2e.js](cypress/support/e2e.js) e [cypress/support/commands.js](cypress/support/commands.js)  
- Custom Commands:
  - [`Cypress.Commands.add('fazerLoginComCredenciaisValidas')`](cypress/support/commands/login.js) — [cypress/support/commands/login.js](cypress/support/commands/login.js)  
  - [`Cypress.Commands.add('fazerLoginComCredenciaisInvalidas')`](cypress/support/commands/login.js) — [cypress/support/commands/login.js](cypress/support/commands/login.js)  
  - [`Cypress.Commands.add('realizarTransferencia')`](cypress/support/commands/transferencia.js) — [cypress/support/commands/transferencia.js](cypress/support/commands/transferencia.js)  
  - [`Cypress.Commands.add('verificarMensagemNoToast')`](cypress/support/commands/common.js) — [cypress/support/commands/common.js](cypress/support/commands/common.js)  
  - [`Cypress.Commands.add('selecionarOpcaoNaCombobox')`](cypress/support/commands/common.js) — [cypress/support/commands/common.js](cypress/support/commands/common.js)  
- Specs / testes:
  - [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js) — validações de login
  - [cypress/e2e/transferencia.cy.js](cypress/e2e/transferencia.cy.js) — cenários de transferência
- Fixtures:
  - [cypress/fixtures/credenciais.json](cypress/fixtures/credenciais.json)
  - [cypress/fixtures/example.json](cypress/fixtures/example.json)

## Pré-requisitos
- Node.js + npm
- A API (banco-api) e a aplicação web (banco-web) devem estar em execução:
  - API: https://github.com/ViniAlOliv/m4-banco-api-tests
  - Web: (executar a instância local do projeto banco-web)
- As variáveis de ambiente/URLs usadas nos testes assumem que a web está em `http://localhost:4000` (veja [package.json scripts](package.json) e [cypress.config.js](cypress.config.js)).

## Instalação
1. Instalar dependências:
```sh
npm install