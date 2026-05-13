const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FabricsType = sequelize.define('FabricsType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fabricsName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
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
    tableName: 'fabrics_types',
    timestamps: false,
  });

  return FabricsType;
};
