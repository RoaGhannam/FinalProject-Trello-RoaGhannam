/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";


//const moveTemplateAction 
//const moveTemplateAssertion 
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
    
    
})

When("The user opens the card",()=>{
    
})

When("The user clicks on menu icon",()=>{
    

})

When("The user clicks on make template",()=>{
   

})
When("The user click on move button",()=>{
   

})

When("The user select suggestion list",()=>{
   

})

Then("The user should moving the card successfully",()=>{
    
})

