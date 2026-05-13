const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DeliveryDetails = sequelize.define('DeliveryDetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deliveredQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fabricDeliveredQuantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    GrayDeliveredQuantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    billNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
      field: 'created_at',
    },
    deliveredBy: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    colour: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    vechileNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    roleQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'delivery_details',
    timestamps: false,
  });

  return DeliveryDetails;
};
