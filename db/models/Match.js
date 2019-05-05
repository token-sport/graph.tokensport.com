module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('match', {
    matchUuid : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true
    },
    date: { type: DataTypes.DATE, allowNull: false },
    state: {
      type: DataTypes.ENUM('INACTIVE', 'IN PROGRESS', 'PLAYED'),
      allowNull: false
    },
    assistants: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    localTeamScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    awayTeamScore: {
      type: DataTypes.INTEGER, allowNull: true,
      allowNull: true,
      defaultValue: 0
    }
  });

  Match.associate = models => {
    /* N:M  User Association */
    Match.belongsToMany(models.User, {
      through: 'matches_users',
      foreignKey: {
        name: 'matchUuid',
        field: 'match_uuid'
      }
    });

    /* N:M Team Association */
    Match.belongsToMany(models.Team, {
      through: 'teams_matches',
      foreignKey: 'matchUuid'
    });

    /* 1:N Tournament Association */
    Match.belongsTo(models.Tournament, {
      foreignKey: 'tournamentUuid'
    });
  };

  return Match;
};
