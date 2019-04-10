const {
  gql,
  makeExecutableSchema
} = require('apollo-server-express');

/* RESOLVERS */
const resolvers = require('../resolvers');

/* TYPES */
const rootTypes = require('./def-types');

const rootQuery = gql`
  # In this place are all GET endpoints
  type Query {
    matchs: String,
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ rootQuery, ...rootTypes ],
  resolvers
});

module.exports = schema;
