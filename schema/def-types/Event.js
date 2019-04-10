const { gql } = require('apollo-server-express');

module.exports = gql`
  type Event {
    _id: ID
    type: EventType!
    time: String!
    match: Match!
    description: String!
  }
`;