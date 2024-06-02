const QafWeeklyPlanModel = require("../../../models/v1/weeklyPlanGp");

const ControllerWeeklyPlan = {
  create: async (req, res) => {
    try {
      const newScheme = new QafWeeklyPlanModel(req.body);

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
      const schemes = await QafWeeklyPlanModel.find();
      res.status(200).json({ success: true, data: schemes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  getById: async (req, res) => {
    try {
      const scheme = await QafWeeklyPlanModel.findById(req.params.id);
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

  update: async (req, res) => {
    try {
      const { id } = req.params; // Assuming the id is passed as a parameter in the route

      // Find the document by id
      let existingScheme = await QafWeeklyPlanModel.findOne({ _id: id });

      if (!existingScheme) {
        return res
          .status(404)
          .json({ success: false, error: "Scheme not found" });
      }
    

      // Merge fields from req.body into existingScheme
      Object.assign(existingScheme, req.body);

      // Use findOneAndUpdate to find and update the document by id
      const updatedScheme = await QafWeeklyPlanModel.findOneAndUpdate(
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

  delete: async (req, res) => {
    try {
      const deletedScheme = await QafWeeklyPlanModel.findByIdAndDelete(
        req.params.id
      );
      if (!deletedScheme) {
        return res.status(404).json({ error: "Scheme not found" });
      }
      res.status(200).json({ success: true, data: {}});
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  get: async (req, res) => {
    try {
      const {
        teacher,
        term,
        school,
        specialization,
        year,
        // subject,
        // grade,
        // section,
        days,
        week_no,
      } = req.query;

      // Build the query object based on the provided fields
      const query = {
        teacher,
        term,
        specialization,
        school,
        year,
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
      console.log(JSON.stringify(query));
      // Find documents that match the query
      const foundSchemes = await QafWeeklyPlanModel.find(query);

      if (foundSchemes.length === 0) {
        return res.status(200).json({ success: false, data: foundSchemes });
      }

      res.status(200).json({ success: true, data: foundSchemes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = ControllerWeeklyPlan;

// const ControllerWeeklyPlan = {
//   getall: catchAsync(async (req, res) => {
//     try {
//       const { section, grade, date } = req.body;
//       if (!section || !grade || !date) {
//         return res.status(400).json({
//           error: "Please fill in the required fields",
//         });
//       }

//       await QafWeeklyPlanModel.find({
//         section,
//         grade,
//         date,
//       })
//         .populate("teacher")

//         .then((screen) => {
//           res.send(screen);
//         })
//         .catch(() => {
//           return res.status(400).json({ error: "No records exist" });
//         });
//     } catch (error) {
//       console.log("Error: " + error);
//       return res.status(400).json({ error: "Error in API" });
//     }
//   }),

//   getdatabyId: catchAsync(async (req, res) => {
//     try {
//       const id = req.params.id;
//       if (!id) {
//         return res.status(400).json({ error: "Please provide the id" });
//       }

//       QafWeeklyPlanModel.findById(id)
//         .populate("teacher")
//         .then((data) => {
//           if (!data) {
//             res.status(404).send({
//               message: `Cannot find QafWeeklyPlans with id ${id}`,
//             });
//           } else {
//             res.send(data);
//           }
//         })
//         .catch(() => {
//           return res.status(400).json({ error: "No record exists" });
//         });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }),

//   create: catchAsync(async (req, res) => {
//     const { result } = req.body;

//     try {
//       for (const resItem of result) {
//         let filter;

//         if (resItem._id) {
//           console.log("Found existing doc");
//           filter = { _id: mongoose.Types.ObjectId(resItem._id) };

//           const existingDocument = await QafWeeklyPlanModel.findOne(filter);

//           if (existingDocument) {
//             console.log("Updating existing doc");

//             const updatedDocument = await QafWeeklyPlanModel.updateOne(filter, {
//               $set: {
//                 grade: resItem.grade.toString(),
//                 section: resItem.section,
//                 submitted: resItem.submitted || false,
//                 date: resItem.date,
//                 teacher: resItem.teacher,
//               },
//             });

//             console.log("Updated Document:", updatedDocument);
//           } else {
//             console.log("Document not found for update");
//           }
//         } else {
//           console.log("Creating new doc");

//           await QafWeeklyPlanModel.create({
//             _id: mongoose.Types.ObjectId(),
//             grade: resItem.grade.toString(),
//             section: resItem.section,
//             submitted: resItem.submitted || false,
//             date: resItem.date,
//             teacher: resItem.teacher,
//           });

//           console.log("New Document created");
//         }
//       }

//       res.status(200).json(result);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   }),

//   getbyId: catchAsync(async (req, res) => {
//     try {
//       const id = req.params.id;
//       if (!id) {
//         return res.status(400).json({ error: "Please provide the id" });
//       }

//       await QafWeeklyPlanModel.findById(id)
//         .populate("teacher")
//         .then((data) => {
//           res.send(data);
//         })
//         .catch(() => {
//           res.status(404).send({ message: `No QafWeeklyPlans with id ${id}` });
//         });
//     } catch (error) {
//       return res
//         .status(400)
//         .json({ error: "Backend exception handling " + error });
//     }
//   }),

//   delete: catchAsync(async (req, res) => {
//     try {
//       const id = req.params.id;
//       if (!id) {
//         return res.status(400).json({ error: "Please provide the id" });
//       }
//       QafWeeklyPlanModel.findByIdAndDelete(id)
//         .then((data) => {
//           if (!data) {
//             res.status(404).send({
//               message: `Cannot delete QafWeeklyPlanModel with id ${id}. Maybe id is wrong`,
//             });
//           } else {
//             res.send({
//               message: "QafWeeklyPlanModel is deleted successfully!",
//             });
//           }
//         })
//         .catch(() => {
//           return res
//             .status(400)
//             .json({ error: `QafWeeklyPlanModel doesn't exist` });
//         });
//     } catch (error) {
//       return res
//         .status(400)
//         .json({ error: "Backend exception handling " + error });
//     }
//   }),
// };

// module.exports = ControllerWeeklyPlan;
