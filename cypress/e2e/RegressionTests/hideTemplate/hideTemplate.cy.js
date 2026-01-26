/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import hideTemplateActions from "../../../pageObjects/hideTemplate/Actions.cy";
import hideTemplateAssertions from "../../../pageObjects/hideTemplate/Assertions.cy";


const hideTemplateAction = new hideTemplateActions();
const hideTemplateAssertion = new hideTemplateAssertions();
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
    hideTemplateAction.openBoard(boardUrl)
    
})

When("The user opens the card",()=>{
    hideTemplateAction.openCard(cardUrl)
   
})

When("The user clicks on menu icon",()=>{
   hideTemplateAction.clickOnMenuIcon()

})

When("The user clicks on make template",()=>{
    hideTemplateAction.clickOnMakeTemplate()

})
When("The user clicks on hide button",()=>{
    hideTemplateAction.clickOnHide()

})
When("The user click on close icon",()=>{
    hideTemplateAction.clickOnCloseIcon()

})
Then("The card template should be hidden",()=>{
    hideTemplateAssertion.checkHiddenTemplateCard(cardName)
})


after(() => {
    dataUtil.deleteBoard(boardId)
})