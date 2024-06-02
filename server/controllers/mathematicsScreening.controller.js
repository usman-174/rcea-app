const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const mathematicsScreening = require('../models/mathematicsScreening')

const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
         const {  student_section, grade, type,  } = req.body
          if (!student_section || !grade || !type ) {
            return res.status(400).json({
              error: 'Please fill required  fields',
            })
          }
      await mathematicsScreening
        .find({type:type})
        .populate({ path: 'pupil_id', 
         match: {  $and: [ {student_section:student_section},{grade:grade} ] },

     options: { 
      retainNullValues: false 
    }
      })
        .then(async (Screen) => {
         const filterScreen = await Screen.filter(post => post.pupil_id !== null);
          res.send(filterScreen)
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

      mathematicsScreening.findById(id)
        .populate({ path: 'pupil_id' })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot mathematicsScreening with ${id}. Maybe mathematicsScreening not found!`,
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
  create: catchAsync(async (req, res) => {
    const data = req.body;

    try {
      const updateOperations = data.map(async (item) => {
        const { pupil_id, type } = item;

        const result = await mathematicsScreening.findOneAndUpdate(
          { pupil_id, type },
          item,
          { upsert: true, new: true }
        );

        if (!result) {
          throw new Error("Failed to create Past Screen");
        }

        return result;
      });

      const results = await Promise.all(updateOperations);

      res.status(200).json(results);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  // create: catchAsync(async (req, res) => {
  //   try {
  //     const data = req.body
  //     data.forEach((pupil) => {
  //       for (let key in pupil) {
  //         const { pupil_id, type, attempted, correct, errors } = pupil
  //         if (!pupil_id ) {
  //           return res.status(400).json({
  //             error: 'Please fill required  fields',
  //           })
  //         }
  //       }
  //     })

  //     console.log(data);
  //     const NewmathematicsScreening = await mathematicsScreening.insertMany(data)
  //     if (!NewmathematicsScreening) {
  //       return res.status(400).json({ error: 'mathematicsScreening not created ' })
  //     } else {
  //       res.status(200).json(NewmathematicsScreening)
  //     }
  //   } catch (error) {
  //     res.status(400).json({ error: error.message })
  //   }
  // }),

  getbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }

      await mathematicsScreening
        .findById(id)
        .populate({ path: 'pupil_id' })
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: 'Not mathematicsScreening  with id ' + id })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),

  delete: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }
      mathematicsScreening.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            })
          } else {
            res.send({
              message: 'mathematicsScreening is deleted successfully!',
            })
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `mathematicsScreening Dosent exist` })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),
}

module.exports = Controller
