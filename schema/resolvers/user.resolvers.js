module.exports = {
  Query: {
    getUsers: (_, { query }, { controllers }) => controllers.user.getUsers(query),
    findUser: (_, { email }, { controllers }) => controllers.user.findUser(email),
    getMatchesSubscribed: (_, args, { controllers }) => controllers.user.getMatchesSubscribed(args)
  },
  Mutation: {
    register: (_, { user }, { controllers }) => controllers.user.createUser(user),
    subscribeToMatch: (_, { userUuid, matchUuid }, { controllers }) => controllers.user.subscribeToMatch(userUuid, matchUuid)
  }
};