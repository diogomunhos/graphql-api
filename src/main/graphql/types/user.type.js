const { GraphQLID, GraphQLString } = require('graphql/type/scalars');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql/type/definition');
const GraphQLContryType = require('./commons/country.type').country;
const resolveWithFieldPermission = require('../resolvers/has-permission.resolver').resolveWithFieldPermission;

exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "Id do objeto User"
            },
            first_name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "first_name", "read", (result) => {
                    return result;
                })
            },
            last_name: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "last_name", "read", (result) => {
                    return result;
                })
            },
            email: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "email", "read", (result) => {
                    return result;
                })
            },
            username: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "username", "read", (result) => {
                    return result;
                })
            },
            password: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "password", "read", (result) => {
                    return result;
                })
            },
            born_country: {
                type: new GraphQLNonNull(GraphQLContryType),
                resolve: resolveWithFieldPermission("user", "born_country", "read", (result) => {
                    return result;
                })
            },
            document_number: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "document_number", "read", (result) => {
                    return result;
                })
            },
            birthdate: {
                type: new GraphQLNonNull(GraphQLString),
                resolve: resolveWithFieldPermission("user", "birthdate", "read", (result) => {
                    return result;
                })
            }

        }
    }
});