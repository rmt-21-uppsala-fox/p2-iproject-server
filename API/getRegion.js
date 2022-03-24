const axios = require("axios");

class GetRegion {
  static async getProvince(req, res, next) {
    try {
      let response = await axios.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  }
  static async getKota(req, res, next) {
    try {
      let id = req.params.id;
      let response = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  }
  static async getKecamatan(req, res, next) {
    try {
      let id = req.params.id;
      let response = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  }
  static async getKelurahan(req, res, next) {
    try {
      let id = req.params.id;
      let response = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GetRegion;
