module.exports = {
  Query: {
    getAllUsers: (_, args, context) => context.controllers.user.getAllUsers()

  },
  Mutation: {
    createUser: (_, args, context) => context.controllers.user.createUser(args.user)
  }
};