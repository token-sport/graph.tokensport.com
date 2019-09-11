module.exports = {
  Query: {
    getStadia: (_, { query }, { controllers }) => controllers.stadium.getStadia(query),
    findStadium: (_, { uuid }, { controllers }) => controllers.stadium.findStadium(uuid)
  },
  Mutation: {
    createStadium: (_, { stadium }, { controllers }) => controllers.stadium.createStadium(stadium)
  }
};