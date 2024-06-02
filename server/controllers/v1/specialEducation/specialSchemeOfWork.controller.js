const SpecialQafSchemeOfWorkModel = require("../../../models/v1/specialEducationService/specialSchemeOfWork");

const Controller = {
  create: async (req, res) => {
    try {
      // Assuming req.body contains the necessary data
      const newScheme = new SpecialQafSchemeOfWorkModel(req.body);

      // Save the newScheme to the database
      const savedScheme = await newScheme.save();

      res.status(201).json({ success: true, data: savedScheme });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params; // Assuming the id is passed as a parameter in the route

      // Find the document by id
      let existingScheme = await SpecialQafSchemeOfWorkModel.findById(id);

      if (!existingScheme) {
        return res
          .status(404)
          .json({ success: false, error: "Scheme not found" });
      }

      // Merge fields from req.body into existingScheme
      Object.assign(existingScheme, req.body);

      // Use findByIdAndUpdate to find and update the document by id
      const updatedScheme = await SpecialQafSchemeOfWorkModel.findByIdAndUpdate(
        id,
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
      const { subject, educationService_id } = req.query;

      // Build the query object based on the provided fields
      const query = {
        subject,
        educationService_id,
      };

      //add those params which are not null or undefined
      Object.keys(query).forEach((key) => !query[key] && delete query[key]);

      // Find one document that matches the query
      const foundScheme = await SpecialQafSchemeOfWorkModel.findOne(query);

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
  getAll: async (req, res) => {
    try {
      const schemes = await SpecialQafSchemeOfWorkModel.find();
      res.status(200).json(schemes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const scheme = await SpecialQafSchemeOfWorkModel.findById(id);
      res.status(200).json({ success: true, data: scheme });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};
module.exports = Controller;
