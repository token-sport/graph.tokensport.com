module.exports = (sequelize, DataTypes) => {
  const Stadium = sequelize.define('stadium', {
    stadiumUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false }
  });

  return Stadium;
};