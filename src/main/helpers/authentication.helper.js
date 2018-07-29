class AuthenticationHelper {
    constructor(token) {
        this.token = token
        this.primary_key = process.env.SECURE_KEY.split(",")[0];
        this.secundary_key = process.env.SECURE_KEY.split(",")[1];
    }

    isValid() {
        this.isAuthenticationValid();
        this.formatAuthentication();
        this.isTokenValid();
    }
    isAuthenticationValid() {
        if (this.token === undefined || this.token.indexOf("Bearer") === -1 || this.token.indexOf(" ") === -1) {
            throw new Error("invalid signature");
        }
    }

    formatAuthentication() {
        this.token = this.token.split(' ')[1];
    }

    isTokenValid() {
        if (this.token === undefined || this.token === "") {
            throw new Error("invalid signature");
        }
    }

    decodeToken() {
        const jwt = require('jsonwebtoken');
        jwt.verify(this.token, this.primary_key, (err, decoded) => {
            this.setDecoded(decoded || err);
        });
    }

    setDecoded(decoded) {
        this.decoded = decoded;
    }

    getDecodedToken() {
        return this.decoded;
    }

    isDecodedTokenValid() {
        if (this.decoded.message !== undefined || this.decoded.user === undefined) {
            throw new Error("invalid signature");
        }
    }

    hasUser(user) {
        if (user.length === 0 || user === undefined) {
            throw new Error("User not found");
        }
    }

    isActiveUser(user) {
        if (user.is_active === false) {
            throw new Error("User inactive");
        }
    }

}

module.exports = AuthenticationHelper;