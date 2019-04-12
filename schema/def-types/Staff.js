const { gql } = require('apollo-server-express');

module.exports = gql`
  type Staff {
    _id: ID
    name: String!
    email: String!
    password: String!
    role: Role!
    country: String!
    photo: String
    coveredMatchs: [Match]
    itemsEdited: [Items]
    tokens: Int
  }

  input NewStaff {
    name: String!
    email: String!
    password: String!
    role: Role!
    country: String!
    photo: String
    tokens: Int
  }
`;