Feature: Verify UI of Setting/ Fleet info module

  Background:
    Given Login user fleet to CC

  Scenario: Verify fleet info
    Given Open "Fleet info" pages
    Then Get fleet info matching with
      | name                     | phonenume    | email                      | country       | timeZone         | address                              | website          | currency | unit |
      | Pepsi That's What I Like | +12056584579 | qup.nghiahuynh05@gmail.com | United States | America/Santiago | Smastrandgaten 3, 5014 Bergen, Na Uy | http://gojo.asia | USD      | km   |