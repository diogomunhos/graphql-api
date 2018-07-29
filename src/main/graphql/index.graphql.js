const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const queryType = require('./queries/index.query').queryType;
const mutation = require('./mutations/index.mutation');

exports.customSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})