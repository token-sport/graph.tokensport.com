module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    userUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: { type: DataTypes.STRING, allowNull: false },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    role: {
      type: DataTypes.ENUM('USER','CURATOR', 'STAFF'),
      allowNull: false
    },
    country: { type: DataTypes.STRING, allowNull: false },
    tokens: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
  });

  User.associate = models => {
    /* N:M Match Association */
    User.belongsToMany(models.Match, {
      through: 'matches_users',
      foreignKey: {
        name: 'userUuid',
        field: 'user_uuid'
      }
    });

    /* N:M Reaction Association */
    User.belongsToMany(models.Participant, {
      through: 'reaction',
      foreignKey: {
        name: 'userUuid',
        field: 'user_uuid'
      }
    });

    /* 1:N Team Association */
    User.belongsTo(models.Team, {
      foreignKey: 'teamUuid'
    });

    /* 1:N Tournament Association */
    User.belongsTo(models.Tournament, {
      foreignKey: 'tournamentUuid'
    });
  };

  return User;
};