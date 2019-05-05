const {
  gql,
  makeExecutableSchema
} = require('apollo-server-express');

/* RESOLVERS */
const resolvers = require('../resolvers');

/* TYPES */
const rootTypes = require('./def-types');

const rootQuery = gql`
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    createUser(user: NewUser) : User
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ rootQuery, ...rootTypes ],
  resolvers
});

module.exports = schema;
