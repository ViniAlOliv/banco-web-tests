describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit(baseUrl)
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.fazerLoginComCredenciaisValidas()
    //asserts
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {    
    //Act
    cy.fazerLoginComCredenciaisInvalidas()
    //asserts
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})