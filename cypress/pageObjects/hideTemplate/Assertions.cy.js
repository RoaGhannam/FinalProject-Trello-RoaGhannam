class hideTemplateAssertions {

    checkHiddenTemplateCard(cardName){
                cy.wait(2000)

        cy.contains(cardName).should('not.exist')
        return this
    }
}
export default hideTemplateAssertions