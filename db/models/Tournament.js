module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('tournament', {
    tournamentUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'Photo field must be an valid url format.'
        }
      }
    },
    country: { type: DataTypes.STRING, allowNull: false },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Not defined Yet!'
    },
    state: {
      type: DataTypes.ENUM('INACTIVE', 'INPROGRESS', 'PLAYED'),
      defaultValue: 'INACTIVE',
      allowNull: false
    }
  });

  Tournament.associate = models => {
    /* N:M Team Association */
    Tournament.belongsToMany(models.Team, {
      through: 'teams_tournaments',
      foreignKey: {
        name: 'tournamentUuid',
        field: 'tournament_uuid'
      }
    });

    /* 1:N Match Association */
    Tournament.hasMany(models.Match, {
      foreignKey: 'tournamentUuid'
    })
  };

  return Tournament;
};