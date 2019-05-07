module.exports = (sequelize, DataTypes) => {
  const ParticipantRole = sequelize.define('participant_role', {
    roleUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    role: { type: DataTypes.ENUM('COACH', 'PLAYER', 'REFEREE'), allowNull: false },
    position: { type: DataTypes.STRING, defaultValue: 'Not Define Yet!', unique: true }
  });

  return ParticipantRole;
};