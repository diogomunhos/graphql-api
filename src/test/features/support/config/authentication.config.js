class AuthenticationConfig {

    getAPIConfiguration() {
        return {
            uri: "/graphql",
            isJSON: true,
            method: "POST",
            headers: {}
        }
    }

}

module.exports = new AuthenticationConfig();