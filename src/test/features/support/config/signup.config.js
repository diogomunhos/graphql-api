class SignupConfig {

    constructor() {
        this.AuthenticationHelper = require('../helpers/authentication.helper');
    }

    getAPIConfiguration() {
        return {
            uri: "/graphql",
            isJSON: true,
            method: "POST",
            headers: this.AuthenticationHelper.getValidAuthorizationHeader()
        }
    }

    getAPIConfigurationWithoutPermission() {
        const seed = require('../../../seeds/data/users.seed');
        const userWithoutPermission = seed.getUserWithoutSignupPermission();
        return {
            uri: "/graphql",
            isJSON: true,
            method: "POST",
            headers: this.AuthenticationHelper.getValidAuthorizationHeaderWithoutPermission(userWithoutPermission)
        }
    }

}

module.exports = new SignupConfig();