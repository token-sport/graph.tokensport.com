module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('reaction', {
    userUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      reference: {
        model: 'user',
        key: 'userUuid'
      }
    },
    participantUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      reference: {
        model: 'participant',
        key: 'participantUuid'
      }
    },
    type: { type: DataTypes.ENUM('BOO', 'CLAP'), allowNull: false }
  });

  Reaction.associate = models => {
    Reaction.belongsTo(models.Match, {
      foreignKey: 'matchUuid'
    });
  };

  return Reaction;
};