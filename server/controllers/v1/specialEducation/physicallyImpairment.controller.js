const EducationServiceModel = require("../../../models/v1/specialEducationService/educaionService");
const physicallyImpairmentSchema = require("../../../models/v1/specialEducationService/physicallyImpairment");

const Controller = {
  getAll: async (req, res) => {
    try {
      const data = await physicallyImpairmentSchema.find();

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  createOrUpdate: async (req, res) => {
    const { educationService_id, id } = req.body;
    try {
      const educationService = await EducationServiceModel.findById(
        educationService_id
      );
      if (!educationService)
        return res.status(404).json({ message: "Invalid Student Selected" });

      let data;
      if (id) {
        // If ID is provided, attempt to update
        data = await physicallyImpairmentSchema.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
          }
        );
        if (!data) return res.status(404).json({ message: "Record not found" });
      } else {
        // If ID is not provided, create new entry
        const core = new physicallyImpairmentSchema(req.body);
        data = await core.save();
      }
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const data = await physicallyImpairmentSchema.findById(req.params.id);
      if (!data) return res.status(404).json({ message: "Not Found" });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deletAll: async (req, res) => {
    try {
      const data = await physicallyImpairmentSchema.deleteMany();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  search: async (req, res) => {
    const { educationService_id } = req.query;
    try {
      let query = {};
      if (educationService_id) {
        query.educationService_id = educationService_id;
      }

      //   if(term){
      //     query.term = term;
      //   }
      //   if (date !== undefined && date !== null) {
      //     query.date = {
      //       $gte: new Date(date),
      //       $lt: new Date(new Date(date).setHours(23, 59, 59, 999)),
      //     };
      //   }
      //   if (subject) {
      //     query.subject = { $regex: new RegExp("^" + subject + "$", "i") };
      //   }

      const data = await physicallyImpairmentSchema.findOne(query);
      if (!data || data.length === 0) {
        return res.status(404).json({ message: "Not Found" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = Controller;