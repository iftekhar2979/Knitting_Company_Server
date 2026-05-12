const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const YarnInformation = sequelize.define('YarnInformation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ReceivingQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    restQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    yarnType: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descriptionOfYarn: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
    updatedAt: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
  }, {
    tableName: 'yarnInformation',
    timestamps: false,
  });

  return YarnInformation;
};
