import React, { Fragment, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Select from "react-select";
import AxiosConfig from "../../../utils/axiosConfig";
import { grades } from "../../../utils/globals";
import { Spinner } from "../../spinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";
import { errorToast, successToast } from "../../../utils";

const InitialState = {
  teacher: "",
  school: "",
  observer: "",
  subject_taught: "",
  topic: "",
  grade: 0,
  term: 0,
  year: 0,
  observation_duration: "",
  visit_date: new Date(),
  number_of_pupil: 0,
  profiling_A: "",
  planning_A: "",
  planning_B: "",
  planning_C: "",
  planning_D: "",
  planning_E: "",
  lesson_A: "",
  lesson_B: "",
  lesson_C: "",
  lesson_D: "",
  lesson_E: "",
  lesson_F: "",
  lesson_G: "",
  managment_A: "",
  managment_B: "",
  managment_C: "",
  assessment_A: "",
  assessment_B: "",
  assessment_C: "",
  assessment_D: "",
  assessment_E: "",
  assessment_F: "",
  assessment_G: "",
  feedback_A: "",
  feedback_B: "",
  personality_A: "",
  personality_B: "",
  personality_C: "",
  post_lesson_observation: "",
  signature_of_observer: "",
  signature_of_teacher: "",
};
const QafClassVisit = () => {
  const [formData, setFormData] = useState(InitialState);
  const { selectedYear, selectedTerm } = useSelector((state) => state.academics);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { selectedSchool } = useSelector((state) => state.school);
  // const [selectedTerm, setSelectedTerm] = useState(academicTerm[0]);
  var Panel = Collapse.Panel;
  // console.log(selectedTerm);
  const [currentSelectedSchool, setCurrentSelectedSchool] = useState({
    value: selectedSchool._id,
    label: selectedSchool.name,
  });

  const schools = useSelector((state) => state.school);
  const [selectedGrade, setSelectedGrade] = useState(null);
  // const [selectedSection, setSelectedSection] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
  const [loadingTeachers, setLoadingTeachers] = useState(false);

  const shouldFetch = selectedGrade && selectedTeacher && date && currentSelectedSchool;
  const query = {
    grade: selectedGrade?.value,
    date,
    teacher: selectedTeacher?.value,
    term: selectedTerm?.value,
    year: selectedYear,
    school: currentSelectedSchool?.value,
  };
  const {
    data: classVisitData,
    isLoading: classVisitIsLoading,
    isFetching: classVisitIsFetching,
    isError: classVisitError,
    isFetched: classVisitIsFetched,
    error: classVisitErrorData,
  } = useQuery({
    queryKey: ["classVisit", query],
    queryFn: async ({ queryKey }) => {
      // eslint-disable-next-line
      const [_, parameters] = queryKey;
      const response = await AxiosConfig.get("qaf/classvisit/get", {
        params: {
          grade: parameters.grade,
          date: parameters.date,
          term: parameters.term,
          year: parameters.year,
          school: parameters.school,
          teacher: parameters.teacher,
        },
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!shouldFetch,
  });
  const createClassVisit = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosConfig.post(`/qaf/classvisit/`, data?.data);
      return response.data;
    },
    onSuccess: () => {
      successToast("ClassVisitupdated successfully");
    },
    onError: () => {
      errorToast("An error occurred. Please try again.");
    },
    onSettled: () => {
      setError("");
    },
  });
  const updateClassVisit = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosConfig.put(`/qaf/classvisit/update/${classVisitData.data._id}`, data?.data);
      return response.data;
    },
    onSuccess: () => {
      successToast("ClassVisit updated successfully");
    },
    onError: (err) => {
      errorToast("An error occurred. Please try again.");
    },
    onSettled: () => {
      setError("");
    },
  });
  const handleSave = async () => {
    const data = {
      ...formData,
      visit_date: date,
      school: currentSelectedSchool?.value,
      teacher: selectedTeacher?.value,
      grade: selectedGrade?.value,
      term: selectedTerm,
      year: selectedYear,
    };
    if (classVisitData?.data) {
      updateClassVisit.mutate({ data });
      return;
    }
    createClassVisit.mutate({ data });
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoadingTeachers(true);

      try {
        const { data } = await AxiosConfig.get("/teacher/allbysection/" + currentSelectedSchool.value);

        setTeachers(data);
      } catch (err) {
        setError(err.message || err.response.data.message);
        setLoadingTeachers(false);
      } finally {
        setLoadingTeachers(false);
      }
    };

    fetchData();
  }, [currentSelectedSchool.value]);
  useEffect(() => {
    setError("");
    if (classVisitData?.data) {
      setFormData({ ...formData, ...classVisitData?.data });
    } else if (classVisitError && classVisitIsFetched) {
      if (classVisitErrorData?.response?.data?.error.includes("not found")) {
        setFormData(InitialState);
      } else {
        setError(classVisitErrorData.response.data.error);
      }
    }
    // eslint-disable-next-line
  }, [classVisitData, classVisitError]);
  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Qaf Class Visit</h2>
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
        <div className="d-flex align-items-center mx-2 flex-md-row flex-column ">
          <div className="w-md-50  w-100">
            <h3>School</h3>
            <Select
              value={currentSelectedSchool}
              className="basic-single mr-4"
              onChange={(e) => {
                console.log(e);
                setCurrentSelectedSchool(e);
              }}
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
          <div className="w-md-25 w-100">
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
          <div className="w-md-25 mx-2  w-100">
            <h3>Date of Visit</h3>
            <input type="date" value={date} className=" form-control" onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        <div className="w-md-25 w-100 mx-2 my-1">
          <h3>Teacher</h3>
          <Select
            value={selectedTeacher}
            className="basic-single"
            isDisabled={loadingTeachers}
            onChange={setSelectedTeacher}
            isSearchable={false}
            name="teacher"
            options={teachers.map((teacher) => ({
              value: teacher._id,
              label: teacher.firstName + " " + teacher.lastName,
            }))}
          />
        </div>

        {classVisitIsLoading || classVisitIsFetching ? (
          <div className="schemeOfPlanLoader">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : classVisitIsFetched ? (
          <Fragment>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="observer">Observer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="observer"
                    value={formData?.observer}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject_taught">Subject Taught</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject_taught"
                    value={formData?.subject_taught}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="topic">Topic</label>
                  <input
                    type="text"
                    className="form-control"
                    name="topic"
                    value={formData?.topic}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="observation_duration">Observation Duration</label>
                  <input
                    type="number"
                    className="form-control"
                    name="observation_duration"
                    value={formData?.observation_duration}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="number_of_pupil">Number of Pupils</label>
                  <input
                    type="number"
                    className="form-control"
                    name="number_of_pupil"
                    value={formData?.number_of_pupil}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <Collapse accordion={true}
            >
              <Panel header="PROFILING OF STUDENTS">
                <div className="form-group">
                  <label htmlFor="profiling_A" className="font-xs test-xs">
                    Educator conducts proper profiling of their students based on their learning abilities and
                    performance
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="profiling_A"
                    value={formData?.profiling_A}
                    onChange={handleChange}
                  >
                    {formData?.profiling_A}
                  </textarea>
                </div>
              </Panel>
              <Panel header="Planning">
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="planning_A" className="font-xs test-xs">
                        Scheme of Work (in line with curricular objectives set down in NCF)
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="planning_A"
                        value={formData?.planning_A}
                        onChange={handleChange}
                      >
                        {formData?.planning_A}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="planning_B" className="font-xs test-xs">
                        Weekly Plan
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="planning_B"
                        value={formData?.planning_B}
                        onChange={handleChange}
                      >
                        {formData?.planning_B}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="planning_C" className="font-xs test-xs">
                        Lesson Plan (clear learning outcomes,varied teaching strategies,evaluation tools)
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="planning_C"
                        value={formData?.planning_C}
                        onChange={handleChange}
                      >
                        {formData?.planning_C}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="planning_D" className="font-xs test-xs">
                        Remedial Plan{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="planning_D"
                        value={formData?.planning_D}
                        onChange={handleChange}
                      >
                        {formData?.planning_D}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="form-group">
                      <label htmlFor="planning_E" className="font-xs test-xs">
                        Other{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="planning_E"
                        value={formData?.planning_E}
                        onChange={handleChange}
                      >
                        {formData?.planning_E}
                      </textarea>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Lesson Managment">
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="lesson_A" className="font-xs test-xs">
                        Introduction of lesson; Testing of Prior Learning
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_A"
                        value={formData?.lesson_A}
                        onChange={handleChange}
                      >
                        {formData?.lesson_A}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lesson_B" className="font-xs test-xs">
                        Clarity of Objectives and Learning Outcomes
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_B"
                        value={formData?.lesson_B}
                        onChange={handleChange}
                      >
                        {formData?.lesson_B}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lesson_E" className="font-xs test-xs">
                        Use of Educational Resources{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_E"
                        value={formData?.lesson_E}
                        onChange={handleChange}
                      >
                        {formData?.lesson_E}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="lesson_C" className="font-xs test-xs">
                        Knowledge of Subject area{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_C"
                        value={formData?.lesson_C}
                        onChange={handleChange}
                      >
                        {formData?.lesson_C}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lesson_D" className="font-xs test-xs">
                        Remedial Plan{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_D"
                        value={formData?.lesson_D}
                        onChange={handleChange}
                      >
                        {formData?.lesson_D}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lesson_F" className="font-xs test-xs">
                        Pacing of Lesson Delivery{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_F"
                        value={formData?.lesson_F}
                        onChange={handleChange}
                      >
                        {formData?.lesson_F}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="form-group">
                      <label htmlFor="lesson_G" className="font-xs test-xs">
                        Use of Inclusive/ Innovative Strategies to cater for Learners with Mixed Abilities{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="lesson_G"
                        value={formData?.lesson_G}
                        onChange={handleChange}
                      >
                        {formData?.lesson_G}
                      </textarea>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Class Managment">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="managment_A" className="font-xs test-xs">
                        Ability to maintain Discipline in the Classroom
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="managment_A"
                        value={formData?.managment_A}
                        onChange={handleChange}
                      >
                        {formData?.managment_A}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="managment_B" className="font-xs test-xs">
                        Classroom Environment (conducive to learning)
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="managment_B"
                        value={formData?.managment_B}
                        onChange={handleChange}
                      >
                        {formData?.managment_B}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="managment_C" className="font-xs test-xs">
                        Teacher/Student Interaction and Class Coverage
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="managment_C"
                        value={formData?.managment_C}
                        onChange={handleChange}
                      >
                        {formData?.managment_C}
                      </textarea>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="ASSESSMENT & EVALUATION OF LEARNING">
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="assessment_A" className="font-xs test-xs">
                        Markbook (including Performance Analysis of each Grade){" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_A"
                        value={formData?.assessment_A}
                        onChange={handleChange}
                      >
                        {formData?.assessment_A}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="assessment_B" className="font-xs test-xs">
                        Assessment for Learning:Classwork, Homework
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_B"
                        value={formData?.assessment_B}
                        onChange={handleChange}
                      >
                        {formData?.assessment_B}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="assessment_C" className="font-xs test-xs">
                        Assessment for Learning: Monitoring of Students' Copybooks{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_C"
                        value={formData?.assessment_C}
                        onChange={handleChange}
                      >
                        {formData?.assessment_C}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="assessment_D" className="font-xs test-xs">
                        Assessment for Learning: Questioning Techniques, etc{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_D"
                        value={formData?.assessment_D}
                        onChange={handleChange}
                      >
                        {formData?.assessment_D}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="assessment_E" className="font-xs test-xs">
                        Assessment of learning: Written Assessment{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_E"
                        value={formData?.assessment_E}
                        onChange={handleChange}
                      >
                        {formData?.assessment_E}
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="assessment_F" className="font-xs test-xs">
                        Assessment of Learning:Project work/ Research{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_F"
                        value={formData?.assessment_F}
                        onChange={handleChange}
                      >
                        {formData?.assessment_F}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="form-group">
                      <label htmlFor="assessment_G" className="font-xs test-xs">
                        Other
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="assessment_G"
                        value={formData?.assessment_G}
                        onChange={handleChange}
                      >
                        {formData?.assessment_G}
                      </textarea>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="FEEDBACK & MONITORING OF STUDENTS' PROGRESS">
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="feedback_A" className="font-xs test-xs">
                        Timely Feedback to Students/Parents/HoD{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="feedback_A"
                        value={formData?.feedback_A}
                        onChange={handleChange}
                      >
                        {formData?.feedback_A}
                      </textarea>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="feedback_B" className="font-xs test-xs">
                        Implementation & Monitoring of Remedial Plan{" "}
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="feedback_B"
                        value={formData?.feedback_B}
                        onChange={handleChange}
                      >
                        {formData?.feedback_B}
                      </textarea>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Personality and Leadership Skills">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="personality_A" className="font-xs test-xs">
                        Work Attitude{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="personality_A"
                        value={formData?.personality_A}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="personality_B" className="font-xs test-xs">
                        Communication Skills{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="personality_B"
                        value={formData?.personality_B}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="personality_C" className="font-xs test-xs">
                        Interpersonal Skills
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="personality_C"
                        value={formData?.personality_C}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <div className="mt-2 d-flex align-items-center justify-content-between">
              <div className="form-group">
                <label htmlFor="signature_of_observer" className="font-xs test-xs">
                  Observer Signature
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="signature_of_observer"
                  value={formData?.signature_of_observer}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signature_of_teacher" className="font-xs test-xs">
                  Teacher Signature
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="signature_of_teacher"
                  value={formData?.signature_of_teacher}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <center>
              <div className="d-flex justify-content-center align-items-center mb-5">
                <button onClick={handleSave} className="primaryButton mt-5">
                  Submit
                </button>
              </div>
            </center>
            <br />
          </Fragment>
        ) : null}
      </Container>
    </div>
  );
};

export { QafClassVisit };
