const catchAsync = require("../utils/catchAsync");

const ProgressMonitoring = require("../models/progressMonitoring");

const Controller = {
  getAll :catchAsync(async (req, res) => {
    try {
      const { section, grade, language, month, year } = req.body;
      if (!section || !grade || !language || !month || !year) {
        return res.status(400).json({
          error: "Please fill in the required fields",
        });
      }
  
      const data = await ProgressMonitoring.find({
        section,
        grade,
        language,
        month,
        year,
      }).populate({
        path: "teacher_id",
        options: {
          retainNullValues: false,
        },
      });
  
      
      return res.send(data);
    } catch (error) {
      console.log("Error: " + error);
      return res.status(400).json({ error: "Error in API" });
    }
  }),
   getDataById : catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }
  
      const data = await ProgressMonitoring.findById(id).populate({ path: "pupil" });
      if (!data) {
        res.status(404).send({
          message: `Cannot find ProgressMonitoring with id ${id}.`,
        });
      } else {
        res.send(data);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  
   create : catchAsync(async (req, res) => {
    const { result } = req.body;
  
    try {
      const options = { upsert: true, new: true };
  
      const resultx = await Promise.all(
        result.map(async (item) => {
          const filter = { _id: item._id };
  
          const update = {
            grade: item.grade.toString(),
            section: item.section,
            subject: item.subject,
            measure: item.measure,
            benchmarkDate: item.benchmarkDate,
            teacher_id: item.teacherId,
            scores: item.scores,
            language: item.language,
            year: parseInt(item.year),
            month: item.month,
          };
  
          const updated = await ProgressMonitoring.findOneAndUpdate(filter, update, options);
          return updated;
        })
      );
  
      res.status(200).json(resultx);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })
  
 ,
  getbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      await ProgressMonitoring.findById(id)
        .populate("pupil")
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: "Not ProgressMonitoring  with id " + id });
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
      ProgressMonitoring.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "ProgressMonitoring is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res
            .status(400)
            .json({ error: `ProgressMonitoring Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = Controller;
