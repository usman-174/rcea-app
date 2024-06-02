const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const SessionType = require('../models/session_type')

const Controller = {
  /**
   *
   * @param {}
   * @returns {succes ,log all record }
   */
  getall: catchAsync(async (req, res) => {
    try {
      SessionType.find()
        .populate({ path: 'student_id', model: 'Students' })
        .then((user) => {
          res.send(user)
        })
        .catch(() => {
          return res.status(400).json({ error: 'NO record exist ' })
        })
    } catch (error) {
      console.log('Error ' + error)
      return res.status(400).json({ error: 'error in api' })
    }
  }),

  getdatabyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      SessionType.findById(id)
        .populate({ path: 'student_id', model: 'Students' })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot SessionType with ${id}. Maybe SessionType not found!`,
            })
          } else {
            res.send(data)
          }
        })
        .catch(() => {
          return res.status(400).json({ error: 'NO record exist ' })
        })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }),


  /**
   *
   * @param {
      pupil_id, enrollment_date, program,
      }
   * @returns {succes ,log all record }
   */

  create: catchAsync(async (req, res) => {
    try {
      const { grade, section, student_id } = req.body

      if (!grade || !section || !student_id) {
        return res.status(400).json({
          error: 'Please fill required  fields',
        })
      }
      const newSessionType = await SessionType.create({
        student_id: student_id,
        section: section,
        grade: grade,
      })
      if (!newSessionType) {
        return res.status(400).json({ error: 'SessionType not created ' })
      } else {
        res.status(200).json({
          user: {
            ...newSessionType._doc,
            createdAt: undefined,
            updatedAt: undefined,
          },
        })
      }
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }),




  /**
   *
   * @param {
        _id, 
      }
   * @returns {pupipl object }
   */

  getbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      SessionType.findById(id)
        .populate({ path: 'student_id', model: 'Students' })
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res.status(404).send({ message: 'Not SessionType  with id ' + id })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),

 

  /**
   *
   * @param {
        _id
      }
   * @returns {succes  }
   */

  delete: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      SessionType.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            })
          } else {
            res.send({
              message: 'SessionType is deleted successfully!',
            })
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `SessionType Dosent exist` })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),
}

module.exports = Controller
