const catchAsync = require("../utils/catchAsync");
const Pupil = require("../models/pupil");

const pupilController = {
  getallBySchool: catchAsync(async (req, res) => {
    try {
      const schoolID = req.params.schoolID;
      const pupils = await Pupil.find({ school: schoolID });

      res.status(200).json(pupils);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
  getAll: catchAsync(async (req, res) => {
    try {
      const pupils = await Pupil.find();

      res.status(200).json(pupils);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),

  getdatabyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      Pupil.findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Update user with ${id}. Maybe user not found!`,
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

  createPupil: catchAsync(async (req, res) => {
    try {
      const {
        academic_year,
        term,
        school_id,
        student_last_name,
        student_first_name,
        date_of_birth,
        grade,
        student_section,
        student_gender,
        student_NID,
        address,
        home_no,
        mobile_no,
        admission_number,
        date_of_admission,
        school_from_which_admitted,
        social_aid,
        optional_language,
        sen,
        primaryResponsible,
        secondaryResponsible,
        medical,
      } = req.body;
      if (
        student_last_name === "" ||
        student_first_name === "" ||
        student_NID === "" ||
        mobile_no === "" ||
        address === "" ||
        academic_year === "" ||
        date_of_admission === "" ||
        admission_number === ""
      ) {
        return res.status(400).json({
          error: "Please fill required  fields",
        });
      }

      const newUser = await Pupil.create({
        academic_year: academic_year,
        term: term,
        school: school_id,
        student_lastname: student_last_name,
        student_firstname: student_first_name,
        date_ofbirth: date_of_birth,
        grade: grade,
        student_section: student_section,
        student_gender: student_gender,
        student__nid: student_NID,
        primaryResponsible: {
          firstName: primaryResponsible.firstName,
          lastName: primaryResponsible.lastName,
          nationalID: primaryResponsible.nationalID,
          relationship: primaryResponsible.relationship,
          phone: primaryResponsible.phone,
          address: primaryResponsible.address,
        },
        secondaryResponsible: {
          firstName: secondaryResponsible.firstName,
          lastName: secondaryResponsible.lastName,
          nationalID: secondaryResponsible.nationalID,
          relationship: secondaryResponsible.relationship,
          phone: secondaryResponsible.phone,
          address: secondaryResponsible.address,
        },
        medical: medical,
        adress: address,
        home_no: home_no,
        mobile_no: mobile_no,
        admission_no: admission_number,
        date_of__admission: date_of_admission,
        school_from_which_admitted: school_from_which_admitted,
        social_aid: social_aid,
        optional_language: optional_language,
        sen: sen,
      });
      if (!newUser) {
        return res.status(400).json({ error: "Puipl not created " });
      } else {
        res.status(200).json({
          user: { ...newUser._doc },
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),

  updatePupil: catchAsync(async (req, res) => {
    const {
      academic_year,
      term,
      student_last_name,
      student_first_name,
      date_ofbirth,
      month_of_birth,
      year_of_birth,
      grade,
      student_section,
      student_gender,
      student_NID,
      primaryResponsible,
      secondaryResponsible,
      address,
      medical,
      home_no,
      mobile_no,
      admission_number,
      date_of_admission,
      school_from_which_admitted,
      social_aid,
      optional_language,
      sen,
    } = req.body;
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      Pupil.findByIdAndUpdate(
        id,
        {
          academic_year: academic_year,
          term: term,
          student_lastname: student_last_name,
          student_firstname: student_first_name,
          date_ofbirth: date_ofbirth,
          month_ofbirth: month_of_birth,
          year_ofbirth: year_of_birth,
          grade: grade,
          student_section: student_section,
          student_gender: student_gender,
          student__nid: student_NID,
          primaryResponsible: {
            firstName: primaryResponsible.firstName,
            lastName: primaryResponsible.lastName,
            nationalID: primaryResponsible.nationalID,
            relationship: primaryResponsible.relationship,
            phone: primaryResponsible.phone,
            address: primaryResponsible.address,
          },
          secondaryResponsible: {
            firstName: secondaryResponsible.firstName,
            lastName: secondaryResponsible.lastName,
            nationalID: secondaryResponsible.nationalID,
            relationship: secondaryResponsible.relationship,
            phone: secondaryResponsible.phone,
            address: secondaryResponsible.address,
          },
          medical: medical,
          adress: address,
          home_no: home_no,
          mobile_no: mobile_no,
          admission_no: admission_number,
          date_of__admission: date_of_admission,
          school_from_which_admitted: school_from_which_admitted,
          social_aid: social_aid,
          optional_language: optional_language,
          sen: sen,
        },
        { new: true }
      )
        .then((data) => {
          res.status(200).send(data);
        })
        .catch(() => {
          res.status(404).send({
            message: `Cannot Update user with ${id}. User not found!`,
          });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Pupil not Updated, try again later" });
    }
  }),

  getpupilbyId: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }

      Pupil.findById(id)
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res.status(404).send({ message: "Not found user with id " + id });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),

  getPupilbySectionGrade: catchAsync(async (req, res) => {
    try {
      const { student_section, grade, school_id } = req.body;

      Pupil.find({
        student_section: student_section,
        grade: grade,
        school: school_id,
      })
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch(() => {
          return res.status(400).json({ error: "name doesnot exist " });
        });
    } catch (error) {
      return res
        .status(400)
        .json({
          error:
            "Please try again. If the issue exists logout and login again.",
        });
    }
  }),
  getPupilbySectionGradeQuery: catchAsync(async (req, res) => {
    try {
      const { student_section, grade, school_id } = req.query;

      const query = {}
      if (student_section) query.student_section = student_section
      if (grade) query.grade = grade
      if (school_id) query.school = school_id
      Pupil.find(query)
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch(() => {
          return res.status(400).json({ error: "name doesnot exist " });
        });
    } catch (error) {
      return res
        .status(400)
        .json({
          error:
            "Please try again. If the issue exists logout and login again.",
        });
    }
  }),
  getPupilbyname: catchAsync(async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: "Please provide the name" });
      }
      const regx = new RegExp("^" + name + "", "i");

      Pupil.find({
        $or: [
          {
            student_lastname: regx,
          },
          { student_firstname: regx },
        ],
      })
        .then((result) => {
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

  deletePupil: catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "Please provide the id" });
      }
      Pupil.findByIdAndDelete(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot Delete with id ${id}. Maybe id is wrong`,
            });
          } else {
            res.send({
              message: "User is deleted successfully!",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({ error: `User Dosent exist` });
        });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "backend exception handelng " + error });
    }
  }),
};

module.exports = pupilController;
