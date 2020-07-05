Feature: Login

  I want to log into coduit
  @smoke
  Scenario: Opening a social network page
    Given I open open conduit login page
    When I type in
      | username        | password |
      | fenny@fenny.com | John123* |
    Then "Your Feed" should be shown