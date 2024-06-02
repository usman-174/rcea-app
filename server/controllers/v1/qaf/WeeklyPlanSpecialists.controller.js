const QafWeeklyPlanSpecialistsModel = require("../../../models/v1/WeeklyPlanSpecialists");

const ControllerWeeklyPlanSpecialists = {
  create: async (req, res) => {
    try {
      const newScheme = new QafWeeklyPlanSpecialistsModel(req.body);

      const savedScheme = await newScheme.save();

      res.status(201).json({ success: true, data: savedScheme });
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
      const schemes = await QafWeeklyPlanSpecialistsModel.find();
      res.status(200).json({ success: true, data: schemes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const scheme = await QafWeeklyPlanSpecialistsModel.findById(
        req.params.id
      );
      if (!scheme) {
        return res
          .status(404)
          .json({ success: false, error: "Scheme not found" });
      }
      res.status(200).json({ success: true, data: scheme });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const scheme = await QafWeeklyPlanSpecialistsModel.findByIdAndDelete(
        req.params.id
      );
      if (!scheme) {
        return res
          .status(404)
          .json({ success: false, error: "Scheme not found" });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params; // Assuming the id is passed as a parameter in the route

      // Find the document by id
      let existingScheme = await QafWeeklyPlanSpecialistsModel.findOne({
        _id: id,
      });

      if (!existingScheme) {
        return res
          .status(404)
          .json({ success: false, error: "Scheme not found" });
      }

      // Merge fields from req.body into existingScheme
      existingScheme = { ...existingScheme._doc, ...req.body };

      // Use findOneAndUpdate to find and update the document by id
      const updatedScheme =
        await QafWeeklyPlanSpecialistsModel.findOneAndUpdate(
          { _id: id },
          req.body,
          { new: true, runValidators: true }
        );

      res.status(200).json({ success: true, data: updatedScheme });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  get: async (req, res) => {
    try {
      const { teacher, term, school, specialization,year, days, week_no } = req.query;
      const query = {
        teacher,
        term,
        school,
        year,
        specialization,
        // subject,
        // grade,
        week_no,
        // section,
        ...(days?.length
          ? {
              day: {
                $in: JSON.parse(days)?.map((day) => new RegExp(day, "i")),
              },
            }
          : {}),
      };

      //add those params which are not null or undefined
      Object.keys(query).forEach((key) => !query[key] && delete query[key]);

      // Find one document that matches the query
      const foundScheme = await QafWeeklyPlanSpecialistsModel.find(query);

      if (!foundScheme) {
        return res
          .status(200)
          .json({ success: false, data: foundScheme });
      }

      res.status(200).json({ success: true, data: foundScheme });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = ControllerWeeklyPlanSpecialists;
