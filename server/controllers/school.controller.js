const catchAsync = require('../utils/catchAsync')
const School = require('../models/school')

const schoolController = {
  getall: catchAsync(async (req, res) => {
    School.find()
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch(() => {
        return res.status(400).json({ error: 'No schools found' })
      })
  }),
}

module.exports = schoolController
