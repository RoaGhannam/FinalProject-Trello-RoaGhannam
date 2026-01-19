class hideTemplateActions {

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
    
    clickOnHide(){
        cy.wait(2000)
        cy.contains('span', 'Hide from list').click()
        return this

    }

    clickOnCloseIcon(){
      cy.findByTestId("CloseIcon").click()

    }

}
export default hideTemplateActions