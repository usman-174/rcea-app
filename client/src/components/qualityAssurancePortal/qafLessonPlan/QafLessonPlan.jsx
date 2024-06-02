import { useMutation, useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getSchools } from "../../../store/school/schoolActions";
import { errorToast, successToast } from "../../../utils";
import AxiosConfig from "../../../utils/axiosConfig";
import {
  academicTerm,
  academicYear,
  assessmentOptions,
  examplesOfReinforcers,
  grades,
  logicalConsequencesForSimpleChoice,
  qafActivity,
  qafAttentionSignal,
  qafClassSetup,
  qafConversation,
  qafEngagementActivities,
  qafExpectationsForListeningToLearn,
  qafHandlingDisruptions,
  qafHelp,
  qafMovement,
  qafParticipation,
  qafStrand2,
  qafSuccess,
  qafTarget2,
  qafTeachingStrategies,
  qatLessonPlanThemes2,
  reinforcementStrategy,
  sections,
  subjects2,
  topicsOrSubtopics2
} from "../../../utils/globals";

const INITIAL_FORM_STATE = {
  theme: null,
  topic: null,
  targets: null,
  strand: null,
  pupilsShouldBeAbleTo: "",
  studentsPriorKnowledge: "",
  teachingStrategies: null,
  generalResources: "",
  multiSensoryStrategies: "",
  classroomSetUp: null,
  reinfocementStrategy: null,
  examplesOfReinforcers: null,
  handlingDisruptions: null,
  logicalConsequenceForSimpleChoiceStrategy: null,
  engageActivity: null,
  engagementActivityBrief: "",
  expectationsForListeningToLearn: null,
  attentionSignal: null,
  conversation: null,
  help: null,
  activity: null,
  movement: null,
  participation: null,
  success: null,
  procedureGeneral: "",
  procedureDifferentiation: "",
  lessonSummarization: "",
  evaluationAssessment: null,
  general: "",
  differentiatedActivities: "",
  homeWorkIfAny: "",
  targetedSupports: "",
  individualisedSupports: "",
};

const QafLessonPlan = () => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.school);
  const { selectedYear, selectedTerm } = useSelector((state) => state.academics);

  const { selectedSchool } = useSelector((state) => state.school);

  const [currentSelectedTerm, setCurrentSelectedTerm] = useState({
    value: selectedTerm,
    label: selectedTerm,
  });
  const [currentSelectedYear, setCurrentSelectedYear] = useState({
    value: selectedYear,
    label: selectedYear,
  });
  const [currentSelectedSchool, setCurrentSelectedSchool] = useState({
    value: selectedSchool?._id,
    label: selectedSchool?.name,
  });
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedEducator, setSelectedEducator] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  const shouldWeFetchLessonPlan =
    selectedEducator &&
    selectedGrade &&
    selectedSection &&
    currentSelectedTerm &&
    currentSelectedYear &&
    currentSelectedSchool &&
    selectedSubject &&
    selectedPeriod;

  const {
    data: lessonPlan,
    isLoading: lessonPlanLoading,
    isFetching: lessonPlanIsFetching,
    isError: lessonPlanIsError,
    error: lessonPlanError,
    refetch: refetchLessonPlan,
  } = useQuery({
    queryKey: [
      "lessonPlan",
      {
        teacher: selectedEducator?.value,
        grade: selectedGrade?.value,
        section: selectedSection?.value,
        term: currentSelectedTerm?.value,
        year: currentSelectedYear?.value,
        school: currentSelectedSchool?.value,
        subject: selectedSubject?.value,
        period: selectedPeriod?.value,
      },
    ],
    queryFn: async ({ queryKey }) => {
      const [, parameters] = queryKey;
      const response = await AxiosConfig.get("qaf/lessonPlan/get", {
        params: {
          grade: parameters.grade,
          section: parameters.section,
          term: parameters.term,
          year: parameters.year,
          school: parameters.school,
          subject: parameters.subject,
          period: parameters.period,
          teacher: parameters.teacher,
        },
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!shouldWeFetchLessonPlan,
  });

  const schoolId = currentSelectedSchool?.value;

  const { data: educators } = useQuery({
    queryKey: ["educators", schoolId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      const { data } = await AxiosConfig.get(`/teacher/allbysection/${id}`);
      return data;
    },
    refetchOnWindowFocus: false,
    enabled: !!schoolId,
  });

  const createLessonPlan = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosConfig.post("/qaf/lessonPlan/create", data);
      return response.data;
    },
    onSuccess: () => {
      successToast("Lesson Plan added successfully");
      refetchLessonPlan();
    },
    onError: (err) => {
      errorToast("An error occurred. Please try again.");
    },
  });

  const updateLessonPlan = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosConfig.put(`/qaf/lessonPlan/update/${data?.id}`, data?.data);
      return response.data;
    },
    onSuccess: () => {
      successToast("Lesson Plan updated successfully");
    },
    onError: (err) => {
      errorToast("An error occurred. Please try again.");
    },
  });

  const educatorsOptions = educators
    ? educators.map((educator) => ({
      value: educator._id,
      label: educator.firstName + " " + educator.lastName,
    }))
    : [];

  useEffect(() => {
    if (!!lessonPlan) {
      setStartDate(DateTime.fromISO(lessonPlan?.data?.start_date).toFormat("yyyy-MM-dd"));
      setEndDate(DateTime.fromISO(lessonPlan?.data?.end_date).toFormat("yyyy-MM-dd"));
      setDuration(lessonPlan?.data?.duration);
      setRollNo(lessonPlan?.data?.roll);
      setForm({
        theme: {
          value: lessonPlan?.data?.theme,
          label: lessonPlan?.data?.theme,
        },
        topic: {
          value: lessonPlan?.data?.topic,
          label: lessonPlan?.data?.topic,
        },
        targets: {
          value: lessonPlan?.data?.targets,
          label: lessonPlan?.data?.targets,
        },
        strand: {
          value: lessonPlan?.data?.strands,
          label: lessonPlan?.data?.strands,
        },
        pupilsShouldBeAbleTo: lessonPlan?.data?.outcomes,
        studentsPriorKnowledge: lessonPlan?.data?.students_prior_knowledge,
        teachingStrategies: {
          value: lessonPlan?.data?.teaching_strategies,
          label: lessonPlan?.data?.teaching_strategies,
        },
        generalResources: lessonPlan?.data?.teaching_aid_and_resources?.general_resources_including_manipulatives,
        multiSensoryStrategies: lessonPlan?.data?.teaching_aid_and_resources?.multisensory_strategies,
        classroomSetUp: {
          value: lessonPlan?.data?.classroom_setup,
          label: lessonPlan?.data?.classroom_setup,
        },
        reinfocementStrategy: [
          ...lessonPlan?.data?.behaviour_management_strategies?.reinforcement_strategy?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        examplesOfReinforcers: [
          ...lessonPlan?.data?.behaviour_management_strategies?.examples_of_reinforcers?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        handlingDisruptions: [
          ...lessonPlan?.data?.behaviour_management_strategies?.handling_disruptions?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        logicalConsequenceForSimpleChoiceStrategy: [
          ...lessonPlan?.data?.behaviour_management_strategies?.logical_consequences_for_simple_choice_strategies?.map(
            (option) => {
              return {
                value: option,
                label: option,
              };
            }
          ),
        ],
        engageActivity: {
          value: lessonPlan?.data?.engagement_activity,
          label: lessonPlan?.data?.engagement_activity,
        },
        engagementActivityBrief: "",
        expectationsForListeningToLearn: {
          value: lessonPlan?.data?.expectations_for_learning?.expectations_for_listening_to_learn,
          label: lessonPlan?.data?.expectations_for_learning?.expectations_for_listening_to_learn,
        },
        attentionSignal: {
          value: lessonPlan?.data?.expectations_for_learning?.attention_signal,
          label: lessonPlan?.data?.expectations_for_learning?.attention_signal,
        },
        conversation: [
          ...lessonPlan?.data?.expectations_for_learning?.conversation?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        help: [
          ...lessonPlan?.data?.expectations_for_learning?.help?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        activity: [
          ...lessonPlan?.data?.expectations_for_learning?.activity?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        movement: [
          ...lessonPlan?.data?.expectations_for_learning?.movement?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        participation: [
          ...lessonPlan?.data?.expectations_for_learning?.participation?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        success: [
          ...lessonPlan?.data?.expectations_for_learning?.success?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        procedureGeneral: lessonPlan?.data?.procedures_GERERAL,
        procedureDifferentiation: lessonPlan?.data?.procedures_DIFFERENTIATION,
        lessonSummarization: lessonPlan?.data?.lesson_summarization,
        evaluationAssessment: [
          ...lessonPlan?.data?.evaluation?.map((option) => ({
            value: option,
            label: option,
          })),
        ],
        general: lessonPlan?.data?.classwork_to_be_completed?.general,
        differentiatedActivities: lessonPlan?.data?.classwork_to_be_completed?.differentiated_activities,
        homeWorkIfAny: lessonPlan?.data?.homework,
        targetedSupports: lessonPlan?.data?.pupils_requiring_support?.targeted_support,
        individualisedSupports: lessonPlan?.data?.pupils_requiring_support?.individualized_support,
      });
    }
  }, [lessonPlan]);

  useEffect(() => {
    if (lessonPlanIsError) {
      if (lessonPlanError?.response?.data?.error.includes(" not found")) {
        setTimeout(() => {
          setError("");
        }, 5000);
        setStartDate("");
        setEndDate("");
        setDuration("");
        setRollNo("");
        setForm(INITIAL_FORM_STATE);
      } else {
        setError(lessonPlanError?.response?.data?.error);
      }
    }
  }, [lessonPlanError, lessonPlanIsError]);

  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  const uploadLessonPlanOnServer = (e) => {
    e.preventDefault();
    const data = {
      school: selectedSchool?._id,
      teacher: selectedEducator?.value,
      grade: selectedGrade?.value,
      section: selectedSection?.value,
      subject: selectedSubject?.value,
      term: currentSelectedTerm?.value,
      period: selectedPeriod?.value,
      year: currentSelectedYear?.value,
      ...(startDate && { start_date: startDate }),
      ...(endDate && { end_date: endDate }),
      duration,
      roll: rollNo,
      theme: form?.theme?.value,
      topic: form?.topic?.value,
      targets: form?.targets?.value,
      strands: form?.strand?.value,
      outcomes: form?.pupilsShouldBeAbleTo,
      students_prior_knowledge: form?.studentsPriorKnowledge,
      teaching_strategies: form?.teachingStrategies?.value,
      teaching_aid_and_resources: {
        general_resources_including_manipulatives: form?.generalResources,
        multisensory_strategies: form?.multiSensoryStrategies,
      },
      classroom_setup: form?.classroomSetUp?.value,
      behaviour_management_strategies: {
        reinforcement_strategy: form?.reinfocementStrategy?.map((option) => option?.value),
        examples_of_reinforcers: form?.examplesOfReinforcers?.map((option) => option?.value),
        handling_disruptions: form?.handlingDisruptions?.map((option) => option?.value),
        logical_consequences_for_simple_choice_strategies: form?.logicalConsequenceForSimpleChoiceStrategy?.map(
          (option) => option?.value
        ),
      },
      engagement_activity: form?.engageActivity?.value,
      expectations_for_learning: {
        expectations_for_listening_to_learn: form?.expectationsForListeningToLearn?.value,
        attention_signal: form?.attentionSignal?.value,
        conversation: form?.conversation?.map((option) => option?.value),
        help: form?.help?.map((option) => option?.value),
        activity: form?.activity?.map((option) => option?.value),
        movement: form?.movement?.map((option) => option?.value),
        participation: form?.participation?.map((option) => option?.value),
        success: form?.success?.map((option) => option?.value),
      },
      procedures_GERERAL: form?.procedureGeneral,
      procedures_DIFFERENTIATION: form?.procedureDifferentiation,
      lesson_summarization: form?.lessonSummarization,
      classwork_to_be_completed: {
        general: form?.general,
        differentiated_activities: form?.differentiatedActivities,
      },
      evaluation: form?.evaluationAssessment?.map((option) => option?.value),
      homework: form?.homeWorkIfAny,
      pupils_requiring_support: {
        targeted_support: form?.targetedSupports,
        individualized_support: form?.individualisedSupports,
      },
    };
    const shouldWeUpdateLessonPlan = lessonPlan?.data?._id;
    if (!!shouldWeUpdateLessonPlan) {
      updateLessonPlan.mutate({ id: lessonPlan?.data?._id, data });
    } else {
      createLessonPlan.mutate(data);
    }
  };

  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Qaf Lesson Plan</h2>
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
        <div className="d-flex align-items-center mb-3">
          <div className="w-50">
            <h3>School</h3>
            <Select
              value={currentSelectedSchool}
              className="basic-single mr-4"
              onChange={(e) => setCurrentSelectedSchool(e)}
              isSearchable={false}
              name="school"
              options={
                schools?.schoolInfo
                  ? schools?.schoolInfo.map((school) => ({
                    value: school?._id,
                    label: school?.name,
                  }))
                  : []
              }
            />
          </div>
          <div className="w-25">
            <h3>Educator</h3>
            <Select
              value={selectedEducator}
              className="basic-single mr-4"
              onChange={setSelectedEducator}
              name="educator"
              isSearchable={false}
              options={educatorsOptions}
            />
          </div>
          <div className="w-25">
            <h3>Grade</h3>
            <Select
              value={selectedGrade}
              className="basic-single mr-4"
              onChange={setSelectedGrade}
              name="grade"
              isSearchable={false}
              options={grades}
            />
          </div>
          <div className="w-25">
            <h3>Section</h3>
            <Select
              value={selectedSection}
              className="basic-single"
              onChange={setSelectedSection}
              isSearchable={false}
              name="section"
              options={sections}
            />
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="w-25">
            <h3>Period</h3>
            <Select
              value={selectedPeriod}
              className="basic-single mr-4"
              onChange={setSelectedPeriod}
              name="period"
              isSearchable={false}
              options={new Array(16).fill(0).map((_, i) => ({ value: i + 1, label: i + 1 }))}
            />
          </div>
          <div className="w-25">
            <h3>Subjects</h3>
            <Select
              value={selectedSubject}
              className="basic-single mr-4"
              onChange={setSelectedSubject}
              isSearchable={false}
              name="subjects"
              options={subjects2[selectedGrade?.value]}
            />
          </div>
          <div className="w-25">
            <h3>Term</h3>
            <Select
              value={currentSelectedTerm}
              className="basic-single mr-4"
              onChange={(e) => setCurrentSelectedTerm(e)}
              isSearchable={false}
              name="term"
              options={academicTerm}
            />
          </div>
          <div className="w-25">
            <h3>Year</h3>
            <Select
              className="basic-single mr-4 w-100"
              name="year"
              options={academicYear}
              value={currentSelectedYear}
              onChange={(e) => setCurrentSelectedYear(e)}
            />
          </div>
        </div>
        {lessonPlanLoading || lessonPlanIsFetching ? (
          <div className="lessonPlanLoader">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : shouldWeFetchLessonPlan ? (
          <Fragment>
            <div className="dropdown-divider my-5"></div>
            <center>
              <h2 className="mb-5" style={{ textDecoration: "underline" }}>
                Lesson Plan Form
              </h2>
            </center>
            <div className="d-flex align-items-center mb-3">
              <div className="w-25">
                <h5>Start Date</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={startDate}
                    className="form-control"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-25">
                <h5>End Date</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={endDate}
                    className="form-control"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-25">
                <h5>Duration</h5>
                <div className="mr-4">
                  <input
                    type="text"
                    value={duration}
                    className="form-control"
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-25">
                <h5>Roll No</h5>
                <div>
                  <input
                    type="number"
                    value={rollNo}
                    className="form-control"
                    onChange={(e) => setRollNo(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <form onSubmit={uploadLessonPlanOnServer} className="mb-5 mt-4">
              <div className="d-flex align-items-center">
                <div className="w-25">
                  <h5>THEME</h5>
                  <Select
                    value={form?.theme || null}
                    onChange={(e) => setForm({ ...form, theme: e })}
                    className="basic-single mr-4"
                    name="theme"
                    isSearchable={false}
                    options={qatLessonPlanThemes2[selectedGrade?.value]}
                  />
                </div>
                <div className="w-25">
                  <h5>TOPIC</h5>
                  <Select
                    value={form?.topic || null}
                    onChange={(e) => setForm({ ...form, topic: e })}
                    className="basic-single mr-4"
                    name="topic"
                    isSearchable={false}
                    options={topicsOrSubtopics2[selectedGrade?.value]}
                  />
                </div>
                <div className="w-25">
                  <h5>TARGETS (If any)</h5>
                  <Select
                    value={form?.targets || null}
                    onChange={(e) => setForm({ ...form, targets: e })}
                    className="basic-single mr-4"
                    name="targets"
                    isSearchable={false}
                    options={qafTarget2[selectedGrade?.value]}
                  />
                </div>
                <div className="w-25">
                  <h5>STRAND</h5>
                  <Select
                    value={form?.strand || null}
                    onChange={(e) => setForm({ ...form, strand: e })}
                    className="basic-single mr-4 w-100"
                    name="strand"
                    isSearchable={false}
                    options={qafStrand2[selectedGrade?.value]}
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <h5 className="font-xs test-xs">By the end of the lesson, pupils should be able to:</h5>
                <textarea

                  value={form?.pupilsShouldBeAbleTo || ""}
                  onChange={(e) => setForm({ ...form, pupilsShouldBeAbleTo: e.target.value })}
                  type="text"
                  className="form-control"
                  name="pupilsShouldBeAbleTo"
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <h5 className="font-xs test-xs">STUDENT'S PRIOR KNOWLEDGE</h5>
                <textarea

                  value={form?.studentsPriorKnowledge || ""}
                  onChange={(e) => setForm({ ...form, studentsPriorKnowledge: e.target.value })}
                  type="text"
                  className="form-control"
                  name="studentsPriorKnowledge"
                ></textarea>
              </div>
              <div className="w-100 mt-4">
                <h5>TEACHING STRATEGIES</h5>
                <Select
                  value={form?.teachingStrategies || null}
                  onChange={(e) => setForm({ ...form, teachingStrategies: e })}
                  className="basic-single mr-4 w-100"
                  name="teachingStrategies"
                  isSearchable={false}
                  options={qafTeachingStrategies}
                />
              </div>
              <div className="mt-4">
                <h5>TEACHING AIDS & RESOURCES </h5>
                <div className="d-flex align-items-center mt-2">
                  <div className="form-group w-100">
                    <label className="font-xs test-xs">General Resources including manipulatives</label>
                    <textarea
                      value={form?.generalResources || ""}
                      onChange={(e) => setForm({ ...form, generalResources: e.target.value })}
                      type="text"
                      className="form-control"
                      name="generalResources"
                    ></textarea>
                  </div>
                  <div className="form-group w-100 ml-5">
                    <label className="font-xs test-xs">Multisensory strategies</label>
                    <textarea
                      value={form?.multiSensoryStrategies || ""}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          multiSensoryStrategies: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      name="multiSensoryStrategies"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-100 mt-2">
                <h5>CLASSROOM SET-UP</h5>
                <Select
                  value={form?.classroomSetUp || null}
                  onChange={(e) => setForm({ ...form, classroomSetUp: e })}
                  className="basic-single mr-4 w-100"
                  name="classroomSetUp"
                  isSearchable={false}
                  options={qafClassSetup}
                />
              </div>
              <div className="mt-4">
                <h5>BEHAVIOR MANAGEMENT STRATEGIES </h5>
                <div className="d-flex align-items-center">
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Reinforcement strategy</label>
                    <Select
                      value={form?.reinfocementStrategy || null}
                      onChange={(e) => setForm({ ...form, reinfocementStrategy: e })}
                      className="basic-single mr-4 w-100"
                      name="reinfocementStrategy"
                      isMulti
                      isSearchable={false}
                      options={reinforcementStrategy}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Examples of Reinforcers </label>
                    <Select
                      value={form?.examplesOfReinforcers || null}
                      onChange={(e) => setForm({ ...form, examplesOfReinforcers: e })}
                      isMulti
                      className="basic-single mr-4 w-100"
                      name="examplesOfReinforcers"
                      isSearchable={false}
                      options={examplesOfReinforcers}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Handling Disruptions</label>
                    <Select
                      value={form?.handlingDisruptions || null}
                      onChange={(e) => setForm({ ...form, handlingDisruptions: e })}
                      isMulti
                      className="basic-single mr-4 w-100"
                      name="handlingDisruptions"
                      isSearchable={false}
                      options={qafHandlingDisruptions}
                    />
                  </div>
                  <div className="w-50 mr-4">
                    <label className="font-xs text-xs">Logical consequence for simple choice strategy </label>
                    <Select
                      value={form?.logicalConsequenceForSimpleChoiceStrategy || null}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          logicalConsequenceForSimpleChoiceStrategy: e,
                        })
                      }
                      isMulti
                      className="basic-single mr-4 w-100"
                      name="logicalConsequenceForSimpleChoiceStrategy"
                      isSearchable={false}
                      options={logicalConsequencesForSimpleChoice}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div className="w-30">
                  <h5>ENGAGEMENT ACTIVITY</h5>
                  <Select
                    value={form?.engageActivity || null}
                    onChange={(e) => setForm({ ...form, engageActivity: e })}
                    className="basic-single mr-4 w-100"
                    name="engageActivity"
                    isSearchable={false}
                    options={qafEngagementActivities}
                  />
                </div>
                <div className="form-group w-80 ml-4">
                  <label className="font-xs test-xs">Please specify</label>
                  <textarea
                    value={form?.engagementActivityBrief || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        engagementActivityBrief: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    name="engagementActivityBrief"
                    rows={1}
                  ></textarea>
                </div>
              </div>
              <div className="mt-2">
                <h5>EXPECTATIONS FOR LEARNING</h5>
                <div className="d-flex align-items-center">
                  <div className="w-40 mr-4">
                    <label className="font-xs text-xs">Expectations for listening to learn</label>
                    <Select
                      value={form?.expectationsForListeningToLearn || null}
                      onChange={(e) => setForm({ ...form, expectationsForListeningToLearn: e })}
                      className="basic-single mr-4 w-100"
                      name="expectationsForListeningToLearn"
                      isSearchable={false}
                      options={qafExpectationsForListeningToLearn}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Attention signal</label>
                    <Select
                      value={form?.attentionSignal || null}
                      onChange={(e) => setForm({ ...form, attentionSignal: e })}
                      className="basic-single mr-4 w-100"
                      name="attentionSignal"
                      isSearchable={false}
                      options={qafAttentionSignal}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Conversation</label>
                    <Select
                      value={form?.conversation || null}
                      onChange={(e) => setForm({ ...form, conversation: e })}
                      className="basic-single mr-4 w-100"
                      isMulti
                      name="conversation"
                      isSearchable={false}
                      options={qafConversation}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Help</label>
                    <Select
                      value={form?.help || null}
                      onChange={(e) => setForm({ ...form, help: e })}
                      className="basic-single mr-4 w-100"
                      isMulti
                      name="help"
                      isSearchable={false}
                      options={qafHelp}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <div className="w-40 mr-4">
                    <label className="font-xs text-xs">Activity</label>
                    <Select
                      value={form?.activity || null}
                      onChange={(e) => setForm({ ...form, activity: e })}
                      className="basic-single mr-4 w-100"
                      isMulti
                      name="activity"
                      isSearchable={false}
                      options={qafActivity}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Movement</label>
                    <Select
                      value={form?.movement || null}
                      onChange={(e) => setForm({ ...form, movement: e })}
                      className="basic-single mr-4 w-100"
                      isMulti
                      name="movement"
                      isSearchable={false}
                      options={qafMovement}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Participation</label>
                    <Select
                      value={form?.participation || null}
                      onChange={(e) => setForm({ ...form, participation: e })}
                      className="basic-single mr-4 w-100"
                      isMulti
                      name="participation"
                      isSearchable={false}
                      options={qafParticipation}
                    />
                  </div>
                  <div className="w-25 mr-4">
                    <label className="font-xs text-xs">Success</label>
                    <Select
                      value={form?.success || null}
                      onChange={(e) => setForm({ ...form, success: e })}
                      className="basic-single mr-4 w-100"
                      isMulti
                      name="success"
                      isSearchable={false}
                      options={qafSuccess}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-4">
                <h5 className="font-xs test-xs">PROCEDURES (GENERAL)</h5>
                <textarea

                  value={form?.procedureGeneral || ""}
                  onChange={(e) => setForm({ ...form, procedureGeneral: e.target.value })}
                  type="text"
                  className="form-control"
                  name="procedureGeneral"
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <h5 className="font-xs test-xs">PROCEDURES (DIFFERENTIATION)</h5>
                <textarea

                  value={form?.procedureDifferentiation || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      procedureDifferentiation: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  name="procedureDifferentiation"
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <h5 className="font-xs test-xs">LESSON SUMMARIZATION</h5>
                <textarea

                  value={form?.lessonSummarization || ""}
                  onChange={(e) => setForm({ ...form, lessonSummarization: e.target.value })}
                  type="text"
                  className="form-control"
                  name="lessonSummarization"
                ></textarea>
              </div>
              <div className="w-100 mt-4">
                <h5>EVALUATION/ ASSESSMENT</h5>
                <Select
                  value={form?.evaluationAssessment || null}
                  onChange={(e) => setForm({ ...form, evaluationAssessment: e })}
                  className="basic-single mr-4 w-100"
                  isMulti
                  name="evaluationAssessment"
                  isSearchable={false}
                  options={assessmentOptions}
                />
              </div>
              <div className="mt-4">
                <h5>CLASSWORK TO BE COMPLETED </h5>
                <div className="d-flex align-items-center mt-2">
                  <div className="form-group w-100">
                    <label className="font-xs test-xs">General:</label>
                    <textarea
                      value={form?.general || ""}
                      onChange={(e) => setForm({ ...form, general: e.target.value })}
                      type="text"
                      className="form-control"
                      name="general"
                    ></textarea>
                  </div>
                  <div className="form-group w-100 ml-5">
                    <label className="font-xs test-xs">Differentiated Activities</label>
                    <textarea
                      value={form?.differentiatedActivities || ""}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          differentiatedActivities: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      name="differentiatedActivities"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group mt-2">
                <h5 className="font-xs test-xs">HOMEWORK IF ANY </h5>
                <textarea

                  value={form?.homeWorkIfAny || ""}
                  onChange={(e) => setForm({ ...form, homeWorkIfAny: e.target.value })}
                  type="text"
                  className="form-control"
                  name="homeWorkIfAny"
                ></textarea>
              </div>
              <div className="mt-4">
                <h5>PUPILS REQUIRING SUPPORTS </h5>
                <div className="d-flex align-items-center mt-2">
                  <div className="form-group w-100">
                    <label className="font-xs test-xs">Targeted support</label>
                    <textarea
                      value={form?.targetedSupports || ""}
                      onChange={(e) => setForm({ ...form, targetedSupports: e.target.value })}
                      type="text"
                      className="form-control"
                      name="targetedSupports"
                    ></textarea>
                  </div>
                  <div className="form-group w-100 ml-5">
                    <label className="font-xs test-xs">Individualised support</label>
                    <textarea
                      value={form?.individualisedSupports || ""}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          individualisedSupports: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      name="individualisedSupports"
                    ></textarea>
                  </div>
                </div>
              </div>
              <center className="mt-5">
                <button className="primaryButton" type="submit">
                  {lessonPlanIsError ? "Save" : "Update"}
                </button>
              </center>
            </form>
          </Fragment>
        ) : null}
      </Container>
    </div>
  );
};

export { QafLessonPlan };

