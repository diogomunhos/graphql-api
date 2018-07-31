class SignupService {
    constructor() {
        this.SignupHelper = require('../../helpers/signup.helper');
        this.ResponseHelper = require('../../helpers/response.helper');
        this.UserRepository = require('../../repositories/user.repository');
    }

    async signup(signup_request) {
        try {
            const signupHelper = new this.SignupHelper(signup_request);
            signupHelper.isRequestValid();
            signup_request = signupHelper.getRequest();
            const result = await this.UserRepository.getUserByUsername(signup_request.username);
            signupHelper.userExists(result);
            const user = await this.UserRepository.createUser(signup_request);
            return user;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = SignupService