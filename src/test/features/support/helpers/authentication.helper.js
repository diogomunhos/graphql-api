class AuthorizationHelper {
    constructor() {
        const seed = require('../../../seeds/data/users.seed');
        this.macGyver = seed.getActiveUser();
        this.inactiveMacGyver = seed.getInactiveUser();
        this.jwt = require('jsonwebtoken');
    }

    getValidAuthorizationHeader() {
        const token = this.jwt.sign({ user: this.macGyver }, process.env.SECURE_KEY.split(",")[0]);
        const headers = { "Authorization": `Bearer ${token}` }
        return headers;
    }


    getInactiveUserValidAuthorizationHeader() {
        const token = this.jwt.sign({ user: this.inactiveMacGyver }, process.env.SECURE_KEY.split(",")[0]);
        const headers = { "Authorization": `Bearer ${token}` }
        return headers;
    }

    getInvalidAuthorizationHeader() {
        const token = this.jwt.sign({ user: this.macGyver }, "WrongKey");
        const headers = { "Authorization": `Bearer ${token}` }
        return headers;
    }

    getInvalidBearerAuthorizationHeader() {
        const token = this.jwt.sign({ user: this.macGyver }, "WrongKey");
        const headers = { "Authorization": `bearer ${token}` }
        return headers;
    }

    getInvalidFormatAuthorizationHeader() {
        const token = this.jwt.sign({ user: this.macGyver }, "WrongKey");
        const headers = { "Authorization": `Bearer${token}` }
        return headers;
    }

    getNoTokenAuthorizationHeader() {
        const token = "";
        const headers = { "Authorization": `Bearer ${token}` }
        return headers;
    }




}

module.exports = new AuthorizationHelper();