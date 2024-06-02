const catchAsync = require('../utils/catchAsync')
const Student = require('../models/students')
const controller = {
  /**
   *
   * @param {}
   * @returns {succes ,log all record }
   */
  getall: catchAsync((req, res) => {
    try {
      Student.find()
        .then((Student) => {
          res.send(Student)
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

      Student.findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot FIND Student with ${id}. `,
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
      const { email, role, firstName, lastName, password } = req.body

      if (!email || !firstName || !password || !lastName || !role) {
        return res.status(400).json({
          error: 'Please fill required  fields',
        })
      }
      const student = await Student.create({
        role: role,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
      })
      if (!student) {
        return res.status(500).json({ error: 'Student not created ' })
      } else {
        res.status(200).json({
          Student: {
            ...student._doc,
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
      Student.findByIdAndUpdate(
        id,
        {
          role: role,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
        },
        { useFindAndModify: false }
      )
        .then((data) => {
          res.status(400).send(data)
        })
        .catch((error) => {
          res.status(404).send({
            message: `Cannot find Student with ${id}. Maybe Student not found!`,
          })
        })
    } catch (error) {
      console.log('Error ' + error)
      return res.status(400).json({ error: 'Student not Updated ' })
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
      Student.findById(id)
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res.status(404).send({ message: 'Not found Student with id ' + id })
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

      Student.find({
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
      Student.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            })
          } else {
            res.send({
              message: 'Student is deleted successfully!',
            })
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `Student Dosent exist` })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),
}

module.exports = controller
