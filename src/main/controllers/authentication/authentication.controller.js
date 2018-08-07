class AuthenticationController {
    constructor() {
        const AuthenticationService = require('../../services/authentication.service');
        this.service = new AuthenticationService();
    }

    async verify(req, res, next) {
        const response = await this.service.verify(req.get('Authorization'));
        if (!response.isSuccessful) {
            res.status(401).send({ message: response.message });
        } else {
            next();
        }
    }

    getContext() {
        return this.service.getContext();
    }

    setDevContext() {
        const admin = require('../../../test/seeds/data/users.seed').getAdminUser()
        this.service.setContext(admin.user);
    }
}

module.exports = AuthenticationController;