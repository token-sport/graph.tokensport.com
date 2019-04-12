const { gql } = require('apollo-server-express');

module.exports = gql`
  type Referee {
    _id: ID
    name: String!
    country: String!
    photo: String
    position: Position!
    reactions: [Reaction]
    editedBy: Staff
  }

  input NewReferee {
    name: String!
    country: String!
    photo: String
    position: NewPosition!
    editedBy: ID
  }
`;
