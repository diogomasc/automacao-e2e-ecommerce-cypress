/// <reference types="cypress" />

import dataUser from "../../fixtures/dataUser.json"

describe('Cenário: Cadastro', () => {

  beforeEach(() => {
    cy.irParaRegistro()
  });

  it('Não permitir cadastro com senhas diferentes', () => {
    cy.prencherPrimeiroNome("Victor")
    cy.prencherPrimeiroSegundoNome("Augusto")
    cy.prencherEmail("victor@testing.com")
    cy.prencherSenha("123456")
    cy.prencherConfirmacaoSenha("1234567")
    cy.clicarNoBotaoDeRegistro()
    cy.validarMensagemError("Senhas não conferem")
  })

  it('Não permitir cadastro sem sobrenome', () => {
    cy.prencherPrimeiroNome("Victor")
    // cy.prencherPrimeiroSegundoNome("Augusto")
    cy.prencherEmail("victor@testing.com")
    cy.prencherSenha("123456")
    cy.prencherConfirmacaoSenha("123456")
    cy.clicarNoBotaoDeRegistro()
    cy.validarMensagemError("Sobrenome é obrigatório")
  })

  it('Não permitir cadastro sem email', () => {
    cy.prencherPrimeiroNome("Victor")
    cy.prencherPrimeiroSegundoNome("Augusto")
    // cy.prencherEmail("victortesting.com")
    cy.prencherSenha("123456")
    cy.prencherConfirmacaoSenha("123456")
    cy.clicarNoBotaoDeRegistro()
    cy.validarMensagemError("E-mail é obrigatório")
  })

  it('Não permitir cadastro com email com formato invalido', () => {
    cy.prencherPrimeiroNome("Victor")
    cy.prencherPrimeiroSegundoNome("Augusto")
    cy.prencherEmail("victortesting.com")
    cy.prencherSenha("123456")
    cy.prencherConfirmacaoSenha("123456")
    cy.clicarNoBotaoDeRegistro()
    cy.validarMensagemError("E-mail inválido. Formato esperado: email@dominio.com")
  })

  it('Permitir cadastro com dados validos', () => {
    cy.prencherPrimeiroNome("Victor")
    cy.prencherPrimeiroSegundoNome("Augusto")
    cy.prencherEmail("victor@testing.com")
    cy.prencherSenha("123456")
    cy.prencherConfirmacaoSenha("123456")
    cy.clicarNoBotaoDeRegistro()
    cy.get('a[data-testid="user-greeting"]').should("be.visible").and("have.text", "Olá, Victor")
  })
})
