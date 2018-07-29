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

}

module.exports = new SignupConfig();