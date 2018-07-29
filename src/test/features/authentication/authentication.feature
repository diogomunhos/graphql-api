Feature: Authentication scenarios in graphql API
   Feature Description: I should be able to authenticate the requests in graphql api


    Scenario: Try to authenticate with inactive user
        Given I trying to access the private graphql API with an inactive user
        When I send the request to graphql API
        Then I should got a 401 status code and a message: "User inactive"

    Scenario: Try to authenticate with no token type
        Given I trying to access the private graphql API
        And as I don't have an user, I put just a Bearer on Authorization Header
        When I send the request to graphql API
        Then I should got a 401 status code and a message: "invalid signature"

    Scenario: Try to authenticate with invalid authorization format
        Given I trying to access the private graphql API
        And as I have an user, I put a valid token in a wrong format on Authorization Header
        When I send the request to graphql API
        Then I should got a 401 status code and a message: "invalid signature"

    Scenario: Try to authenticate with invalid bearer format
        Given I trying to access the private graphql API
        And as I have an user, I put an invalid bearer format and a valid token on Authorization Header
        When I send the request to graphql API
        Then I should got a 401 status code and a message: "invalid signature"
        
    Scenario: Try to authenticate with invalid token
        Given I trying to access the private graphql API
        And as I don't have an user, I put an invalid token on Authorization Header
        When I send the request to graphql API
        Then I should got a 401 status code and a message: "invalid signature"

    Scenario: Try to authenticate with no Authorization Header
        Given I trying to access the private graphql API
        And as I don't have an user, I don't put anything in header
        When I send the request to graphql API
        Then I should got a 401 status code and a message: "invalid signature"



    
