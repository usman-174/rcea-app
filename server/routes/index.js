const express = require("express");
const { isAuthenticated, isAuthorized } = require("../middlewares/verifyToken");
const router = express.Router();
router.use("/auth", require("./auth.route"));
router.use(
  "/teacher",
  // isAuthenticated,
  // isAuthorized(["ADMIN"]),
  require("./teacher.route")
);
router.use("/subject", require("./subject.route"));
router.use(
  "/pupil",
  // isAuthenticated,
  // isAuthorized(["ADMIN"]),
  require("./pupil.route")
);
router.use("/school", require("./school.route"));
router.use(
  "/com_sc_portal",
  isAuthenticated,
  isAuthorized(["ADMIN"]),
  require("./com_sc_porta.route")
);
router.use("/session", require("./session.route"));
router.use("/student", require("./student.route"));
router.use(
  "/behaviorscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./behaviorscreening.route")
);
router.use(
  "/grossmotorscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./grossmotorscreening.route")
);
router.use(
  "/finemotorscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./finemotorscreening.route")
);
router.use(
  "/letterNamingscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./letterNamingScreening.route")
);
router.use(
  "/letterSoundscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./letterSoundScreening.route")
);
router.use(
  "/nonsenseWordscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./nonsenseWordScreening.route")
);
router.use(
  "/oralReadingscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./oralReadingScreening.route")
);
router.use(
  "/phoSegscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./phonemicsSegmentationScreening.route")
);
router.use(
  "/silentReadingscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./silentReadingScreening.route")
);
router.use(
  "/mathematicscr",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./mathematicsScreening.route")
);
router.use(
  "/markingcsch",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./MarkingScheem.route")
);
router.use(
  "/eotSch",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./EOTScheem.route")
);
// router.use(
//   "/corephonics",
//   isAuthenticated,
//   isAuthorized(["ADMIN", "TEACHER"]),
//   require("./corePhonicsScreening.route")
// );

// router.use(
//   "/qaflessonplan",
//   // isAuthenticated,
//   // isAuthorized(["ADMIN", "TEACHER"]),
//   require("./qafLessonPlan.route")
// );
// router.use(
//   "/qafweeklyplan",
//   // isAuthenticated,
//   // isAuthorized(["ADMIN", "TEACHER"]),
//   require("./qafWeeklyPlan.route")
// );
// router.use(
//   "/qafclassvisit",
//   // isAuthenticated,
//   // isAuthorized(["ADMIN", "TEACHER"]),
//   require("./qafClassVisit.route")
// );
// router.use(
//   "/qafschemeofwork",
//   // isAuthenticated,
//   // isAuthorized(["ADMIN", "TEACHER"]),
//   require("./qafSchemeOfWork.route")
// );
router.use(
  "/progressmonitoring",
  // isAuthenticated,
  // isAuthorized(["ADMIN", "TEACHER"]),
  require("./progressMoitoring.route")
);
// v1----------------------------------
router.use(
  "/qaf/schemeofwork",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/qaf/schemeOfWork.route")
);
router.use(
  "/qaf/weeklyplan",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/qaf/weeklyPlan.route")
);
router.use(
  "/qaf/weeklyplanspecialists",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/qaf/WeeklyPlanSpecialists.route")
);
router.use(
  "/qaf/classvisit",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/qaf/classVisit.route")
);
router.use(
  "/qaf/lessonplan",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/qaf/lessonPlan.route")
);

// Targeted Screening Section
router.use(
  "/corephonics",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/targeted/corePhoenicsSurvey.route")
);
router.use(
  "/qps",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/targeted/qps.route")
);
router.use(
  "/reallygreatreading",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/targeted/reallyGreatReading.route")
);
router.use(
  "/past",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/targeted/past.route")
);
router.use(
  "/psychomotor",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/targeted/psychoMotor.route")
);
router.use(
  "/speechandlanguage",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/targeted/speechAndReading.route")
);
// Special Education Section
router.use(
  "/specialeducation",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/specialEducation.route")
);
router.use(
  "/specialeducation/speechandlanguage",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/speechLanguageImpairment.route")
);
router.use(
  "/specialeducation/physicallyimpairment",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/physicallyImpairment.route")
);
router.use(
  "/specialeducation/emotionalOrBehaviouralDisorders",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/emotionalOrBehaviouralDisorders.route")
);
router.use(
  "/specialeducation/autismSpectrumDisorder",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/autismSpectrumDisorder.route")
);
router.use(
  "/specialeducation/developmentalCognitiveDisability",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/developmentalCognitiveDisability.route")
);
router.use(
  "/specialeducation/developmentalDelay",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/developmentalDelay.route")
);
router.use(
  "/specialeducation/hearingImpairment",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/hearingImpairment.route")
);
router.use(
  "/specialeducation/taumaticBrainInjury",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/taumaticBrainInjury.route")
);
router.use(
  "/specialeducation/visualImpairment",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/visualImpairment.route")
);
router.use(
  "/specialeducation/otherHealthImpairments",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/otherHealthImpairments.route")
);
router.use(
  "/specialeducation/specificLearningDisability",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/specificLearningDisability.route")
);
router.use(
  "/specialeducation/individualizedspecialplan",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/individualizedSpecialPlan.route")
);
router.use(
  "/specialeducation/specialschemeofwork",
  isAuthenticated,
  isAuthorized(["ADMIN", "TEACHER"]),
  require("./v1/specialEducation/specialSchemeOfWork.route")
);

module.exports = router;
