const UserModel = require('../../../models/user.model');
exports.result = () => {
    const users = UserModel.find().exec();
    if (!users) {
        throw new Error('Error');
    }
    return users;
}