module.exports = {
  Query: {
    getParticipants: (_, { query }, { controllers }) => controllers.participant.getParticipants(query),
    findParticipant: (_, { uuid }, { controllers }) => controllers.participant.findParticipant(uuid),
    getParticipantRoles: (_, { query }, { controllers }) => controllers.participant.getParticipantRoles(query)
  },
  Mutation: {
    createParticipant: (_, { participant }, { controllers }) => controllers.participant.createParticipant(participant),
    createParticipantRole: (_, { participantRole }, { controllers }) => controllers.participant.createParticipantRole(participantRole)
  }
};