Cypress.Commands.add('irParaCatalogo', () => {
  return cy.visit('/catalog.html')
})

Cypress.Commands.add('abrirProduto', (id) => {
  return cy.get(`[data-testid="product-card-link-${id}"]`).click()
})

Cypress.Commands.add('selecionarCor', (cor) => {
  return cy.get(`[data-color="${cor}"]`).click()
})

Cypress.Commands.add('selecionarTamanho', (tamanho) => {
  return cy.get(`[data-testid="size-${tamanho}"]`).click()
})

Cypress.Commands.add('adicionarAoCarrinho', () => {
  return cy.get('[data-testid="add-to-cart-btn"]').click()
})

Cypress.Commands.add('contadorDoCarrinho', () => {
  return cy.get('[data-testid="cart-counter"]')
})

Cypress.Commands.add('validarAvisoDeIndisponibilidade', (mensagemEsperada) => {
  return cy.get('[data-testid="product-unavailable-warning"]')
    .should('be.visible')
    // Para validar apenas um trecho, use .and('contain.text', trechoEsperado).
    .and('have.text', mensagemEsperada)
})

Cypress.Commands.add('confirmacaoDeAdicao', () => {
  return cy.get('[data-testid="add-to-cart-feedback"]')
})
