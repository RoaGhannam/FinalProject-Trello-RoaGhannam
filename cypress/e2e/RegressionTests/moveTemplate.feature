Feature: Move template card to any list 

Scenario: Validate that the user can moving the template card to any list
    Given The user navigates to the board
    And The user opens the card
    And The user clicks on menu icon
    And The user clicks on make template
    And The user click on move link 
    And The user click on dropdown list 
    And The user select any list
    And The user click on move button
    Then The user should moving the card successfully
