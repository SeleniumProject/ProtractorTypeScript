Feature: User should be able to register to website and checkout a product

   
    Scenario: Create an account for collectionetc
        Given User should be able to navigate to site url
        When User click on My Account link
        When I Enter the Email "steph123@gmail.com"
        And User click on Register button
        When User enter the Firstname "stephen"
        When User enter the Lastname "jhon"
        When User enter the addrone "Street1"
        When User enter the addrtwo "Street2"
        When User enter the city "Florida"
        When User enter the state "Colorado"
        When User enter the zip "80303"
        When User enter the phone "970-419-3579"
        When User enter the password "test123"
        When User enter the confirmpassword "test123"
        When User enter the gender "Male"
        When User enter the month "July"
            
       # When User fill "rktets12@gmail.com", "stephen", "Raj", "Street1", "Florida", "Colorado","80302", "970-419-3579","test123","test123","Male","July"
        And I click on Register button
        When User click on Keep Original button
      
        When User enter the product in search box "table"
        And I Click on Search button
        When I click on table product
        And I click on choose option
        When I Click on Add to Cart
        And I Click on Cart Icon
        When I Click on Secure checkout
        And I Enter the Card Number "123877618468333"
        When I Enter the Expiry Date "1224"
        And I Enter the CVV number "123"
        

