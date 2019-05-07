const { makeExecutableSchema } = require('apollo-server-express');

/* RESOLVERS */
const resolvers = require('./resolvers');

/* TYPES */
const rootTypes = require('./def-types');


const schema = makeExecutableSchema({
  typeDefs: rootTypes,
  resolvers
});

module.exports = schema;
