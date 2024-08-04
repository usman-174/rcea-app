const catchAsync = require("../utils/catchAsync");
const Teacher = require("../models/teacher");
const TeacherController = {
  getall: catchAsync(async (req, res) => {
    try {
      Teacher.find()
        .then((user) => {
          res.send(user);
        })
        .catch(() => {
          return res.status(200).json({ error: "NO record exist " });
        });
    } catch (error) {
      console.log("Error " + error);
      return res.status(400).json({ error: "error in api" });
    }
  }),

  getBySchool: catchAsync(async (req, res) => {
    try {
      const schoolID = req.params.schoolID;

      Teacher.find({ school: schoolID })
        .then((user) => {
          res.send(user);
        })
        .catch(() => {
          return res.status(200).json({ error: "NO record exist " });
        });
    } catch (error) {
      console.log("Error " + error);
      return res.status(400).json({ error: "error in api" });
    }
  }),

  getTeacherbySectionGrade: catchAsync(async (req, res) => {
    try {
      const { section, grade } = req.body;
      if ((!section, !grade)) {
        return res.status(400).json({ error: "Please provide the name" });
      }
      Teacher.find({
        section: section,
        grade: grade,
      })
        .then((result) => {
          // console.log(JSON.stringify(result));
          return res.status(200).json(result);
        })
        .catch((error) => {
          return res.status(400).json({ error: "name doesnot exist " });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng" + error });
    }
  }),
  getdatabyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }
      Teacher.findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Update teacher with ${id}. Maybe teacher not found!`,
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

  createTeacher: catchAsync(async (req, res) => {
    try {
      const {
        address,
        firstName,
        lastName,
        phone,
        hire_date,
        gender,
        qualifications,
        grade,
        nationalID,
        school_id,
        postingYear,
        appointmentDate,
        remarks,
      } = req.body;

      if (
        !address ||
        !firstName ||
        !lastName ||
        !phone ||
        !hire_date ||
        !gender ||
        !qualifications ||
        !grade ||
        !nationalID ||
        !school_id ||
        !postingYear ||
        !appointmentDate
      ) {
        return res.status(400).json({
          error: "Please fill required fields",
        });
      }

      const newTeacher = await Teacher.create({
        address,
        firstName,
        lastName,
        phone,
        hire_date,
        gender,
        qualifications,
        grade,
        nationalID,
        school: school_id,
        postingYear,
        appointmentDate,
        remarks,
      });

      if (!newTeacher) {
        return res
          .status(400)
          .json({ error: "Teacher not created, please try again later" });
      } else {
        res.status(200).json({
          user: {
            ...newTeacher._doc,
            createdAt: undefined,
            updatedAt: undefined,
          },
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),

  updateTeacher: catchAsync(async (req, res) => {
    const {
      address,
      firstName,
      lastName,
      phone,
      hire_date,
      gender,
      appoinmentDate,
      remarks,
      qualifications,
      grade,
      nationalID,
      school_id,
      postingYear,
    } = req.body;

    try {
      const id = req.params.id;
      console.log("remarks", remarks);
      
      if (!id) {
        return res.status(400).json({ error: "Please provide a valid ID" });
      }

      Teacher.findByIdAndUpdate(
        id,
        {
          address,
          firstName,
          lastName,
          phone,
          hire_date,
          gender,
          appoinmentDate,
          remarks,
          qualifications,
          grade,
          nationalID,
          school: school_id,
          postingYear,
        },
        { new: true }
      )
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((error) => {
          res.status(404).send({
            error: error.message,
          });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "An error occurred, try again later" });
    }
  }),

  getTeacherbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }
      Teacher.findById(id)
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res.status(404).send({ error: "Not found Teacher with id " + id });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error.message });
    }
  }),

  getTeacherbyname: catchAsync(async (req, res) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ error: "Please provide the name" });
      }

      const regx = new RegExp("^" + name + "", "i");

      Teacher.find({
        $or: [{ firstName: regx }, { lastName: regx }],
      })
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((error) => {
          return res.status(400).json({ error: "Teacher does not exist" });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng" + error.message });
    }
  }),

  deleteTeacher: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }
      Teacher.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "Teacher is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `Teacher Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error.message });
    }
  }),
};

module.exports = TeacherController;
