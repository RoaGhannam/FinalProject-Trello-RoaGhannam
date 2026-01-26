/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import cardTemplateActions from "../../../pageObjects/createTemplate/Actions.cy";
import cardTemplateAssertions from "../../../pageObjects/createTemplate/Assertions.cy";

const cardTemplateAction =new cardTemplateActions();
const cardTemplateAssertion = new cardTemplateAssertions();
const dataUtil = new dataUtils();

const boardName = "cy-Boardd"
const cardName = "cy-New-Template"
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
    cardTemplateAction.openBoard(boardUrl)
    
})

When("The user opens the card",()=>{
    cardTemplateAction.openCard(cardUrl)
})

When("The user clicks on menu icon",()=>{
    cardTemplateAction.clickOnMenuIcon()

})

When("The user clicks on make template",()=>{
    cardTemplateAction.clickOnMakeTemplate()

})


Then("The template should be created successfully",()=>{
    cardTemplateAssertion.checkNewTemplateCard()
})

after(() => {
    dataUtil.deleteBoard(boardId)
})