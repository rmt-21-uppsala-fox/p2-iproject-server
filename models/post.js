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
        Post.belongsTo(models.User, { foreignKey: "totalLike" }),
        Post.belongsTo(models.Category, { foreignKey: "categoryId" });
        Post.belongsToMany(models.User, {through: models.Comment, foreignKey: "PostId"})

    }
  }
  Post.init(
    {
      imgUrl: DataTypes.STRING,
      caption: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      totalLike: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
