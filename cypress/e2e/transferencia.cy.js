describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve realizar uma transferência com valor e dados válidos', () => {
        //Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '1500')
        //Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil', () => {
        //Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '5001')
        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$ 5.000,00')
    })
})