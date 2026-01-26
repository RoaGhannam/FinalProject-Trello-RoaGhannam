/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import updateTemplateNameActions from "../../../pageObjects/updateTemplateName/Actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/Assertions.cy";


const updateTemplateNameAction = new updateTemplateNameActions();
const updateTemplateNameAssertion = new updateTemplateNameAssertions();
const dataUtil = new dataUtils();

const boardName = "cy-Boardd"
const cardName = "cy-New-Template"
const newCardName = "New-Name"
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
    updateTemplateNameAction.openBoard(boardUrl)
    
})

When("The user opens the card",()=>{
    updateTemplateNameAction.openCard(cardUrl)
})

When("The user clicks on menu icon",()=>{
    updateTemplateNameAction.clickOnMenuIcon()
   

})

When("The user clicks on make template",()=>{
    updateTemplateNameAction.clickOnMakeTemplate()

    
})

When("The user clear card template name old",()=>{
    updateTemplateNameAction.clearCardName()   

})

When("The user type the new template name",()=>{
    updateTemplateNameAction.typeNewCardName(newCardName)

})


Then("The template card name should be update",()=>{
    updateTemplateNameAssertion.checkTemplateCardNameUpdated(newCardName)
   
})

after(() => {
    dataUtil.deleteBoard(boardId)
})