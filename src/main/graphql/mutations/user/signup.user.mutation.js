const { GraphQLNonNull } = require('graphql/type/definition');
const { GraphQLString } = require('graphql/type/scalars');
const UserType = require('../../types/user.type');
const SignupService = require('../../../services/signup.service');
const GraphQLContryType = require('../../types/commons/country.type').country;
const resolveWithMutationPermission = require('../../resolvers/has-permission.resolver').resolveWithMutationPermission;
exports.signup = {
    type: UserType.userType,
    description: "adsasdasdas",
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
    resolve: (root, params, context) => {
        const service = new SignupService();
        return service.signup(params, context);
    }
}