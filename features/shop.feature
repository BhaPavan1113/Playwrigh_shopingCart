Feature: Shopping Cart
    Scenario Outline: End to end testing of shopping cart
        Given User is on the login page
        When User enters the "<username>" and "<password>" and clicks on login button
        When User adds the "<productName>" to the cart
        Then User should be able to the "<productName>"  checkout the product and place the order successfully

        Examples:
            | username               | password  | productName   |
            | bhapavan1113@gmail.com | Bala@1234 | iphone 13 pro |