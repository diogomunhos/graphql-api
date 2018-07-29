class SeedGenerator {
    constructor() {
        this.UserModel = require('../../main/models/user.model');
    }

    async init() {
        await this.createUser();
    }

    async createUser() {
        const user_to_load = require('../seeds/data/users.seed').getActiveUser();
        const user_to_load_2 = require('../seeds/data/users.seed').getInactiveUser();
        const bcrypt = require('bcrypt');
        user_to_load.password = bcrypt.hashSync(user_to_load.password, 10);
        user_to_load_2.password = bcrypt.hashSync(user_to_load_2.password, 10);
        let uModel = new this.UserModel(user_to_load);
        let user = await uModel.save();
        uModel = new this.UserModel(user_to_load_2);
        user = await uModel.save();
    }
}

module.exports = new SeedGenerator();