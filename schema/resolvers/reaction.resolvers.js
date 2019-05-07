module.exports = {
  Query: {

  },
  Mutation: {
    createReaction: (_, args, context) => context.controllers.reaction.createReaction(args.reaction)
  }
};