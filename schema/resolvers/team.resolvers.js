module.exports = {
  Query: {
    getAllTeams: (_, args, context) => context.controllers.team.getAllTeams()
  },
  Mutation: {
    createTeam: (_, args, context) => context.controllers.team.createTeam(args.team)
  }
};