const path = require('path')
const Image = require('../models/Image.model');

module.exports.imageController = {
  upload: async (req, res) => {
    const glassesImage = req.files.glassesImage
    const randName = Math.round(Math.random() * 100000000000);
    const uploadPath = path.resolve('uploads', 'images', `${randName}${glassesImage.name}`);
    try {
      glassesImage.mv(uploadPath);
      let newImage = await Image.create({
        name: `${randName}${glassesImage.name}`
      })
      res.json(newImage._id);
    } catch (e) {
      res.json(e);
    }
  }
}