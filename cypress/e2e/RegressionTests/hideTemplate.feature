Feature: Hide a card template

Scenario: Validate that the user can Hide card template
    Given The user navigates to the board
    And The user opens the card
    And The user clicks on menu icon
    And The user clicks on make template
    And The user clicks on hide button
    And The user click on close icon
    Then The card template should be hidden 