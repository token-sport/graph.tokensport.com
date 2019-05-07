module.exports = {
  Query: {
    getTournament: (_, args, context) => context.controllers.tournament.findTournament(args.uuid),
    getAllTournaments: (_, args, context) => context.controllers.tournament.getAllTournaments()
  },
  Mutation: {
    createTournament: (_, args, context) => context.controllers.tournament.createTournament(args.tournament)
  }
};