const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    role: Role!
    country: String!
    photo: String
    favTeam: Team
    favTournament: Tournament
    reactions: [Reaction]
    matchs: [Match]
    followedMatchs: [Match]
    tokens: Int
  }
`;