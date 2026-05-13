const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)'),
      field: 'created_at',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'posts',
    timestamps: false,
  });

  return Post;
};
