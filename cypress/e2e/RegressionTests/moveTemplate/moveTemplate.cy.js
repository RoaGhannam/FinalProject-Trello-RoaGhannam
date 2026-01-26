/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import moveTemplateActions from "../../../pageObjects/moveTemplate/Actions.cy";
import moveTemplateAssertions from "../../../pageObjects/moveTemplate/Assertions.cy";


const moveTemplateAction =new moveTemplateActions();
const moveTemplateAssertion = new moveTemplateAssertions();
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
     moveTemplateAction.openBoard(boardUrl)
    
})

When("The user opens the card",()=>{
    moveTemplateAction.openCard(cardUrl)
})

When("The user clicks on menu icon",()=>{
    moveTemplateAction.clickOnMenuIcon()

})

When("The user clicks on make template",()=>{
   moveTemplateAction.clickOnMakeTemplate()

})
When("The user click on move link",()=>{
   moveTemplateAction.clickOnMoveLink()

})

When("The user click on dropdown list",()=>{
   moveTemplateAction.clickOnDropDownList()

})

When("The user select any list",()=>{
   moveTemplateAction.selectAnyList()

})

When("The user click on move button",()=>{
   moveTemplateAction.clickOnMoveButtton()

})


Then("The user should moving the card successfully",()=>{
    moveTemplateAssertion.checkMovingTemplateCard()
})


after(() => {
    dataUtil.deleteBoard(boardId)
})