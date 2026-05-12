const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrderDetails = sequelize.define('OrderDetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    style: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    yarnCount: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    yarnBrand: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    yarnLot: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lycraCount: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lycraBrand: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lycraLot: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    polyStarCount: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    polyStarBrand: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    polyStarLot: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mc_DIA: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    e_DIA: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    f_GSM: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    colour: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'OrderDetails',
    timestamps: false,
  });

  return OrderDetails;
};
