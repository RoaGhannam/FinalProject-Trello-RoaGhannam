Feature: Create a card template

Scenario: Validate that the user can create a new card template
    Given The user navigates to the board
    And The user opens the card
    And The user clicks on menu icon
    And The user clicks on make template
    Then The template should be created successfully
