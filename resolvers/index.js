const { NotFoundError } = require('../customErrors');
const debug = require('debug')('graph.tokensport.com');

/* Main resolver Object:
Put Querys and Mutations handlers here */
const resolvers = {
  Query: {
    getAllUsers: (_, args, context) => context.controllers.user.getAllUsers()
  },
  Mutation: {
    createUser: (_, args, context) => context.controllers.user.createUser(args.user)
  }
};

module.exports = resolvers;
