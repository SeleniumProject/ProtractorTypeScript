Feature: User should be able to add a customer & open an account

    Scenario Outline: Create An Account to Collectionetc
        Given I am on XYZ Bank home page
        Then I go to Add Customer screen
        Then I enter <firstName>, <lastName>, <postCode> to create a customer
        Examples:
            | firstName | lastName | postCode |
            | John      | Cena     | 12345    |
            | Trish     | Stratus  | 34567    |

    # Scenario: Open Account
    #     Given I am on Open Account Page
    #     When I select customerName as customer
    #         | customerName |
    #         | John Cena |
    #     And I select currency as "Rupee"
    #     Then I should click on Process to create an account

    Scenario Outline: Create an account for collectionetc
        Given User should be able to navigate to site url
        When User click on My Account link
        When I Enter the Email "rk123@gmail.com"
        And User click on Register button
        When User fill <fname>, <lname>, <add1>, <add2>, <city>, <state>,<zip>,<phone>,<password>,<confirmpass>,<gender>,<bmonth> in register screen
        And I click on Register button
        Examples:
            | email              | fname   | lname | add1    | add2    | city    | state    | zip   | phone        | password | confirmpass | gender | bmonth |
            | rktets12@gmail.com | stephen | Raj   | Street1 | Street2 | Florida | Colorado | 80302 | 970-419-3579 | test123  | test123     | Male   | July   |

#     And I should search with <firstName>
#     Then I should see <firstName>,<lastName>,<postCode> on the grid
#     Then I should be able to delete the customer

