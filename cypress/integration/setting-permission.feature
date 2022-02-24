Feature: Setting/ Permission module

    Background:
        Given Login user fleet to CC

    # Scenario: 01. Verify UI permission module
    #     Given Open "Permission" pages
    #     Then Get info header row and total rows in view list matching with
    #         | headerRow                                             | rows                                                                                                                                                |
    #         | {"Name":"Name","Status":"Status","Actions":"Actions"} | [{"Name":"Permission 01","Status":"Inactive","Actions":"EditActivateDelete"},{"Name":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    # Scenario: 02. Verify search permission
    #     Given Open "Permission" pages
    #     When User input data search with data
    #         | search |
    #         | 01     |
    #     Then Get info header row and total rows in view list matching with
    #         | headerRow                                             | rows                                                                          |
    #         | {"Name":"Name","Status":"Status","Actions":"Actions"} | [{"Name":"Permission 01","Status":"Inactive","Actions":"EditActivateDelete"}] |

    # Scenario: 03. Verify open form add permission
    #     Given Open "Permission" pages
    #     When User click "Add" button
    #     Then User can see "Add permission" form

    Scenario: 04. Verify add permission: operator add new permission
        Given Open "Permission" pages
        When User click "Add" button
        And User select full permission with data
            | name    |
            | Test 01 |
        And The screen show notification message with data
            | message                                      |
            | New permission has been created successfully |
        Then Get info header row and total rows in view list matching with
            | headerRow                                             | rows                                                                                                                                                                                                                |
            | {"Name":"Name","Status":"Status","Actions":"Actions"} | [{"Name":"Test 01","Status":"Active","Actions":"EditDeactivate"},{"Name":"Permission 01","Status":"Inactive","Actions":"EditActivateDelete"},{"Name":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |


    Scenario: 04. Verify add permission: operator add permission was exist
        Given Open "Permission" pages
        When User click "Add" button
        And User select full permission with data
            | name    |
            | Test 01 |
        And The screen show notification message with data
            | message                                                                    |
            | Your permission name has been existed on system. Please input another one. |
