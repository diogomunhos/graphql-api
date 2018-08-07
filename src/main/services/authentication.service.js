class AuthenticationService {
    constructor() {
        this.AuthenticationHelper = require('../helpers/authentication.helper');
        this.UserRepository = require('../repositories/user.repository');
        this.context = {};
    }

    async verify(token) {
        try {
            const AuthenticationHelper = new this.AuthenticationHelper(token);
            AuthenticationHelper.isValid();
            AuthenticationHelper.decodeToken();
            AuthenticationHelper.isDecodedTokenValid();
            const user = await this.UserRepository.getUserByUsername(AuthenticationHelper.getDecodedToken().user.username);
            AuthenticationHelper.hasUser(user);
            AuthenticationHelper.isActiveUser(user[0]);
            this.setContext(user[0]);
            return { isSuccessful: true }
        } catch (err) {
            return { isSuccessful: false, message: err.message }
        }
    }

    getContext() {
        return this.context;
    }

    setContext(context) {
        this.context = context;
    }
}

module.exports = AuthenticationService;