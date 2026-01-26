/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/Actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteCard/Assertions.cy";

const deleteAction = new deleteCardActions();
const deleteAssertion = new deleteCardAssertions();
const dataUtil = new dataUtils();

const boardName = "cy-Boardd"
const cardName = "cy-card-title"
let boardId, boardUrl, listId, cardId, cardUrl

before(() => {
  dataUtil.createBoard(boardName).then((response) => {
    boardId = response.body.id
    boardUrl = response.body.url

    return dataUtil.getListsByBoard(boardId)}).then((response) => {
    listId = response.body[0].id 

    return dataUtil.createCard(listId, cardName)}).then((response) => {
    cardId = response.body.id
    cardUrl = response.body.url
  
  })

  cy.loginToTrello()
})

Given("The user navigates to the board",()=>{
    deleteAction.openBoard(boardUrl)

})

When("The user opens the card",()=>{
    deleteAction.openCard(cardUrl)
})

When("The user clicks on menu icon",()=>{
    deleteAction.clickOnMenuIcon()

})

When("The user clicks on archive card button",()=>{
    deleteAction.clickOnArchiveButton()

})


When("The user clicks on delete card button",()=>{
    deleteAction.clickOnDeleteButton()
   
})
When("The user confirms delete card",()=>{
   deleteAction.clickOnConfirmDeleteButton()
})

Then("The card should be deleted successfully",()=>{
    deleteAssertion.checkDeletedCard(cardName)
})

after(() => {
    dataUtil.deleteBoard(boardId)
})