const { gql } = require('apollo-server-express');

module.exports = gql`
  type Reaction {
    _id: ID
    type: ReactionType!
    user: User!
    match: Match!
    player: Player!
  }
`;
