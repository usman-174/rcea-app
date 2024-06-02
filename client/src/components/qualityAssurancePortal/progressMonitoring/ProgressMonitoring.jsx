import React, { useState, useEffect } from "react";
import Select from "react-select";
import { sections, grades, months, language } from "../../../utils/globals";
import { Alert, Button, Container, Spinner } from "react-bootstrap";
import { InputField } from "../../inputField";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import AxiosConfig from "../../../utils/axiosConfig";
import { errorToast, successToast } from "../../../utils";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";
const ProgressMonitoring = () => {
  const { selectedYear } = useSelector((state) => state.academics);
  const { selectedSchool } = useSelector((state) => state.school);
 
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successSave, setSuccessSave] = useState(false);
  const [teacherData, setTeacherData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  const handleChange = (selectedOption) => {
    setSelectedMonth(selectedOption.value);
  };
  
  const getWeeksInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const totalWeeks = Math.ceil((totalDays + firstDay.getDay()) / 7);
    return totalWeeks;
  };
  
  const handleMeasureChange = (teacherIndex, e) => {
    setTeacherData((prevData) =>
      prevData.map((teacher, index) => {
        if (index === teacherIndex) {
          return { ...teacher, measure: e.target.value };
        }
        return teacher;
      })
    );
  };
  
  const handleBenchmarkDateChange = (teacherIndex, value) => {
    setTeacherData((prevData) =>
      prevData.map((teacher, index) => {
        if (index === teacherIndex) {
          return { ...teacher, benchmarkDate: value };
        }
        return teacher;
      })
    );
  };
  
  const isSlot = () => {
    const weeksInMonth = getWeeksInMonth(selectedMonth, selectedYear);
    return teacherData[0]?.scores?.length < weeksInMonth;
  };
  
  const generateID = () => {
    const uuid = uuidv4().replace(/-/g, ""); // Remove hyphens from the UUID
    const objectId = `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(
      12,
      16
    )}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
    return objectId;
  };
  
  const getMaxLengthArray = (data) => {
    if (data?.length) {
      const maxLength = Math?.max(...data?.map((obj) => obj.scores.length));
      const maxLengthArray = Array(maxLength).fill({ correct: 0, errors: 0 });
      return maxLengthArray;
    }
    return [{ correct: 0, errors: 0 }];
  };
  
 
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        try {
          const [teachersResponse, screenDataResponse] = await Promise.all([
            AxiosConfig.get("/teacher/allbysection/" + selectedSchool._id),
            AxiosConfig.post("/progressmonitoring/all", {
              grade: selectedGrade.value,
              section: selectedSection.value,
              month: months[selectedMonth]?.label,
              year: selectedYear,
              language: selectedLanguage.value,
            }),
          ]);
  
          const teachers = teachersResponse.data;
          const screenData = screenDataResponse.data;
          const updatedTeachers = teachers.map((teacher) => {
            const submission = screenData.find(
              (submission) => submission?.teacher_id?._id === teacher._id
            );
  
            return {
              ...teacher,
              name: teacher.firstName + " " + teacher.lastName,
              _id: submission?._id || generateID(),
              teacherId: teacher._id,
              scores: submission
                ? submission.scores
                : getMaxLengthArray(screenData).map((obj) => {
                    const { _id, ...rest } = obj;
                    return rest;
                  }),
              grade: submission ? submission.grade : selectedGrade.value,
              section: submission ? submission.section : selectedSection.value,
              measure: submission ? submission.measure : "",
              language: submission ? submission.language : selectedLanguage.value,
              benchmarkDate: submission ? submission.benchmarkDate : "",
              year: parseInt(selectedYear),
              month: months[selectedMonth].label,
            };
          });
  
          const initialWeeks = updatedTeachers[0]?.scores.map(
            (_, index) => `week ${index + 1}`
          );
  
          setTeacherData(updatedTeachers);
          setWeeks(initialWeeks);
        } catch (err) {
          setError(err.message || err.response.data.message);
        } finally {
          setLoading(false);
        }
      };
  
      if (
        selectedGrade &&
        selectedSection &&
        selectedLanguage &&
        months[selectedMonth]
      ) {
        fetchData();
      }
    }, [
      selectedLanguage,
      selectedGrade,
      selectedSection,
      selectedSchool._id,
      selectedYear,
      successSave,
      selectedMonth,
    ]);
  
    const addWeekColumn = () => {
      const weekCount = weeks.length + 1;
      const newWeek = `week ${weekCount} `;
  
      setWeeks([...weeks, newWeek]);
      setTeacherData((prevData) =>
        prevData.map((teacher) => {
          teacher.scores.push({ correct: 0, errors: 0 });
          return teacher;
        })
      );
    };
  
    const handleSave = async () => {
      try {
        await AxiosConfig.post("/progressmonitoring/create", {
          result: teacherData,
        });
  
        successToast("Progress Monitoring Created successfully");
        setSuccessSave(true);
      } catch (err) {
        errorToast("An error occurred. Please try again.");
      }
    };
  
    const handleScoreChange = (teacherIndex, scoreIndex, field, value) => {
      const updatedData = teacherData.map((teacher, index) => {
        if (index === teacherIndex) {
          const updatedScores = teacher.scores.map((score, sIndex) => {
            if (sIndex === scoreIndex) {
              return { ...score, [field]: value };
            }
            return score;
          });
          return { ...teacher, scores: updatedScores };
        }
        return teacher;
      });
      setTeacherData(updatedData);
    };
  
    const removeWeekColumn = () => {
      if (weeks.length > 0) {
        setWeeks((prevWeeks) => prevWeeks.slice(0, -1));
        setTeacherData((prevData) =>
          prevData.map((teacher) => {
            teacher.scores.pop();
            return teacher;
          })
        );
      }
    };
  
  

  return (
    <div>
     
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Progress Monitoring</h2>
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
        <div className="d-flex align-items-center mb-3">
          <div className="w-25">
            <h3>Grade</h3>
            <Select
              value={selectedGrade}
              className="basic-single mr-4"
              onChange={(e) => setSelectedGrade(e)}
              name="grade"
              
              isSearchable={false}
              options={grades}
            />
          </div>
          <div className="w-25">
            <h3>Section</h3>
            <Select
              value={selectedSection}
              className="basic-single mr-4"
              onChange={(e) => setSelectedSection(e)}
              
              isSearchable={false}
              name="section"
              options={sections}
            />
          </div>
          <div className="w-25">
            <h3>Month</h3>
            <Select
              className="basic-single mr-4"
              name="month"
              options={months}
              value={months[selectedMonth]}
              onChange={handleChange}
            />
          </div>
          <div className="w-25">
            <h3>Subject</h3>
            <Select
              value={selectedLanguage}
              className="basic-single"
              onChange={(e) => setSelectedLanguage(e)}
             
              isSearchable={false}
              name="language"
              options={language}
            />
          </div>
        </div>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : selectedGrade &&
          selectedSection &&
          selectedLanguage &&
          months[selectedMonth] ? (
          <>
            {teacherData.length > 0 ? (
              <>
                <Button
                  onClick={addWeekColumn}
                  size="sm"
                  className="m-3 primaryButton"
                  disabled={!isSlot()}
                >
                  Add Week
                </Button>
                <Button
                  onClick={removeWeekColumn}
                  size="sm"
                  className="m-3 primaryButton"
                >
                  Remove Latest Week
                </Button>
                <div className="scroll-auto overflow-auto">
                  <table className="table text-center mx-auto table-responsive">
                    <thead>
                      <tr className="fs-16">
                        <th className="min-w-180">Student</th>
                        <th className="min-w-100">Measure</th>
                        <th>Benchmark Date</th>
                        {weeks.map((week, index) => (
                          <React.Fragment key={index}>
                            <th
                              style={{
                                minWidth: `${100 / (weeks.length + 1)}%`,
                              }}
                            >
                              {week}_correct
                            </th>
                            <th
                              style={{
                                minWidth: `${100 / (weeks.length + 1)}%`,
                              }}
                            >
                              {week}_error
                            </th>
                          </React.Fragment>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {teacherData.map((teacher, teacherIndex) => (
                        <tr key={teacherIndex}>
                          <td>{teacher.name}</td>
                          <td>
                            <InputField
                              type="text"
                              className="text-center"
                              value={teacher.measure}
                              onChange={(e) =>
                                handleMeasureChange(teacherIndex, e)
                              }
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="date"
                              value={teacher.benchmarkDate}
                              onChange={(e) =>
                                handleBenchmarkDateChange(
                                  teacherIndex,
                                  e.target.value
                                )
                              }
                            />
                          </td>
                          {teacher.scores.map((score, scoreIndex) => (
                            <React.Fragment key={scoreIndex}>
                              <td>
                                <InputField
                                  type="number"
                                  min="0"
                                  className="text-center"
                                  value={score.correct}
                                  onChange={(e) =>
                                    handleScoreChange(
                                      teacherIndex,
                                      scoreIndex,
                                      "correct",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <InputField
                                  type="number"
                                  min="0"
                                  className="text-center"
                                  value={score.errors}
                                  onChange={(e) =>
                                    handleScoreChange(
                                      teacherIndex,
                                      scoreIndex,
                                      "errors",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </React.Fragment>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-5">
              <Button className="primaryButton" onClick={handleSave}>
                Submit
              </Button>
            </div>
              </>
            ) : (
              <h2 className="mx-auto text-center p-5">No teachers Exist</h2>
            )}
           
          </>
        ) : null}
      </Container>
    </div>
  );
};

export { ProgressMonitoring };
