const { gql } = require('apollo-server-express');

module.exports = gql`
  type Country {
    _id: ID
    name: String!
    photo: String!
    tournaments: [Tournament!]!
    editedBy: Staff
  }
`;