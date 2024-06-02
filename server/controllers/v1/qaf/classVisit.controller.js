const ClassVisitModel = require("../../../models/v1/classVisit");

const Controller = {
  getAll: async (req, res) => {
    try {
      const classVisit = await ClassVisitModel.find();
      res.status(200).json({ success: true, data: classVisit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  create: async (req, res) => {
    try {
      const newClassVisit = new ClassVisitModel(req.body);
      const savedClassVisit = await newClassVisit.save();
      res.status(201).json({ success: true, data: savedClassVisit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      let existingClassVisit = await ClassVisitModel.findById(id);
      if (!existingClassVisit) {
        return res
          .status(404)
          .json({ success: false, error: "Class Visit not found" });
      }
      Object.assign(existingClassVisit, req.body);
      const updatedClassVisit = await ClassVisitModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
      );
      res.status(200).json({ success: true, data: updatedClassVisit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const classVisit = await ClassVisitModel.findById(id);
      res.status(200).json({ success: true, data: classVisit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },

  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedClassVisit = await ClassVisitModel.findByIdAndDelete(id);
      if (!deletedClassVisit) {
        return res
          .status(404)
          .json({ success: false, error: "Data not found" });
      }
      res.status(200).json({ success: true, data: deletedClassVisit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  search: async (req, res) => {
    try {
      const { teacher, term, school, year, grade, date } = req.query;

      // Build the query object based on the provided fields
      const query = {
        teacher,
        term,
        school,
        year,
        grade,
        visit_date: date ? new Date(date):null,
      };
      //add those params which are not null or undefined
      Object.keys(query).forEach((key) => !query[key] && delete query[key]);
      if (date !== undefined && date !== null) {
        query.visit_date = {
          $gte: new Date(date),
          $lt: new Date(new Date(date).setHours(23, 59, 59, 999)),
        };
      }
      // console.log("Query=>", JSON.stringify(query));
      const classVisit = await ClassVisitModel.findOne(query);
      if (!classVisit) {
        return res
          .status(404)
          .json({ success: false, data: null, error: "Data not found" });
      }
      res.status(200).json({ success: true, data: classVisit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = Controller;
