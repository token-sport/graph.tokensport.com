const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    userUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email field must be an valid email format.'
        }
      }
    },
    password: { type: DataTypes.STRING, allowNull: false },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'Photo field must be an valid url format.'
        }
      }
    },
    role: {
      type: DataTypes.ENUM('USER','CURATOR', 'STAFF'),
      allowNull: false
    },
    country: { type: DataTypes.STRING, allowNull: false },
    tokens: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
  }, {
    indexes: [{
      unique: true,
      fields: ['email']
    }]
  }
  );

  /* MODEL HOOKS */

  /*
   Add a hook for creating
   the hash password before it save Data.
  */
  User.beforeCreate((user) => {
    return bcrypt.hash(user.password, 10)
      .then(pswHash => {
        user.password = pswHash;
      });
  });


  /* MODEL ASSOCIATIONS */
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
    User.belongsToMany(models.Reaction, {
      through: 'reactions_users',
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