const {
  gql,
  makeExecutableSchema
} = require('apollo-server-express');

/* RESOLVERS */
const resolvers = require('../resolvers');

/* TYPES */
const rootTypes = require('./def-types');

const rootQuery = gql`
  type Query {
    matchs: String,
  }

  type Mutation {
    createUser(user: NewUser) : User
    createReaction(reaction: NewReaction) : Reaction
    createStaff(staff: NewStaff) : Staff
    createCountry(country: NewCountry) : Country
    createTournament(tournament: NewTournament) : Tournament
    createTeam(team: NewTeam) : Team
    createMatch(match: NewMatch) : Match
    createPlayer(player: NewPlayer) : Player
    createDt(dt: NewDt) : Dt
    createReferee(referee: NewReferee) : Referee
    createEvent(event: NewEvent) : Event
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ rootQuery, ...rootTypes ],
  resolvers
});

module.exports = schema;
