"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "CategoryId" });
      Product.belongsTo(models.Workshop, { foreignKey: "WorkshopId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Name is required",
          },
          notEmpty: {
            args: true,
            msg: "Name is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Description is required",
          },
          notEmpty: {
            args: true,
            msg: "Description is required",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "ImgUrl is required",
          },
          notEmpty: {
            args: true,
            msg: "ImgUrl is required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Price is required",
          },
          notEmpty: {
            args: true,
            msg: "Price is required",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Stock is required",
          },
          notEmpty: {
            args: true,
            msg: "Stock is required",
          },
          min: {
            args: [0],
            msg: "Stock must be at least equal zero",
          },
        },
      },
      WorkshopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "WorkshopId is required",
          },
          notEmpty: {
            args: true,
            msg: "WorkshopId is required",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "CategoryId is required",
          },
          notEmpty: {
            args: true,
            msg: "CategoryId is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
