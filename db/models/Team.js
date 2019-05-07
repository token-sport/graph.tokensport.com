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
        isUrl: true
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

    /* N:M Match Association */
    Team.belongsToMany(models.Match, {
      through: 'teams_matches',
      foreignKey: 'teamUuid'
    });

    /* 1:N Stadium Association */
    Team.belongsTo(models.Stadium, {
      foreignKey: 'stadiumUuid'
    });
  }

  return Team;
};