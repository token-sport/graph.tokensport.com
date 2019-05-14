module.exports = {
  Query: {
    getMatches: (_, { query }, { controllers }) => controllers.match.getMatches(query),
    findMatch: (_, { uuid }, { controllers }) => controllers.match.findMatch(uuid)
  },
  Mutation: {
    createMatch: (_, { match }, { controllers }) => controllers.match.createMatch(match)
  }
};