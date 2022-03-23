"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "UserId" }),
        Post.belongsTo(models.Category, { foreignKey: "categoryId" });
      Post.belongsToMany(models.User, {
        through: models.Comment,
        foreignKey: "PostId",
      });
    }
  }
  Post.init(
    {
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fileLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
