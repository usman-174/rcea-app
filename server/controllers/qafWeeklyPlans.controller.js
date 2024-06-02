const catchAsync = require("../utils/catchAsync");

const QafWeeklyPlanModel = require("../models/QafWeeklyPlans");

const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { section, grade, date } = req.body;
      if (!section || !grade || !date) {
        return res.status(400).json({
          error: "Please fill in the required fields",
        });
      }

      await QafWeeklyPlanModel.find({
        section,
        grade,
        date,
      })
        .populate({
          path: "teacher_id",
          options: {
            retainNullValues: false,
          },
        })
        .then(async (screen) => {
          const filteredScreen = await screen.filter(
            (post) => post.teacher_id !== null
          );
          res.send(filteredScreen);
        })
        .catch(() => {
          return res.status(400).json({ error: "No records exist" });
        });
    } catch (error) {
      console.log("Error: " + error);
      return res.status(400).json({ error: "Error in API" });
    }
  }),

  getdatabyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      QafWeeklyPlanModel.findById(id)
        .populate({ path: "teacher_id" })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot QafWeeklyPlans with ${id}. Maybe QafWeeklyPlans not found!`,
            });
          } else {
            res.send(data);
          }
        })
        .catch(() => {
          return res.status(400).json({ error: "NO record exist " });
        });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  create1: catchAsync(async (req, res) => {
    const { result } = req.body;

    try {
      for (const res of result) {
        const filter = { _id: res._id };
        const update = {
          grade: res.grade.toString(),
          section: res.section,
          submitted: res.submitted || false,
          date: res.date,
          teacher_id: res.teacherId,
        };

        const options = { upsert: true, new: true };

        await QafWeeklyPlanModel.findOneAndUpdate(filter, update, options);
      }

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  create: catchAsync(async (req, res) => {
    const { result } = req.body;
  
    try {
      for (const resItem of result) {
        let filter;
  
        if (resItem._id) {
          console.log("Found existing doc");
          filter = { _id: mongoose.Types.ObjectId(resItem._id) };
  
          const existingDocument = await QafWeeklyPlanModel.findOne(filter);
  
          if (existingDocument) {
            console.log("Updating existing doc");
  
            // Update the existing document
            const updatedDocument = await QafWeeklyPlanModel.updateOne(filter, {
              $set: {
                grade: resItem.grade.toString(),
                section: resItem.section,
                submitted: resItem.submitted || false,
                date: resItem.date,
                teacher_id: resItem.teacherId,
              },
            });
  
            console.log("Updated Document:", updatedDocument);
          } else {
            console.log("Document not found for update");
          }
        } else {
          console.log("Creating new doc");
  
          // Create a new document
          await QafWeeklyPlanModel.create({
            _id: mongoose.Types.ObjectId(), // Generate a new ObjectId for new documents
            grade: resItem.grade.toString(),
            section: resItem.section,
            submitted: resItem.submitted || false,
            date: resItem.date,
            teacher_id: resItem.teacherId,
          });
  
          console.log("New Document created");
        }
      }
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  
  getbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      await QafWeeklyPlanModel.findById(id)
        .populate("teacher_id")
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: "Not QafWeeklyPlans  with id " + id });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),

  delete: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }
      QafWeeklyPlanModel.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "QafWeeklyPlanModel is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res
            .status(400)
            .json({ error: `QafWeeklyPlanModel Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = Controller;
