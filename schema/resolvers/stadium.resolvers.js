module.exports = {
  Query: {
    getStadium: (_, args, context) => context.controllers.stadium.findStadium(args.uuid)
  },
  Mutation: {
    createStadium: (_, args, context) => context.controllers.stadium.createStadium(args.stadium)
  }
};