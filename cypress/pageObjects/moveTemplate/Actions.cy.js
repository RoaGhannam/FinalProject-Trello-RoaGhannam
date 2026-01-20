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

    clickOnMoveLink(){
        cy.contains('span', 'Move').click()
        return this

    }
    clickOnDropDownList(){
       cy.findByTestId("move-card-popover-select-list-destination-select--input-container").click()
        return this

    }

    selectAnyList(){
     cy.contains('Doing').click()    
     return this
    }
    clickOnMoveButtton(){
    cy.wait(1000)
     cy.findByTestId("move-card-popover-move-button").click()    
     return this
    }
  

}
export default moveTemplateActions