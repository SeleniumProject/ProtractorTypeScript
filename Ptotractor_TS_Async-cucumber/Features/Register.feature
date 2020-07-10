Feature: User should be able to create an account and add the product to cart

    Scenario Outline: Register to collectionstec and checkout the product
        Given I am on Collectionsetc Home Page
        When I Click on My Account Menu
        Then I Verify the Title of the Page
        And User enter Email in Email text box <email>
        When I Entered Firstname <fname>
        And I Entered the LastName <lname>
        And I Entered the Address1 <address1>
        And I Entered the Address2 <address2>
        And I Entered the City <city>
        When I Select the State <state>
        And I Entered the Zip Code <zip>
        When I Eneted the Phone Number <phonenumber>
        And I Entered the Password <password>
        And I Entered the confirm Password <confirmPassword>
        When I Select the Gender <gender>
        When I Select the BirthMonth <month>
        And I Click on Register button
        When I Click on Keep the same address button

        When I Enter Product name in search <searchtext>
        And I Click on Search button
        When Click on any Product from list of Products
        And User select the Size Option
        When User add to cart
        And User click on Continue button
        When I Click on Cart Icon
        And I Click on Secure checkout button
        When I Enter Credit Card Info <cardnumber>
        And I Enter the Card Expiry Date <expDate>
        When I Enter the CVV Number <cvv>

        Examples:

            | email             | fname   | lname | address1    | address2    | city       | state    | zip   | phonenumber  | password | confirmPassword | gender | month | searchtext | cardnumber    | expDate | cvv |
            | test124@gmail.com | stephen | Paul  | Paul Street | Jhon Street | california | Colorado | 80202 | 303-200-7180 | test123  | test123         | Male   | July  | Table      | 1234567890123 | 1224    | 123 |
