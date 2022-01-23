Feature: Setting/ Permission module

    Background:
        Given Login user fleet to CC

    Scenario: Verify UI permission module
        Given Open "Permission" pages
        Then Get info header row and total rows in view list matching with
            | headerRow                                             | rows                                                                                                                                                  |
            | {"Name":"Name","Status":"Status","Actions":"Actions"} | [{"Name":"Permission 01","Status":"Inactive","Actions":" EditActivateDelete"},{"Name":"Permission 02","Status":"Active","Actions":" EditDeactivate"}] |