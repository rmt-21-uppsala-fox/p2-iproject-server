const { Restaurant, Menu } = require("../models");

class Controller {
  static async getAllMenuRestaurant(req, res, next) {
    try {
      const RestaurantId = req.params.restaurantId;
      const isResto = await Restaurant.findByPk(RestaurantId);
      if (!isResto) {
        throw {
          code: 404,
          name: "Not Found",
          message: "Restaurant not found",
        };
      }

      const { page, size, filter, search } = req.query;
      console.log(filter, search);
      let option;
      let set = 0;
      if (page > 1) {
        set = +size * (+page - 1);
      }

      if (!page) {
        option = {
          where: {
            RestaurantId,
          },
          order: [["id", "ASC"]],
        };
      } else {
        if (!filter && !search) {
          option = {
            where: {
              RestaurantId,
            },
            limit: +size,
            offset: +set,
            order: [["id", "ASC"]],
          };
        } else {
          if (!filter) {
            option = {
              where: { title: { [Op.iLike]: `%${search}%` }, RestaurantId },
              limit: +size,
              offset: +set,
              order: [["id", "ASC"]],
            };
          } else if (!search) {
            option = {
              where: { CategoryId: filter, RestaurantId },
              limit: +size,
              offset: +set,
              order: [["id", "ASC"]],
            };
          } else {
            option = {
              where: { title: { [Op.iLike]: `%${search}%` }, CategoryId: filter, RestaurantId },
              limit: +size,
              offset: +set,
              order: [["id", "ASC"]],
            };
          }
        }
      }
      const menus = await Menu.findAll(option);
      res.status(200).json(menus);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addMenu(req, res, next) {
    try {
      const { name, description, price, CategoryId } = req.body;
      const image = req.file.path;
      const menu = await Menu.create({
        name,
        description,
        price,
        image,
        RestaurantId: req.params.restaurantId,
        CategoryId,
      });
      res.status(201).json(menu);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateMenu(req, res, next) {
    try {
      const { name, description, price, CategoryId } = req.body;
      const image = req.file.path;
      const menu = await Menu.update(
        {
          name,
          description,
          price,
          image,
          CategoryId,
        },
        {
          where: { id: req.params.menuId },
        }
      );
      const newMenu = await Menu.findByPk(req.params.menuId);
      res.status(200).json(newMenu);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteMenu(req, res, next) {
    try {
      const menu = await Menu.findByPk(req.params.menuId);
      if (!menu) {
        throw {
          code: 404,
          name: "Not Found",
          message: "Menu not found",
        };
      }
      const destroymenu = await Menu.destroy({
        where: { id: req.params.menuId },
      });
      res.status(200).json({
        message: `Menu with id ${menu.id} successfully deleted`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
