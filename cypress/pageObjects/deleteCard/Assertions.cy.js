class deleteCardAssertions {

    checkDeletedCard(cardName){
      cy.contains(cardName).should('not.exist')
      cy.screenshot('deletedCardScreenshot', { capture: 'fullPage' })
        return this
    }
}
export default deleteCardAssertions