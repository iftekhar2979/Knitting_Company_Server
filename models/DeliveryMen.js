const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DeliveryMen = sequelize.define('DeliveryMen', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'DeliveryMen',
    timestamps: false,
  });

  return DeliveryMen;
};
