class deleteCardActions {

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this
    }

    openCard(cardUrl){
        cy.visit(cardUrl)
        return this
    }

    clickOnMenuIcon(){
        cy.wait(2000)
       cy.findByTestId("card-back-actions-button").click()
        return this
    }

    clickOnArchiveButton(){
        cy.contains('span', 'Archive').click()
        return this
    }

    clickOnDeleteButton(){
        cy.contains('span', 'Delete').click()
        return this
    }


    clickOnConfirmDeleteButton(){
    cy.findByTestId("popover-confirm-button").click()
        return this
    }


}
export default deleteCardActions