const { gql } = require('apollo-server-express');

module.exports = gql`
  type Reaction {
    _id: ID
    type: ReactionType!
    user: User
    match: Match
    player: Player
  }

  input NewReaction {
    type: ReactionType!
    user: ID!
    match: ID!
    player: ID!
  }
`;
