const Place = require('../models/Place.model');
const jwt = require('jsonwebtoken')

module.exports.placeController = {

  postPlace: async (req, res) => {
    try {
      if(!req.headers.authorization) {
        return res.json('Нет прав доступа')
      }
      const token = req.headers.authorization.split(' ')[1];
      const user = await jwt.verify(token, process.env.JWT_SECRET);
      if(!user.isAdmin) {
        return res.json('Нет прав доступа')
      }
      const newPlace = await Place.create({
        author: user.id,
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
      res.json(newPlace)
    } catch (e) {
      res.json(e);
    }
  }

}