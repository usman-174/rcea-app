
const PastModel = require("../models/past");
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

      const filterScreen = await PastModel.find({ language })
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
  create: catchAsync(async (req, res) => {
    const data = req.body;

    try {
      const updateOperations = data.map(async (item) => {
        const { pupil_id, language } = item;

        const result = await PastModel.findOneAndUpdate(
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
};

module.exports = controller;
