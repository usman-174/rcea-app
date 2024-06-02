const catchAsync = require('../utils/catchAsync')
const Subject = require('../models/subject')
const controller = {
  /**
   *
   * @param {}
   * @returns {succes ,log all record }
   */
  getall: catchAsync((req, res) => {
    try {
      Subject.find()
        .then((Subject) => {
          res.send(Subject)
        })
        .catch(() => {
          return res.status(400).json({ error: 'NO record exist ' })
        })
    } catch (error) {
      console.log('Error ' + error)
      return res.status(400).json({ error: error.message })
    }
  }),

  getdatabyId: catchAsync((req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }

      Subject.findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Update Subject with ${id}. Maybe Subject not found!`,
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

  /// query params

  /**
   *
   * @param {
        subject_name, decription
      }
   * @returns {succes ,log all record }
   */

  create: catchAsync(async (req, res) => {
    try {
      const { subject_name, decription } = req.body

      if (!subject_name || !decription) {
        return res.status(400).json({
          error: 'Please fill required  fields',
        })
      }
      const subject = await Subject.create({
        subject_name: subject_name,
        decription: decription,
      })
      if (!subject) {
        return res.status(500).json({ error: 'Subject not created ' })
      } else {
        res.status(200).json({
          Subject: {
            ...subject._doc,
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
subject_name, decription
      }
   * @returns {succes  }
   */

  updateSubject: catchAsync((req, res) => {
    try {
      const { subject_name, decription } = req.body

      if (!subject_name || !decription) {
        return res.status(400).json({
          error: 'Please fill required  fields',
        })
      }

      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      Subject.findByIdAndUpdate(
        id,
        {
          subject_name: subject_name,
          decription: decription,
        },
        { useFindAndModify: false }
      )
        .then((data) => {
          res.status(400).send(data)
        })
        .catch((error) => {
          res.status(404).send({
            message: `Cannot subject with ${id}. Maybe Subject not found!`,
          })
        })
    } catch (error) {
      console.log('Error ' + error)
      return res.status(400).json({ error: 'Subject not Updated ' })
    }
  }),

  /**
   *
   * @param {
        _id, 
      }
   * @returns {pupipl object }
   */

  getSubjectbyid: catchAsync((req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      Subject.findById(id)
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res.status(404).send({ message: 'Not found subject with id ' + id })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error.message })
    }
  }),

  getbyname: catchAsync(async (req, res) => {
    try {
      const { name } = req.body
      if (!name) {
        return res.status(400).json({ error: 'Please provide the name' })
      }
      const regx = new RegExp('^' + name + '', 'i')

      Subject.find({
        $or: [
          {
            subject_name: regx,
          },
        ],
      })
        .then((result) => {
          return res.status(200).json({ ...result })
        })
        .catch((error) => {
          return res.status(400).json({ error: 'name doesnot exist ' })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng' + error })
    }
  }),

  /**
   *
   * @param {
   * 
        _id
      }
   * @returns {succes  }
   */

  deleteSubjectbyid: catchAsync((req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      Subject.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            })
          } else {
            res.send({
              message: 'Subject is deleted successfully!',
            })
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `Subject Dosent exist` })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),
}

module.exports = controller
