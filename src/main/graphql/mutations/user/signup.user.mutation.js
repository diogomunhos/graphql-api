const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const UserType = require('../../types/user.type');
const SignupService = require('../../../services/authentication/signup.service');

exports.signup = {
    type: UserType.userType,
    args: {
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        born_country: {
            type: GraphQLString
        },
        document_number: {
            type: GraphQLString
        },
        birthdate: {
            type: GraphQLString
        }
    },
    resolve(root, params) {
        const service = new SignupService();
        const response = service.signup(params);
        // const cModel = new CustomerModel(params);
        // const newCustomer = cModel.save();
        // if (!newCustomer) {
        //     throw new Error('Error');
        // }

        return response;
    }
}