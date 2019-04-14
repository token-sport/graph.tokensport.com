const { NotFoundError } = require('../customErrors');
const debug = require('debug')('graph.tokensport.com');

/* Main resolver Object:
Put Querys and Mutations handlers here */
const resolvers = {
  Query: {
    getAllMatches: () => [],
  }
};

module.exports = resolvers;
