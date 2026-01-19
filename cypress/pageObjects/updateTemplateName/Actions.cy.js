class updateTemplateNameActions {

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this
    }

    openCard(cardUrl){
        cy.visit(cardUrl)
        return this
    }

    clickOnMenuIcon(){
        cy.wait(3000)
       cy.findByTestId("card-back-actions-button").click()
        return this
    }

    clickOnMakeTemplate(){
        cy.contains('span', 'Make template').click()
        return this

    }
    clickOnMakeTemplate(){
        cy.contains('span', 'Make template').click()
        return this

    }
    clearCardName(){
        cy.wait(3000)
        cy.findByTestId("card-back-title-input").clear({ force: true })
        return this

    }

    typeNewCardName(newCardName){
       cy.findByTestId("card-back-title-input").type(newCardName ,{ force: true })
        return this

    }



}
export default updateTemplateNameActions