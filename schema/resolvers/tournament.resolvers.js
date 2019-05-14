module.exports = {
  Query: {
    findTournament: (_, { uuid }, { controllers }) => controllers.tournament.findTournament(uuid),
    getTournaments: (_, { query }, { controllers }) => controllers.tournament.getTournaments(query)
  },
  Mutation: {
    createTournament: (_, { tournament }, { controllers }) => controllers.tournament.createTournament(tournament)
  }
};