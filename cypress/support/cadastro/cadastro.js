Cypress.Commands.add('irParaRegistro', () => {
  cy.visit('/register.html')
})

Cypress.Commands.add('prencherPrimeiroNome', (primeiroNome) => {
  cy.get('[data-testid="register-firstname"]').type(primeiroNome)
})

Cypress.Commands.add('prencherPrimeiroSegundoNome', (segundoNome) => {
  cy.get('[data-testid="register-lastname"]').type(segundoNome)
})

Cypress.Commands.add('prencherEmail', (email) => {
  cy.get('[data-testid="register-email"]').type(email)
})

Cypress.Commands.add('prencherSenha', (senha) => {
  cy.get('[data-testid="register-password"]').type(senha)
})

Cypress.Commands.add('prencherConfirmacaoSenha', (confirmacaoSenha) => {
  cy.get('[data-testid="register-confirm-password"]').type(confirmacaoSenha)
})

Cypress.Commands.add('clicarNoBotaoDeRegistro', () => {
  cy.get('[data-testid="register-submit"]').click()
})

// Cypress.Commands.add('validarMensagemError', (mensagem) => {
// cy.get('.form-error').should("be.visible").and("contains", mensagem)
// })

Cypress.Commands.add('validarMensagemError', (mensagemEsperada) => {
  // A classe .form-error encontra os cinco elementos de erro do cadastro.
  // O filtro seleciona o erro visível antes de ler seu texto.
  return cy.get('.form-error')
    .filter(':visible')
    .should('have.length', 1)
    // Para comparar apenas um trecho, use .and('contain.text', trechoEsperado).
    .then(($erro) => {
      expect($erro.text().trim()).to.equal(mensagemEsperada)
    })
})