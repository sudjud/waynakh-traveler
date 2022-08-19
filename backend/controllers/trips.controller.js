const Trip = require('../models/Trip.model')
const jwt = require("jsonwebtoken")

module.exports.tripController = {

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
      console.log(22);
      res.json(error.toString())
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
      res.json('маршрут удален')
    } catch (error) {
      res.json(error)
    }
  },

  updateTrip: async (req, res) => {
    try {
      const newTrip = await Trip.findByIdAndUpdate(req.params.id, {
        ...req.body
      })
      res.json(newTrip)
    } catch (error) {
      res.json(error)
    }
  }
}
