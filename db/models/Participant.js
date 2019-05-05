module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('participant', {
    participantUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validation: {
        isUrl: true
      }
    },
    country: { type: DataTypes.STRING, allowNull: false },
    teamUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: {
        model: 'team',
        key: 'teamUuid'
      }
    },
    roleUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: {
        model: 'participants_role',
        key: 'roleUuid'
      }
    }
  });

  Participant.associate = models => {
    /* N:M Reaction Association */
    Participant.belongsToMany(models.User, {
      through: 'reaction',
      foreignKey: {
        name: 'participantUuid',
        field: 'participant_uuid'
      }
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