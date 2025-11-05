describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000/')
  })


  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
  
    //cy.get('#login-section > .btn').click() menos legível
    cy.contains('button','Entrar').click() //mais legível

    //asserts
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {    
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button','Entrar').click()

    //asserts
    cy.get('.toast')
      .should('be.visible')
      .should('contain.text', 'Erro no login. Tente novamente.')
  })
})