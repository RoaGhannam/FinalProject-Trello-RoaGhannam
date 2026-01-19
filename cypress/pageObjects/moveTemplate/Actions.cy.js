class moveTemplateActions {

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this
    }

    openCard(cardUrl){
        cy.visit(cardUrl)
        return this
    }

    clickOnMenuIcon(){
        cy.wait(1000)
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

    clickOnMoveButtton(){
        cy.contains('span', 'Move').click()
        return this

    }
    clickOnSuggestionList(){
    cy.get(".E1T9c99Eq0BY0i").click()       
     return this

    }
  

}
export default moveTemplateActions