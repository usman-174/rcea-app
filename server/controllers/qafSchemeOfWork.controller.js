const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const QafSchemeOfWork = require("../models/QafSchemeOfWork");
const moment = require("moment");
const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { section, grade, term ,month,year} = req.body;
      if (!section || !grade || !term) {
        return res.status(400).json({
          error: "Please fill in the required fields",
        });
      }

      await QafSchemeOfWork.find({
        section,
        grade,
        term,
        month,year
      })
        .populate({
          path: "teacher",
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
        .catch((e) => {
          return res.status(400).json({ error: "No records exist"});
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

      QafSchemeOfWork.findById(id)
        .populate({ path: "teacher_id" })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot QafSchemeOfWork with ${id}. Maybe QafSchemeOfWork not found!`,
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
      const options = { upsert: true, new: true };

      const teachers = await Promise.all(
        result.map(async (item) => {
          const filter = { _id: item._id };
          const update = {
            grade: item.grade.toString(),
            section: item.section,
            term: parseInt(item.term),
            teacher: item.teacherId,
            scores: item.scores,
            year: parseInt(item.year),
            month : item.month
          };

          const teacher = await QafSchemeOfWork.findOneAndUpdate(
            filter,
            update,
            options
          );
          return teacher;
        })
      );

      res.status(200).json(teachers);
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

      await QafSchemeOfWork.findById(id)
        .populate("teacher_id")
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: "Not QafSchemeOfWork  with id " + id });
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
      QafSchemeOfWork.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "QafSchemeOfWork is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res
            .status(400)
            .json({ error: `QafSchemeOfWork Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = Controller;
