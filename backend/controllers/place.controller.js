const Place = require('../models/Place.model');
const jwt = require('jsonwebtoken')

module.exports.placeController = {

  postPlace: async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const userId = await jwt.verify(token, process.env.JWT_SECRET).id;
      const newPlace = await Place.create({
        author: userId,
        ...req.body
      })
      res.json(newPlace)
    } catch (e) {
      res.json(e);
    }
  },

  getPlaces: async (req, res) => {
    try {
      const places = await Place.find({});
      res.json(places);
    } catch (e) {
      res.json(e);
    }
  },

  getPlace: async (req, res) => {
    try {
      const place = await Place.findById(req.params.id);
      res.json(place);
    } catch (e) {
      res.json(e);
    }
  },

  deletePlace: async (req, res) => {
    try {
      const newPlace = await Place.findByIdAndDelete(req.params.id);
      res.json(newPlace);
    } catch (e) {
      res.json(e)
    }
  },

  updatePlace: async (req, res) => {
    try {
      const newPlace = await Place.findByIdAndUpdate(req.params.id, {
        ...req.body
      });
    } catch (e) {
      res.json(e);
    }
  }

}