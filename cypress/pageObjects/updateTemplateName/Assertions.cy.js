class updateTemplateNameAssertions {

    checkTemplateCardNameUpdated(newCardName){
      cy.findByTestId("card-back-title-input").should('have.value', newCardName)
    }
}
export default updateTemplateNameAssertions