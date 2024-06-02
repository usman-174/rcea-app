const QafLessonPlanModel = require("../../../models/v1/LessonPlan");

const ControllerLessonPlan = {
  create: async (req, res) => {
    try {
      const newLessonPlan = new QafLessonPlanModel(req.body);
      const savedLessonPlan = await newLessonPlan.save();
      res.status(201).json({ success: true, data: savedLessonPlan });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal Server Error",
      });
    }
  },
  getAll: async (_, res) => {
    try {
      const lessonPlans = await QafLessonPlanModel.find();
      res.status(200).json({ success: true, data: lessonPlans });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const lessonPlan = await QafLessonPlanModel.findById(req.params.id);
      if (!lessonPlan) {
        return res
          .status(404)
          .json({ success: false, error: "Lesson Plan not found" });
      }
      res.status(200).json({ success: true, data: lessonPlan });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params; // Assuming the id is passed as a parameter in the route
      let existingLessonPlan = await QafLessonPlanModel.findOne({ _id: id });
      if (!existingLessonPlan) {
        return res
          .status(404)
          .json({ success: false, error: "Lesson Plan not found" });
      }
      Object.assign(existingLessonPlan, req.body);
      const updatedLessonPlan = await existingLessonPlan.save();
      res.status(200).json({ success: true, data: updatedLessonPlan });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal Server Error",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedLessonPlan = await QafLessonPlanModel.findByIdAndDelete(id);
      if (!deletedLessonPlan) {
        return res
          .status(404)
          .json({ success: false, error: "Lesson Plan not found" });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal Server Error",
      });
    }
  },
  get: async (req, res) => {
    try {
      const { teacher, period, term, school, year, subject, grade, section } =
        req.query;

      // Build the query object based on the provided fields
      const query = {
        teacher,
        term,
        school,
        year,
        subject,
        grade,
        period,
        section,
      };
      //add those params which are not null or undefined
      Object.keys(query).forEach((key) => !query[key] && delete query[key]);

      // Find one document that matches the query
      const foundScheme = await QafLessonPlanModel.findOne(query);

      if (!foundScheme) {
        return res
          .status(404)
          .json({ success: false, data: null, error: "Data not found" });
      }

      res.status(200).json({ success: true, data: foundScheme });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal Server Error",
      });
    }
  },
};

module.exports = ControllerLessonPlan;
