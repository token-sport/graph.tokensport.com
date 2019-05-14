module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    teamUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: 'Photo field must be an valid url format.'
        }
      }
    },
    country: { type: DataTypes.STRING, allowNull: false },
    lineup: { type: DataTypes.STRING, defaultValue: '4-4-3'}
  });

  Team.associate = models => {
    /* N:M Tournament Association */
    Team.belongsToMany(models.Tournament, {
      through: 'teams_tournaments',
      foreignKey: {
        name: 'teamUuid',
        field: 'team_uuid'
      }
    });

    /* 1:N Participant Association */
    Team.hasMany(models.Participant, {
      foreignKey: 'teamUuid'
    })

    /* 1:N Stadium Association */
    Team.belongsTo(models.Stadium, {
      foreignKey: 'stadiumUuid'
    });

    /* 1:1 Match Association */
    Team.hasMany(models.Match, {
      as: 'localTeamFk',
      foreignKey: 'localTeam'
    });

    /* 1:1 Match Association */
    Team.hasMany(models.Match, {
      as: 'awayTeamFk',
      foreignKey: 'awayTeam'
    });
  }

  return Team;
};