const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    companyName: {
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
    buyerName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    season: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    programNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    jobNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bookingNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sbNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    orderedDate: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
    },
    targetDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
      field: 'created_at',
    },
    orderQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deliveredQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    restQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE(6),
      allowNull: true,
      field: 'updated_at',
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isBillCreated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isProformaInvoiceCreated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billNumber: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    proformaInvoiceId: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'orders',
    timestamps: false,
  });

  return Order;
};
