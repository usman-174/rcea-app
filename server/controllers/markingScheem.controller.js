const catchAsync = require('../utils/catchAsync')

const MarkingScheem = require('../models/MarkingScheem')
const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { subject, student_section, grade } = req.body;

      if (!student_section || !grade || !subject) {
        return res.status(400).json({
          error: 'Please fill required  fields',
        })
      }

      await MarkingScheem
        .find({ subject, student_section, grade })
        .then(async (response) => {
          return res.status(200).json(response);
        })
        .catch(() => {
          return res.status(400).json({ error: 'Record does not exists' })
        })
    } catch (error) {
      return res.status(400).json({ error: 'An error happened, try again later' });
    }
  }),

  create: catchAsync(async (req, res) => {
    try {
      const data = req.body;
  
      if (!data) {
        return res.status(400).json({
          error: 'Please fill required fields',
        });
      }
  
      const filter = {
        subject: data.subject,
        grade: data.grade,
        student_section: data.student_section,
      };
  
      const update = {
        rows: data.rows,
      };
  
      const options = {
        upsert: true, // Creates a new document if it doesn't exist
        new: true, // Returns the updated document
      };
  
      const createdSchema = await MarkingScheem.findOneAndUpdate(filter, update, options);
  
      if (!createdSchema) {
        return res.status(400).json({ error: 'MarkingScheem not created' });
      } else {
        res.status(200).json(createdSchema);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  

  getbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'Please provide the id' })
      }

      await MarkingScheem
        .findById(id)
        .then((data) => {
          res.send(data)
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: 'Not MarkingScheem  with id ' + id })
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
//       MarkingScheem.findByIdAndUpdate(
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
