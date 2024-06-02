const CorePhonicsModel = require("../models/corePhonics");
const catchAsync = require("../utils/catchAsync");

const controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { student_section, grade, language } = req.body;

      if (!student_section || !grade || !language) {
        return res.status(400).json({
          error: "Please fill required fields",
        });
      }

      const filterScreen = await CorePhonicsModel.find({ language })
        .populate({
          path: "pupil_id",
          match: {
            $and: [{ student_section: student_section }, { grade: grade }],
          },
          options: {
            retainNullValues: false,
          },
        })
        .exec();

      return res.send(filterScreen);
    } catch (error) {
      console.log("Error: " + error);
      return res.status(400).json({ error: "Error in API" });
    }
  }),
  getById: catchAsync(async (req, res) => {
    try {
      const { id } = req.params;
      const { language } = req.query;

      const data = await CorePhonicsModel.findOne({ pupil_id: id, language })
        .populate({
          path: "pupil_id",
          options: {
            retainNullValues: false,
          },
        })
        .exec();

      return res.send(data);
    } catch (error) {
      console.log("Error: " + error);
      return res.status(400).json({ error: "Error in API" });
    }
  }),
  create: catchAsync(async (req, res) => {
    const { data } = req.body;

    try {
      const { pupil_id, language } = data;
   
      const result = await CorePhonicsModel.findOneAndUpdate(
        { pupil_id, language },
        data,
        { upsert: true, new: true }
      );

      if (!result) {
        throw new Error("Failed to create CorePhonicsScreening");
      }

      await result.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  deleteById: catchAsync(async (req, res) => {
    const { pupil_id, language } = req.body;

    try {
      const result = await CorePhonicsModel.findOneAndDelete({
        pupil_id,
        language,
      });

      if (!result) {
        throw new Error("Failed to Delete CorePhonicsScreening");
      }

      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  create_bulk: catchAsync(async (req, res) => {
    const data = req.body;

    try {
      const updateOperations = data.map(async (item) => {
        const { pupil_id, language } = item;

        const result = await CorePhonicsModel.findOneAndUpdate(
          { pupil_id, language },
          item,
          { upsert: true, new: true }
        );

        if (!result) {
          throw new Error("Failed to create CorePhonicsScreening");
        }

        return result;
      });

      const results = await Promise.all(updateOperations);

      res.status(200).json(results);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
};

module.exports = controller;
