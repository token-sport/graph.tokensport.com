module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('match', {
    matchUuid : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    date: { type: DataTypes.DATE, allowNull: false },
    state: {
      type: DataTypes.ENUM('INACTIVE', 'INPROGRESS', 'PLAYED'),
      allowNull: false
    },
    assistants: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    localScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    awayScore: {
      type: DataTypes.INTEGER,
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

    /* 1:N Reaction Association */
    Match.hasMany(models.Reaction, {
      foreignKey: 'matchUuid'
    });

    /* 1:N Tournament Association */
    Match.belongsTo(models.Tournament, {
      foreignKey: 'tournamentUuid'
    });

    /* 1:1 Team Association */
    Match.belongsTo(models.Team, {
      as: 'localTeamFk',
      foreignKey: 'localTeam'
    });

    /* 1:1 Team Association */
    Match.belongsTo(models.Team, {
      as: 'awayTeamFk',
      foreignKey: 'awayTeam'
    });
  };

  return Match;
};
