/// <reference types="cypress" />

describe('Cenário: Produto', () => {
  beforeEach(() => {
    cy.irParaCatalogo()
  })

  it('Bloqueia a adição da Calça Jeans Skinny Azul Escuro tamanho 38', () => {
    cy.abrirProduto('prod-002')
    cy.selecionarCor('Azul Escuro')
    cy.selecionarTamanho('38')
    cy.contadorDoCarrinho().should('have.text', '0')
    cy.adicionarAoCarrinho()

    cy.validarAvisoDeIndisponibilidade('O item, tamanho ou cor desejado encontra-se indisponível.')

    cy.contadorDoCarrinho().then(($contador) => {
      expect($contador.text()).to.equal('0')
    })
  })

  it('Permite adicionar a Calça Jeans Skinny Azul Escuro tamanho 42', () => {
    cy.abrirProduto('prod-002')
    cy.selecionarCor('Azul Escuro')
    cy.selecionarTamanho('42')
    cy.contadorDoCarrinho().should('have.text', '0')
    cy.adicionarAoCarrinho()

    cy.confirmacaoDeAdicao().should('be.visible').and('have.text', 'Produto adicionado!')

    cy.contadorDoCarrinho().then(($contador) => {
      expect($contador.text()).to.equal('1')
    })
  })

  it('Bloqueia a adição da Bermuda Cargo Caqui tamanho P', () => {
    cy.abrirProduto('prod-003')
    cy.selecionarCor('Caqui')
    cy.selecionarTamanho('P')
    cy.contadorDoCarrinho().should('have.text', '0')
    cy.adicionarAoCarrinho()

    cy.validarAvisoDeIndisponibilidade('O item, tamanho ou cor desejado encontra-se indisponível.')

    cy.contadorDoCarrinho().then(($contador) => {
      expect($contador.text()).to.equal('0')
    })
  })

  it('Permite adicionar a Bermuda Cargo Caqui tamanho M', () => {
    cy.abrirProduto('prod-003')
    cy.selecionarCor('Caqui')
    cy.selecionarTamanho('M')
    cy.contadorDoCarrinho().should('have.text', '0')
    cy.adicionarAoCarrinho()

    cy.confirmacaoDeAdicao().should('be.visible').and('have.text', 'Produto adicionado!')

    cy.contadorDoCarrinho().then(($contador) => {
      expect($contador.text()).to.equal('1')
    })
  })
})
