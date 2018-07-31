const GraphQLEnumType = require('graphql').GraphQLEnumType;

exports.country = new GraphQLEnumType({
    name: 'Country',
    description: "Available countries to register",
    values: {
        BR: {
            value: "BR",
            description: "Brazil"
        },
        US: {
            value: "US",
            description: "United States"
        }
    }
});