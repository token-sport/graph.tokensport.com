module.exports = (sequelize, DataTypes) => {
  const TeamsMatches = sequelize.define('teams_matches', {
    teamUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      reference: {
        model: 'team',
        key: 'teamUuid'
      }
    },
    matchUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      reference: {
        model: 'match',
        key: 'matchUuid'
      }
    },
    side: { type: DataTypes.ENUM('LOCAL', 'AWAY'), allowNull: false },
    score: { type: DataTypes.INTEGER, defaultValue: 0 }
  });

  return TeamsMatches;
};