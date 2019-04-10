const { gql } = require('apollo-server-express');

module.exports = gql`
  type Referee {
    _id: ID
    name: String!
    country: String!
    photo: String
    role: Role
    reactions: [Reaction]
    editedBy: Staff
  }
`;
