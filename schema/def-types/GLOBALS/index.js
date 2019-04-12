const { gql } = require('apollo-server-express');

module.exports = gql`
  type Position {
    shortName: String!
    longName: String!
  }

  input NewPosition {
    shortName: String!
    longName: String!
  }
`;
