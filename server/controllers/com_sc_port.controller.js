const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const Com_Sc_port = require("../models/Com_Sc_port");

const Controller = {
  getall: catchAsync(async (req, res) => {
    try {
      const { student_section, grade } = req.body;
      if (!student_section || !grade) {
        return res.status(400).json({
          error: "Please fill required  fields",
        });
      }
      await Com_Sc_port.find()
        .populate({
          path: "pupil_id",
          match: {
            $and: [{ student_section: student_section }, { grade: grade }],
          },

          options: {
            retainNullValues: false,
          },
        })
        .then(async (Screen) => {
          const filterScreen = await Screen.filter(
            (post) => post.pupil_id !== null
          );
          res.send(filterScreen);
        })
        .catch(() => {
          return res.status(400).json({ error: "NO record exist " });
        });
    } catch (error) {
      console.log("Error " + error);
      return res.status(400).json({ error: "error in api" });
    }
  }),

  getdatabyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      Com_Sc_port.findById(id)
        .populate({ path: "pupil_id" })
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Com_Sc_port with ${id}. Maybe Com_Sc_port not found!`,
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
    const data = req.body;

    try {
      const updateOperations = data.map(async (item) => {
        const { pupil_id } = item;

        const result = await Com_Sc_port.findOneAndUpdate({ pupil_id }, item, {
          upsert: true,
          new: true,
        });

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

      await Com_Sc_port.findById(id)
        .populate("Pupil_Table")
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res.status(404).send({ message: "Not Com_Sc_port  with id " + id });
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
      Com_Sc_port.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "Com_Sc_port is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `Com_Sc_port Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = Controller;
