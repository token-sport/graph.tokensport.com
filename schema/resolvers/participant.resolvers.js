module.exports = {
  Query: {
    getParticipants: (_, args, context) => context.controllers.participant.getParticipants(args.query),
    findParticipant: (_, args, context) => context.controllers.participant.findParticipant(args.uuid),
    getParticipantRoles: (_, args, context) => context.controllers.participant.getParticipantRoles(args.query)
  },
  Mutation: {
    createParticipant: (_, args, context) => context.controllers.participant.createParticipant(args.participant),
    createParticipantRole: (_, args, context) => context.controllers.participant.createParticipantRole(args.participantRole)
  }
};