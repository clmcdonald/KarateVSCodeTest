Feature: Testing Karate with VS Code
  Background:
    * url serviceUrl
    * json payload = read('classpath:payload.json')

  Scenario: Test that it gets Karate Config properly
    Given path 'v1', 'test'
    And request payload
    When method post
    Then status 404