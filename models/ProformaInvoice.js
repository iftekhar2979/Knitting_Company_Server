const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProformaInvoice = sequelize.define('ProformaInvoice', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    style: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fabricsName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fabricsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    finishDia: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    containOrders: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    piName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    piNumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    season: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    billingWay: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
  }, {
    tableName: 'ProformaInvoice',
    timestamps: false,
  });

  return ProformaInvoice;
};
