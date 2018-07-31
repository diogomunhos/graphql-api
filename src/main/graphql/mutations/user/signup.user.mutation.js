const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const UserType = require('../../types/user.type');
const SignupService = require('../../../services/signup.service');
const GraphQLContryType = require('../../types/commons/country.type').country;

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
            type: new GraphQLNonNull(GraphQLContryType)
        },
        document_number: {
            type: GraphQLString
        },
        birthdate: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const service = new SignupService();
        const response = service.signup(params);
        return response;
    }
}