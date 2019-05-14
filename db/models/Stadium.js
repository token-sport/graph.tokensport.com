module.exports = (sequelize, DataTypes) => {
  const Stadium = sequelize.define('stadium', {
    stadiumUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false }
  });

  Stadium.associate = models => {
    /* 1:N Team Association */
    Stadium.hasMany(models.Team, {
      foreignKey: 'stadiumUuid'
    });
  };

  return Stadium;
};