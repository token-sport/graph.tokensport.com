module.exports = {
  Query: {
    getReactions: (_, { query }, { controllers }) => controllers.reaction.getReactions(query),
    getUserReactions: (_, args, { controllers }) => controllers.reaction.getUserReactions(args),
    getParticipantReactions: (_, args, { controllers }) => controllers.reaction.getParticipantReactions(args)
  },
  Mutation: {
    createReaction: (_, { reaction }, { controllers }) => controllers.reaction.createReaction(reaction)
  }
};