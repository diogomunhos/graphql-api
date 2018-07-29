const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const AuthentcationConfig = require('../config/authentication.config');
const AuthenticationHelper = require('../helpers/authentication.helper');
let config;

Given('I trying to access the private graphql API with an inactive user', function(callback) {
    config = AuthentcationConfig.getAPIConfiguration();
    config.headers = AuthenticationHelper.getInactiveUserValidAuthorizationHeader();
    this.setAPIConfig(config);
    callback();
})

Given('I trying to access the private graphql API', function(callback) {
    config = AuthentcationConfig.getAPIConfiguration();
    callback();
})

Given('as I don\'t have an user, I put an invalid token on Authorization Header', function(callback) {
    config.headers = AuthenticationHelper.getInvalidAuthorizationHeader();
    this.setAPIConfig(config);
    callback();
})

Given('as I don\'t have an user, I don\'t put anything in header', function(callback) {
    this.setAPIConfig(config);
    callback();
})

Given('as I have an user, I put an invalid bearer format and a valid token on Authorization Header', function(callback) {
    config.headers = AuthenticationHelper.getInvalidBearerAuthorizationHeader();
    this.setAPIConfig(config);
    callback();
})

Given('as I have an user, I put a valid token in a wrong format on Authorization Header', function(callback) {
    config.headers = AuthenticationHelper.getInvalidFormatAuthorizationHeader();
    this.setAPIConfig(config);
    callback();
})

Given('as I don\'t have an user, I put just a Bearer on Authorization Header', function(callback) {
    config.headers = AuthenticationHelper.getNoTokenAuthorizationHeader();
    this.setAPIConfig(config);
    callback();
})

When('I send the request to graphql API', function(callback) {
    this.makeRequest().then((response) => {
        this.setResponse(response);
        callback();
    }).catch((response) => {
        this.setResponse(response);
        callback();
    });
})

Then('I should got a {int} status code and a message: {string}', function(statusCode, message, callback) {
    assert.notEqual(this.getResponse().statusCode, undefined, 'No status code founded, Is this server still running? ');
    assert.equal(this.getResponse().statusCode, statusCode);
    assert.equal(this.getResponse().error.message, message);
    callback();
})