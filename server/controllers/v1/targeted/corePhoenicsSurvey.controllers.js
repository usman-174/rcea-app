const Pupil = require("../../../models/pupil");
const CorePhonicsModel = require("../../../models/v1/targeted/CorePhoenicsSurvey");
const Controller = {
  getAll: async (req, res) => {
    try {
      const data = await CorePhonicsModel.find();

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  createOrUpdate: async (req, res) => {
    const { pupil_id, id } = req.body;
    try {
      const pupil = await Pupil.findById(pupil_id);
      if (!pupil)
        return res.status(404).json({ message: "Invalid Student Selected" });

      let data;
      if (id) {
        // If ID is provided, attempt to update
        data = await CorePhonicsModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!data) return res.status(404).json({ message: "Record not found" });
      } else {
        // If ID is not provided, create new entry
        const core = new CorePhonicsModel(req.body);
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
      const data = await CorePhonicsModel.findById(req.params.id);
      if (!data) return res.status(404).json({ message: "Not Found" });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deletAll: async (req, res) => {
    try {
      const data = await CorePhonicsModel.deleteMany();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  search: async (req, res) => {
    const { period, pupil_id,term,date, subject } = req.query;
    try {
      let query = {};
      if (pupil_id) {
        query.pupil_id = pupil_id;
      }

      if (period) {
        query.period = period;
      }
      if(term){
        query.term = term;
      }
      if (date !== undefined && date !== null) {
        query.date = {
          $gte: new Date(date),
          $lt: new Date(new Date(date).setHours(23, 59, 59, 999)),
        };
      }
      if (subject) {
        query.subject = { $regex: new RegExp("^" + subject + "$", "i") };
      }

      const data = await CorePhonicsModel.findOne(query);
      if (!data || data.length === 0)
        return res.status(404).json({ message: "Not Found" });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = Controller;