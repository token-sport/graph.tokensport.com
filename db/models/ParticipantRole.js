module.exports = (sequelize, DataTypes) => {
  const ParticipantRole = sequelize.define('participantRole', {
    roleUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    role: { type: DataTypes.ENUM('COACH', 'PLAYER', 'REFEREE'), allowNull: false },
    position: { type: DataTypes.STRING, defaultValue: 'Not Define Yet!', unique: true }
  });

  ParticipantRole.association = models => {
    /* 1:N Participant Association */
    ParticipantRole.hasMany(models.Participant, {
      foreignKey: 'roleUuid'
    });
  };

  return ParticipantRole;
};