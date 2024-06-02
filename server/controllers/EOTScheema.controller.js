const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const EOTScheema = require('../models/EOTScheema')
const Controller = {
 getall: catchAsync(async (req, res) => {
    try {
      const { subject, student_section, grade  } = req.body
          if (!student_section || !grade || !subject ) {
            return res.status(400).json({
              error: 'Please fill required  fields',
            })
          }
      await EOTScheema
        .find({subject:subject})
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
    try {
const data = req.body
    //  const {pupil_id } = req.body
   
    //  if (!pupil_id ) {
    //         return res.status(400).json({
    //           error: 'Please fill required  fields' + pupil_id  ,
    //         })
    //       }
         if (!data ) {
            return res.status(400).json({
              error: 'Please fill required  fields',
            })
          }
      const NewEOTScheema = await EOTScheema.create(
       data
      )
      if (!NewEOTScheema) {
        return res
          .status(400)
          .json({ error: 'EOTScheema not created ' })
      } else {
        res.status(200).json(NewEOTScheema)
      }
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }),

  getbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }

      await EOTScheema
        .findById(id)
        .populate({ path: 'pupil_id' })
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: 'Not EOTScheema  with id ' + id })
        })
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'backend exception handelng ' + error })
    }
  }),

 


//    update: catchAsync((req, res) => {
//     try {
//       const { subject,language, grade, student_section, itemNumber, questionNumber, topic,subTopic ,marks} =
//         req.body

//       if (
//         !subject ||
//         !grade ||
//         !student_section ||
//         !itemNumber ||
//         !subTopic ||
//         !marks ||
//         !questionNumber ||
//        !language ||
//         !topic
//       ) {
//         return res.status(400).json({
//           error: 'Please fill required  fields',
//         })
//       }

//       const id = req.params.id
//       if (!id) {
//         return res.status(400).json({ error: 'Please provide the id' })
//       }
//       EOTScheema.findByIdAndUpdate(
//         id,
//          {subject:subject,
//           grade:grade,
//         student_section:student_section,
//       itemNumber:itemNumber,
//     questionNumber:questionNumber,
//   topic:topic,
// subTopic:subTopic,
// language:language,
// marks:marks},
//         { useFindAndModify: false }
//       )
//         .then((data) => {
//           res.status(400).send(data)
//         })
//         .catch((error) => {
//           res.status(404).send({
//             message: `Cannot find Record with ${id}. Maybe Record not found!`,
//           })
//         })
//     } catch (error) {
//       console.log('Error ' + error)
//       return res.status(400).json({ error: 'Record not Updated ' })
//     }
//   })
}
module.exports = Controller
