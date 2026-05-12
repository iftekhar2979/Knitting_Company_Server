const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Month = sequelize.define('Month', {
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
    tableName: 'Month',
    timestamps: false,
  });

  return Month;
};
