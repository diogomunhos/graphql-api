const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLContryType = require('./commons/country.type').country;

exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "Id do objeto User"
            },
            first_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            last_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            username: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },
            born_country: {
                type: new GraphQLNonNull(GraphQLContryType)
            },
            document_number: {
                type: new GraphQLNonNull(GraphQLString)
            },
            birthdate: {
                type: new GraphQLNonNull(GraphQLString)
            }

        }
    }
});