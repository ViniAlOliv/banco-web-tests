describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000/')
  })


  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    //cy.get('#login-section > .btn').click() menos legível
    cy.contains('button','Entrar').click() //mais legível

    //asserts
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {    
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('156')
    cy.contains('button','Entrar').click()

    //asserts
    cy.get('.toast')
      .should('be.visible')
      .should('contain.text', 'Erro no login. Tente novamente.')
  })
})