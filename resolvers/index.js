const { NotFoundError } = require('../customErrors');
const debug = require('debug')('graph.tokensport.com');

/* Main resolver Object:
Put Querys and Mutations handlers here */
const resolvers = {
  Query: {
    getAllMatches: (_, args, context) => context.controllers.match.getAllMatches(),
    getMatches: (_, args, context) => context.controllers.match.getMatches(args.query)
  },
  Mutation: {
    createUser: (_, args, context) => context.controllers.user.createUser(args.user),
    createReaction: (_, args, context) => context.controllers.user.createReaction(args.reaction),
    createStaff: (_, args, context) => context.controllers.staff.createStaff(args.staff),
    createCountry: (_, args, context) => context.controllers.staff.createCountry(args.country),
    createTournament: (_, args, context) => context.controllers.staff.createTournament(args.tournament),
    createTeam: (_, args, context) => context.controllers.staff.createTeam(args.team),
    createMatch: (_, args, context) => context.controllers.staff.createMatch(args.match),
    createPlayer: (_, args, context) => context.controllers.staff.createPlayer(args.player),
    createDt: (_, args, context) => context.controllers.staff.createDt(args.dt),
    createReferee: (_, args, context) => context.controllers.staff.createReferee(args.referee),
    createEvent: (_, args, context) => context.controllers.staff.createEvent(args.event)
  }
};

module.exports = resolvers;
