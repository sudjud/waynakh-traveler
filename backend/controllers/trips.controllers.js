const Trip = require('../models/Trip.model')
import jwt from 'jsonwebtoken'
module.exports = tripController =  {
  postTrip: async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const userId = await jwt.verify(token, process.env.JWT_SECRET).id;
      const newTrip = await Trip.create({
        author: userId,
        ...req.body
      })
      res.json(newTrip)
    } catch (error) {
      res.json(error)
    }
  },

  getTrips: async (req, res) => {
    try {
      const trips = await Trip.find({})
      res.json(trips)
    } catch (error) {
      res.json(error)
    }
  },

  getTrip: async (req, res) => {
    try {
      const trip = await Trip.findById(req.params.id)
    res.json(trip)
    } catch (error) {
      res.json(error)
    }
  },

  deleteTrip: async (req, res) => {
    try {
      const newTrip = await Trip.findByIdAndDelete(req.params.id)
    } catch (error) {
      res.json(error)
    }
  },

  updatePlace: async (req, res) => {
    try {
      const newTrip = await Trip.findByIdAndUpdate(req.params.id, {
        ...req.body
    })
    } catch (error) {
      res.json(error)
    }
  }

}