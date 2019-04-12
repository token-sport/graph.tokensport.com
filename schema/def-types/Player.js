const { gql } = require('apollo-server-express');

module.exports = gql`
  type Player {
    _id: ID
    name: String!
    country: String!
    photo: String
    team: Team!
    dorsal: Int!
    position: Position!
    reactions: [Reaction]
    editedBy: Staff
  }

  input NewPlayer {
    name: String!
    country: String!
    photo: String
    team: ID!
    dorsal: Int!
    position: NewPosition!
    editedBy: ID
  }
`;