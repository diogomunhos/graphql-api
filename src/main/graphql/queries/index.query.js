const { GraphQLList, GraphQLObjectType } = require('graphql/type/definition')
const userType = require('../types/user.type').userType;
const userQuery = require('./user/user.query');
const resolveWithObjectPermission = require('../resolvers/has-permission.resolver').resolveWithObjectPermission;

exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: resolveWithObjectPermission("user", "read", userQuery.result(), (result) => {
                    return result;
                })
            }
        }
    }
});