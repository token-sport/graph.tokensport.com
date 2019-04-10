const { gql } = require('apollo-server-express');

module.exports = gql`
  type Dt {
    _id: ID
    name: String!
    photo: String
    country: String!
    team: Team
    role: String!
    reactions: [Reaction]
    editedBy: Staff
  }
`;