const {RootQuery} =require('./queries');


const { GraphQLSchema} = require('graphql');
module.exports = new GraphQLSchema({
    query: RootQuery,
  });