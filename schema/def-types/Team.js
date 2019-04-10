const { gql } = require('apollo-server-express');

module.exports = gql`
  type Team {
    _id: ID
    name: String!
    photo: String!
    lineup: String!
    stadium: String!
    country: String!
    players: [Player!]!
    dts: [Dt!]!
    tournaments: [Tournament!]!
    matchs: [Match!]!
    editedBy: Staff
  }
`;