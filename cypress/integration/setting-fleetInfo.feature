Feature: Verify UI of Setting/ Fleet info module

  Background:
    Given Login user fleet to CC

  Scenario: abcd
    Given Open "Fleet info" pages
    Then Get fleet info matching with
      | name | phonenume | email | country | timeZone | address | website | currency | unit |
      |1         | 1          |       |         |          |         |         |          |      |