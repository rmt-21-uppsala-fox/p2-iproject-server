"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GamesCollection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GamesCollection.belongsTo(models.User);
      GamesCollection.belongsTo(models.Game);
    }
  }
  GamesCollection.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      GameId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Games",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "GamesCollection",
    }
  );
  return GamesCollection;
};
