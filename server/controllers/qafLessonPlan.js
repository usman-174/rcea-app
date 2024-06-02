const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const QafLessonPlanModel = require("../models/QafLessonPlan");
const moment = require("moment");
const mongoose = require("mongoose");
const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { section, grade, date } = req.body;
      if (!section || !grade || !date) {
        return res.status(400).json({
          error: "Please fill in the required fields",
        });
      }

      await QafLessonPlanModel.find({
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
          res.json(filteredScreen);
        })
        // 655e26e4fe07ebdbda438c4d
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

      QafLessonPlanModel.findById(id)
        .populate({ path: "teacher_id" })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot QafLessonPlanModel with ${id}. Maybe QafLessonPlanModel not found!`,
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
 
  create: catchAsync(async (req, res) => {
    const { result } = req.body;
  
    try {
      for (const resItem of result) {
        let filter;
  
        if (resItem._id) {
       
          filter = { _id: mongoose.Types.ObjectId(resItem._id) };
  
          const existingDocument = await QafLessonPlanModel.findOne(filter);
  
          if (existingDocument) {
           
  
            // Update the existing document
            const updatedDocument = await QafLessonPlanModel.updateOne(filter, {
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
       await QafLessonPlanModel.create({
            _id: mongoose.Types.ObjectId(), // Generate a new ObjectId for new documents
            grade: resItem.grade.toString(),
            section: resItem.section,
            submitted: resItem.submitted || false,
            date: resItem.date,
            teacher_id: resItem.teacherId,
          });
  
        
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

      await QafLessonPlanModel.findById(id)
        .populate("teacher_id")
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: "Not QafLessonPlanModel  with id " + id });
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
      QafLessonPlanModel.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "QafLessonPlanModel is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res
            .status(400)
            .json({ error: `QafLessonPlanModel Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = Controller;
