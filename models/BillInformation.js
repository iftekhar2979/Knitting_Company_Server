const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BillInformation = sequelize.define('BillInformation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    billNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
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
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE(6),
      allowNull: true,
      field: 'updated_at',
    },
    containOrders: {
      type: DataTypes.TEXT,
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
    fabricsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'bill_informations',
    timestamps: false,
  });

  return BillInformation;
};
