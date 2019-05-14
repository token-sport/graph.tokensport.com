module.exports = {
  Query: {
    getTeams: (_, { query }, { controllers }) => controllers.team.getTeams(query),
    findTeam: (_, { uuid }, { controllers }) => controllers.team.findTeam(uuid)
  },
  Mutation: {
    createTeam: (_, { team }, { controllers }) => controllers.team.createTeam(team)
  }
};