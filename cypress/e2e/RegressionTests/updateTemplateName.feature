Feature: Update card template name

Scenario: Validate that the user can update card template name
    Given The user navigates to the board
    And The user opens the card
    And The user clicks on menu icon
    And The user clicks on make template
    And The user clear card template name old
    And The user type the new template name 
    Then The template card name should be update 