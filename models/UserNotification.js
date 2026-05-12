const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserNotification = sequelize.define('UserNotification', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    notificationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isViewed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    tableName: 'UserNotification',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['userId', 'notificationId'],
      },
    ],
  });

  return UserNotification;
};
