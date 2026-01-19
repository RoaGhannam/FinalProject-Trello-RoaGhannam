Feature: Delete Card Functionality

  Scenario: Validate that user can delete existing card
    Given The user navigates to the board
    When The user opens the card
    And The user clicks on menu icon
    And The user clicks on archive card button
    And The user clicks on delete card button
    And The user confirms delete card
    Then The card should be deleted successfully