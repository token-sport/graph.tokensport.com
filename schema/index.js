const {
  gql,
  makeExecutableSchema
} = require('apollo-server-express');

/* RESOLVERS */
const resolvers = require('../resolvers');

/* TYPES */
const Match = require('./types/Match');

const rootQuery = gql`
  # In this place are all GET endpoints
  type Query {
    matchs: [Match],
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ rootQuery, Match ],
  resolvers
});

module.exports = schema;
