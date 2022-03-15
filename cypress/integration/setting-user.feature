Feature: Setting/ User module

    Background:
        Given Login user fleet to CC

    Scenario: 01. Verify UI user module
        Given Open "User" pages
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                                                                                                                                                                                                                           |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"pepsi-operator-01","Name":"HANSEN MOLEE","User#":"5425457","PhoneNumber":"","Email":"qup.nghiahuynh05@gmail.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    Scenario: 02. Verify search user
        Given Open "User" pages
        When User input data search with data
            | search |
            | user01 |
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                  |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    Scenario: 03. Verify open form add user
        Given Open "User" pages
        When User click "Add" button
        And User input data to user form with data
            | username   | firstname | email        | lastname | userId | address | phonenumber | permission    |
            | usertest02 | Test 02   | test@qup.com |          |        |         |             | Permission 02 |
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"usertest02","Name":"Test 02","User#":"","PhoneNumber":"","Email":"test@qup.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"pepsi-operator-01","Name":"HANSEN MOLEE","User#":"5425457","PhoneNumber":"","Email":"qup.nghiahuynh05@gmail.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    Scenario: 04. Verify open form add user: user was exist
        Given Open "User" pages
        When User click "Add" button
        And User input data to user form with data
            | username   | firstname | email        | lastname | userId | address | phonenumber | permission    |
            | usertest02 | Test 02   | test@qup.com |          |        |         |             | Permission 02 |
        And The screen show notification message with data
            | message                                                               |
            | This username already exists on our system. Please enter another one. |

    Scenario: 05. Verify open form edit user
        Given Open "User" pages
        When Select "Edit" of "1" row on actions column
        Then User can see "Edit user" form

    Scenario: 06. Verify deactivate user
        Given Open "User" pages
        When Select "Deactivate" of "1" row on actions column
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"usertest02","Name":"Test 02","User#":"","PhoneNumber":"","Email":"test@qup.com","Permission":"Permission 02","Status":"Inactive","Actions":"EditActivateDelete"},{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"pepsi-operator-01","Name":"HANSEN MOLEE","User#":"5425457","PhoneNumber":"","Email":"qup.nghiahuynh05@gmail.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    Scenario: 07. Verify activate user
        Given Open "User" pages
        When Select "Activate" of "1" row on actions column
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"usertest02","Name":"Test 02","User#":"","PhoneNumber":"","Email":"test@qup.com","Permission":"Permission 02","Status":"Active","Actions":"EditActivate"},{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"pepsi-operator-01","Name":"HANSEN MOLEE","User#":"5425457","PhoneNumber":"","Email":"qup.nghiahuynh05@gmail.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    Scenario: 08.1 Verify delete user: confirm No
        Given Open "User" pages
        When Select "Deactivate" of "1" row on actions column
        And Select "Delete" of "1" row on actions column
        Then Operator can see "Delete user" confirm form with data
            | message                                            | confirm |
            | Are you sure you want to delete the selected user? | No      |
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"usertest02","Name":"Test 02","User#":"","PhoneNumber":"","Email":"test@qup.com","Permission":"Permission 02","Status":"Inactive","Actions":"EditActivateDelete"},{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"pepsi-operator-01","Name":"HANSEN MOLEE","User#":"5425457","PhoneNumber":"","Email":"qup.nghiahuynh05@gmail.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |

    Scenario: 08.2 Verify delete user: confirm Yes
        Given Open "User" pages
        And Select "Delete" of "1" row on actions column
        Then Operator can see "Delete user" confirm form with data
            | message                                            | confirm |
            | Are you sure you want to delete the selected user? | Yes     |
        Then Get info header row and total rows in view list matching with
            | headerRow                                                                                                                                                           | rows                                                                                                                                                                                                                                                                                                                                                                           |
            | {"Username":"Username","Name":"Name","User#":"User #","PhoneNumber":"Phone Number","Email":"Email","Permission":"Permission","Status":"Status","Actions":"Actions"} | [{"Username":"testuser01","Name":"Test","User#":"","PhoneNumber":"","Email":"abc@zing.vn","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"},{"Username":"pepsi-operator-01","Name":"HANSEN MOLEE","User#":"5425457","PhoneNumber":"","Email":"qup.nghiahuynh05@gmail.com","Permission":"Permission 02","Status":"Active","Actions":"EditDeactivate"}] |