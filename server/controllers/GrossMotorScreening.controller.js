const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const GrossMotorScreening = require("../models/GrossMotorScreening");

const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { student_section, grade } = req.body;

      if (!student_section || !grade) {
        return res.status(400).json({
          error: "Please fill required fields",
        });
      }

      const filterScreen = await GrossMotorScreening.find()
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

      if (filterScreen.length === 0) {
        return res.status(400).json({ error: "No records exist" });
      }

      return res.send(filterScreen);
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

      GrossMotorScreening.findById(id)
        .populate({ path: "pupil_id" })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot GrossMotorScreening with ${id}. Maybe GrossMotorScreening not found!`,
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

  // create: catchAsync(async (req, res) => {
  //   try {
  //     const data = req.body;

  //     console.log({ data });

  //     const isValid = data.every((pupil) => {
  //       const { pupil_id, balance_left, balance_right, bilateral, upper } =
  //         pupil;

  //       if (
  //         !pupil_id ||
  //         !balance_left ||
  //         !balance_right ||
  //         !bilateral ||
  //         !upper
  //       ) {
  //         throw new Error("Please fill required fields");
  //       }

  //       return true;
  //     });

  //     if (!isValid) {
  //       return res.status(400).json({ error: "Please fill required fields" });
  //     }

  //     const newGrossMotorScreening = await GrossMotorScreening.insertMany(data);

  //     if (!newGrossMotorScreening) {
  //       return res
  //         .status(400)
  //         .json({ error: "Failed to create GrossMotorScreening" });
  //     }

  //     res.status(200).json(newGrossMotorScreening);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }),
  create: catchAsync(async (req, res) => {
    const data = req.body;
    
    try {
      const updateOperations = data.map(async (item) => {
        const { pupil_id } = item;
     
        const result = await GrossMotorScreening.findOneAndUpdate(
          { pupil_id },
          item,
          { upsert: true, new: true }
        );
  
        if (!result) {
          throw new Error("Failed to create GrossMotorScreening");
        }
  
        return result;
      });
  
      const results = await Promise.all(updateOperations);
  
      res.status(200).json(results);
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

      await GrossMotorScreening.findById(id)
        .populate("Pupil_Table")
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res
            .status(404)
            .send({ message: "Not GrossMotorScreening  with id " + id });
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
      GrossMotorScreening.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "GrossMotorScreening is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res
            .status(400)
            .json({ error: `GrossMotorScreening Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = Controller;
