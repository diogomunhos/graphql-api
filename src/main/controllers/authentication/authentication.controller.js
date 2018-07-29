class AuthenticationController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.AuthenticationService = require('../../services/authentication/authentication.service');
    }

    async verify() {
        const service = new this.AuthenticationService();
        const response = await service.verify(this.req.get('Authorization'));
        if (!response.isSuccessful) {
            this.res.status(401).send({ message: response.message });
        } else {
            this.next();
        }
    }
}

module.exports = AuthenticationController;