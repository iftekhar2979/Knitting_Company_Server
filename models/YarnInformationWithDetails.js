const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const YarnInformationWithDetails = sequelize.define('YarnInformationWithDetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    yarnInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    returnQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    westQuantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    vechileNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    deliveredBy: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
      field: 'created_at',
    },
  }, {
    tableName: 'yarn_information_with_details',
    timestamps: false,
  });

  return YarnInformationWithDetails;
};
