module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define('reaction', {
    reactionUuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    type: { type: DataTypes.ENUM('BOO', 'CLAP'), allowNull: false }
  });


  Reaction.associate = models => {
    /* N:M User Association */
    Reaction.belongsToMany(models.User, {
      through: 'reactions_users',
      foreignKey: {
        name: 'reactionUuid',
        field: 'reaction_uuid'
      }
    });

    /* 1:N Participant Association */
    Reaction.belongsTo(models.Participant, {
      foreignKey: 'participantUuid'
    });

    /* 1:N Match Association */
    Reaction.belongsTo(models.Match, {
      foreignKey: {
        name: 'matchUuid',
        field: 'match_uuid'
      }
    });
  };

  return Reaction;
};