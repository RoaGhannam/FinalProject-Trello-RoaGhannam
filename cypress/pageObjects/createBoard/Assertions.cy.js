class createBoardAssertions {
    
    checkURLIsContain(boardName){
        cy.url().should("contain",boardName)
        return this;
    }

    checkBoardNameIsContain(boardName){
        cy.findByTestId("board-name-input").should("have.value",boardName)
        return this;
    }
}
export default createBoardAssertions;