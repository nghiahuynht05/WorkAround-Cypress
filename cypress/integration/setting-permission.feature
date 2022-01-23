Feature: Setting/ Permission module

    Background:
        Given Login user fleet to CC

    Scenario: Verify UI permission module
        Given Open "Permission" pages
        Then Get info header row and total rows in view list matching with
            | headerRow                                             | rows                                                                                                                                                  |
            | {"Status":"Status","Actions":"Actions","Name":"Name"} | [{"Status":"Permission 01","Actions":"Inactive","Name":" EditActivateDelete"},{"Status":"Permission 02","Actions":"Active","Name":" EditDeactivate"}] |