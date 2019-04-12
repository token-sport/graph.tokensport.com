const { gql } = require('apollo-server-express');

module.exports = gql`
  type Match {
    _id: ID!
    date: String!
    tournament: Tournament!
    stadium: String!
    state: String!
    assistants: Int
    bettingBoat: Int
    timeline: [Event]
    totalReactions: Int
    reactions: [Reaction]
    localTeamScore: Int
    awayTeamScore: Int
    localTeam: Team!
    awayTeam: Team!
    referees: [Referee]
    createdBy: Staff
    editedBy: Staff
  }

  input NewMatch {
    date: String!
    tournament: ID!
    stadium: String!
    state: String!
    referees: [ID]
    localTeam: ID!
    awayTeam: ID!
    createdBy: ID
  }
`;
