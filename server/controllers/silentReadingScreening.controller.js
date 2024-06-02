const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const silentReadingScreening = require('../models/silentReadingScreening')

const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const {  language,student_section, grade  } = req.body
          if (!student_section || !grade || !language ) {
            return res.status(400).json({
              error: 'Please fill required  fields',
            })
          }
      await silentReadingScreening
        .find({language:language})
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
  create: catchAsync(async (req, res) => {
    const data = req.body;

    try {
      const updateOperations = data.map(async (item) => {
        const { pupil_id, language } = item;

        const result = await silentReadingScreening.findOneAndUpdate(
          { pupil_id, language },
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
  //         const { pupil_id, attempted, correct, errors } = pupil
  //         if (!pupil_id) {
  //           return res.status(400).json({
  //             error: 'Please fill required  fields',
  //           })
  //         }
  //       }
  //     })

  //     const NewsilentReadingScreening = await silentReadingScreening.insertMany(
  //       data
  //     )
  //     if (!NewsilentReadingScreening) {
  //       return res
  //         .status(400)
  //         .json({ error: 'silentReadingScreening not created ' })
  //     } else {
  //       res.status(200).json(NewsilentReadingScreening)
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

      await silentReadingScreening
        .findById(id)
        .populate('Pupil_Table')
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: 'Not silentReadingScreening  with id ' + id })
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
      silentReadingScreening
        .findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            })
          } else {
            res.send({
              message: 'silentReadingScreening is deleted successfully!',
            })
          }
        })
        .catch((error) => {
          return res
            .status(400)
            .json({ error: `silentReadingScreening Dosent exist` })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),
}

module.exports = Controller
