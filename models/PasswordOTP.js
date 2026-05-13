const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PasswordOTP = sequelize.define('PasswordOTP', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    otp: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
      field: 'created_at',
    },
  }, {
    tableName: 'password_otps',
    timestamps: false,
    indexes: [
      {
        fields: ['email'],
      },
    ],
  });

  return PasswordOTP;
};
