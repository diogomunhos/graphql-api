const GraphQLObjectType = require('graphql').GraphQLObjectType
const GraphQLList = require('graphql').GraphQLList
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const userType = require('../types/user.type').userType;
const userQuery = require('./user/user.query');

exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: () => {
                    return userQuery.result();
                }
            }
        }
    }
});