const { gql } = require('apollo-server-express');

module.exports = gql`
  type Tournament {
    _id: ID
    name: String!
    photo: String!
    season: String!
    state: String!
    teams: [Team!]!
    matchs: [Match!]!
    editedBy: [Staff]!
  }
`;