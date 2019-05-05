const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    userUuid: ID!
    name: String!
    email: String!
    password: String!
    role: Role!
    country: String!
    photo: String
    favTeam: Team
    favTournament: Tournament
    reactions: [Reaction]
    matches: [Match]
    followedMatches: [Match]
    tokens: Int
  }

  input NewUser {
    name: String!,
    email: String!,
    password: String!,
    role: Role!,
    country: String!
    tokens: Int
  }
`;