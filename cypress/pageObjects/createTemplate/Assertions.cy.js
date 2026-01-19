class cardTemplateAssertions {

    checkNewTemplateCard(){
      cy.get(".LkHBYzkKIaLlkk").should("be.visible")
    }
}
export default cardTemplateAssertions