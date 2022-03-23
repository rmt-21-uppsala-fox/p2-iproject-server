const axios = require('axios').default;
const {
  Gallery
} = require('../models');

class GalleryController {
  static async getArt(req, res, next) {
    const {
      owner
    } = req.body
    var options = {
      method: 'GET',
      url: 'https://opensea-data-query.p.rapidapi.com/api/v1/assets',
      params: {
        owner,
        order_direction: 'desc',
        limit: '10',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Host': 'opensea-data-query.p.rapidapi.com',
        'X-RapidAPI-Key': 'ab80179bbamsh0a22c10acf0867fp102d29jsn2017beefc781'
      }
    };

    try {
      const response = await axios.request(options);
      const images = response.data.assets.map((e) => {
        return e.image_url;
      })
      const payload = {
        wallet: owner
      }
      images.forEach((e, i) => {
        payload[`image${i+1}`] = e;
      });
      console.log(payload);
      const gallery = await Gallery.create(payload);
      res.status(200).json(gallery)
    } catch (error) {
      res.status(500).json({
        message: error.response.data
      })
    }
  }

  static async getGallery(req, res, next) {
    const {
      id
    } = req.params
    try {
      const gallery = await Gallery.findByPk(id);
      res.status(200).json(gallery)
    } catch (error) {
      res.status(500).json({
        message: error.response.data
      })
    }
  }

  static async getNewGallery(req, res, next) {
    try {
      const gallery = await Gallery.findAll();
      res.status(200).json(gallery)
    } catch (error) {
      res.status(500).json({
        message: error.response.data
      })
    }
  }

}

module.exports = {
  GalleryController
}