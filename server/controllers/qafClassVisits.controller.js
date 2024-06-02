const catchAsync = require("../utils/catchAsync");

const QafClassVisitModel = require("../models/qafClassVisit");

const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { section, grade, date } = req.body;
      if (!section || !grade || !date) {
        return res.status(400).json({
          error: "Please fill in the required fields",
        });
      }

      await QafClassVisitModel.find({
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

      QafClassVisitModel.findById(id)
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
  create: catchAsync(async (req, res) => {
    const { result } = req.body;

    try {
      for (const res of result) {
        const filter = { _id: res._id };
        const update = {
          grade: res.grade.toString(),
          section: res.section,
          value: res.value,
          date: res.date,
          teacher_id: res.teacherId,
        };

        const options = { upsert: true, new: true };

        await QafClassVisitModel.findOneAndUpdate(filter, update, options);
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

      await QafClassVisitModel.findById(id)
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
      QafClassVisitModel.findByIdAndDelete(id)
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
