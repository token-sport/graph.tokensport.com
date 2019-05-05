module.exports = `
  enum Role {
    USER
    CURATOR
    STAFF
  }

  enum ReactionType {
    CLAP
    BOO
  }

  enum EventType {
    FOUL
    SUBSTITUTION
    GOAL
    YELLOWCARD
    REDCARD
    PENALTY
    OWNGOAL
    HANDBALL
    INJURYTIME
    OFFSIDE
  }

  enum State {
    INACTIVE
    IN PROGRESS
    PLAYED
  }

  enum Side {
    LOCAL
    AWAY
  }
`;