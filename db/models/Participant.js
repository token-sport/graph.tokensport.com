module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('participant', {
    participantUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'Photo field must be an valid url format.'
        }
      }
    },
    country: { type: DataTypes.STRING, allowNull: false }
  });

  Participant.associate = models => {
    /* 1:N Reaction Association */
    Participant.hasMany(models.Reaction, {
      foreignKey: 'participantUuid'
    });

    /* 1:N ParticipantRole Association */
    Participant.belongsTo(models.ParticipantRole, {
      foreignKey: 'roleUuid'
    });

    /* 1:N Team Association */
    Participant.belongsTo(models.Team, {
      foreignKey: 'teamUuid'
    });
  };

  return Participant;
};