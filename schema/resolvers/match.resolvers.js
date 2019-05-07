module.exports = {
  Query: {
    findMatches: (_, args, context) => context.controllers.match.getMatches(args.query)
  },
  Mutation: {
    createMatch: (_, args, context) => context.controllers.match.createMatch(args.match)
  }
};