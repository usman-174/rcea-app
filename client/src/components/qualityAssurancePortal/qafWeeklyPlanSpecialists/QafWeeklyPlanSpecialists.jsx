import { useMutation, useQuery } from "@tanstack/react-query";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Select from "react-select";
import { errorToast, successToast } from "../../../utils";
import AxiosConfig from "../../../utils/axiosConfig";
import {
  academicTerm,
  grades,
  sections,
  specialization,
  // specialization,
  subjects2,
  topicsOrSubtopics2,
} from "../../../utils/globals";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const QafWeeklyPlanSpecialists = () => {
  const { selectedTerm, selectedYear } = useSelector(
    (state) => state.academics
  );
  const { selectedSchool } = useSelector((state) => state.school);
  const [currentSelectedTerm, setCurrentSelectedTerm] = useState({
    value: selectedTerm,
    label: selectedTerm,
  });
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedEducator, setSelectedEducator] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedDays, setSelectedDays] = useState(["", "", "", "", ""]);
  const [form, setForm] = useState([]);
  const updatedSuccessfully = useRef(false);

  const shouldWeFetchSchemeOfPlan =
    selectedTerm &&
    selectedEducator &&
    selectedWeek &&
    selectedSpecialization &&
    selectedDays.some((day) => day !== "");

  const {
    data: schemeOfPlan,
    isLoading: schemeOfPlanLoading,
    isFetching: schemeOfPlanIsFetching,
    refetch: refetchSchemeOfPlan,
  } = useQuery({
    queryKey: [
      "schemeOfPlanForSpecialists",
      {
        teacher: selectedEducator?.value,
        term: currentSelectedTerm?.value,
        school: selectedSchool?._id,
        year: selectedYear,
        week_no: selectedWeek?.value,
        specialization: selectedSpecialization?.value,
        days: `${JSON.stringify(selectedDays.filter((day) => day !== ""))}`,
      },
    ],
    queryFn: async ({ queryKey }) => {
      const [, parameters] = queryKey;
      const response = await AxiosConfig.get("qaf/WeeklyPlanSpecialists/get", {
        params: parameters,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!shouldWeFetchSchemeOfPlan,
  });

  const schoolId = selectedSchool?._id;

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

  const createWeeklyPlanSpecialists = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosConfig.post(
        "/qaf/WeeklyPlanSpecialists/create",
        data
      );
      return response.data;
    },
    onSuccess: () => {
      if (updatedSuccessfully.current) {
        successToast("Weekly Plan Specialists added successfully");
        updatedSuccessfully.current = false;
        refetchSchemeOfPlan();
      }
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

  const updateWeeklyPlanSpecialists = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosConfig.put(
        `/qaf/WeeklyPlanSpecialists/update/${data?.id}`,
        data?.data
      );
      return response.data;
    },
    onSuccess: () => {
      if (updatedSuccessfully.current) {
        successToast("Weekly Plan Specialists updated successfully");
        updatedSuccessfully.current = false;
      }
    },
    onError: (err) => {
      errorToast("An error occurred. Please try again.");
    },
  });

  useEffect(() => {
    if (!!schemeOfPlan) {
      const formArr = [];
      selectedDays
        .filter((day) => day !== "")
        .forEach((day, index) => {
          const dayData = schemeOfPlan?.data?.find(
            (item) => item.day === day.slice(0, 1).toUpperCase() + day.slice(1)
          );
          if (!!dayData) {
            formArr[index] = [
              {
                day: dayData.day,
                data: [
                  ...dayData?.planData?.map((row) => {
                    return {
                      period: {
                        value: row.period_no,
                        label: row.period_no,
                      },
                      subjects: {
                        value: row.SUBJECTS,
                        label: row.SUBJECTS,
                      },
                      topics: {
                        value: row.TOPICS_SUBTOPICS,
                        label: row.TOPICS_SUBTOPICS,
                      },
                      grades: {
                        value: row.GRADE,
                        label: row.GRADE,
                      },
                      sections: {
                        value: row.SECTION,
                        label: row.SECTION,
                      },
                      classwork: row.CLASSWORK_HOMEWORK,
                      remarks: row.REMARKS,
                    };
                  }),
                ],
              },
            ];
          } else {
            formArr[index] = [
              {
                day: day.slice(0, 1).toUpperCase() + day.slice(1),
                data: [
                  {
                    period: "",
                    subjects: null,
                    topics: null,
                    classwork: "",
                    remarks: "",
                    grades: null,
                    sections: null,
                  },
                ],
              },
            ];
          }
        });
      setForm(formArr);
    }
  }, [schemeOfPlan, selectedDays]);

  const manageDaysToShowReport = (e, index, day) => {
    if (e.target.checked) {
      setSelectedDays((prev) => {
        const temp = [...prev];
        temp[index] = day;
        return temp;
      });
    } else {
      setSelectedDays((prev) => {
        const temp = [...prev];
        temp[index] = "";
        return temp;
      });
    }
  };

  const addRow = (formIndex) => {
    setForm((prev) => {
      const temp = [...prev];
      temp[formIndex][0].data.push({
        period: "",
        subjects: null,
        topics: null,
        classwork: "",
        remarks: "",
        grades: null,
        sections: null,
      });
      return temp;
    });
  };

  const deleteRow = (formIndex) => {
    setForm((prev) => {
      const temp = [...prev];
      temp[formIndex][0].data.pop();
      return temp;
    });
  };

  const saveWeeklyPlanSpecialistsOnServer = (e) => {
    e.preventDefault();
    form.forEach((day, index) => {
      const plainData = day[0].data.map((row) => {
        return {
          period_no: row.period?.value,
          SUBJECTS: row.subjects?.value,
          TOPICS_SUBTOPICS: row.topics?.value,
          CLASSWORK_HOMEWORK: row.classwork,
          REMARKS: row.remarks,
          GRADE: row.grades?.value,
          SECTION: row.sections?.value,
        };
      });
      const formData = {
        teacher: selectedEducator?.value,
        term: currentSelectedTerm?.value,
        school: selectedSchool?._id,
        year: selectedYear,
        week_no: selectedWeek?.value,
        specialization: selectedSpecialization?.value,
        day: day[0].day,
        planData: plainData,
      };
      const shouldWeUpdate = schemeOfPlan?.data?.find((row) => {
        return row.day === day[0].day;
      });
      if (index === form.length - 1) updatedSuccessfully.current = true;
      if (!!shouldWeUpdate) {
        updateWeeklyPlanSpecialists.mutate({
          id: shouldWeUpdate?._id,
          data: formData,
        });
      } else {
        createWeeklyPlanSpecialists.mutate(formData);
      }
    });
  };
  

  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Qaf Weekly Plan Specialists</h2>
        <div className="d-flex align-items-center mb-3">
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
            <h3>Term</h3>
            <Select
              value={currentSelectedTerm}
              className="basic-single mr-4"
              onChange={setCurrentSelectedTerm}
              isSearchable={false}
              name="term"
              options={academicTerm}
            />
          </div>
          <div className="w-25">
            <h3>Specialization</h3>
            <Select
              value={selectedSpecialization}
              className="basic-single mr-4"
              onChange={setSelectedSpecialization}
              isSearchable={false}
              name="specialization"
              options={specialization}
            />
          </div>
          <div className="w-25">
            <h3>Week</h3>
            <Select
              value={selectedWeek}
              className="basic-single mr-4"
              onChange={setSelectedWeek}
              isSearchable={false}
              name="week"
              options={new Array(15)
                .fill(0)
                .map((_, i) => ({ value: i + 1, label: i + 1 }))}
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          {days?.map((day, index) => {
            return (
              <div className="mr-4" key={index}>
                <input
                  checked={selectedDays[index] === day}
                  onChange={(e) => manageDaysToShowReport(e, index, day)}
                  type="checkbox"
                  name={day}
                  id={day}
                  className="mr-2"
                />
                <label htmlFor={day}>
                  {day.slice(0, 1).toUpperCase() + day.slice(1)}
                </label>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="mx-5">
        {schemeOfPlanLoading || schemeOfPlanIsFetching ? (
          <div className="schemeOfPlanLoader">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : shouldWeFetchSchemeOfPlan && form.length > 0 ? (
          <Fragment>
            <form
              onSubmit={saveWeeklyPlanSpecialistsOnServer}
              style={{ paddingBottom: "10rem", overflowX: "auto" }}
            >
              {form.map((dayTable, formIndex) => {
                return (
                  <Fragment key={formIndex}>
                    <h4 className="mt-5">{dayTable[0].day}</h4>
                    <table
                      cellSpacing={0}
                      className="table table-bordered mt-2"
                    >
                      <thead className="text-nowrap">
                        <tr>
                          <th style={{ minWidth: "100px" }}>Period</th>
                          <th style={{ minWidth: "100px" }}>Grade</th>
                          <th style={{ minWidth: "180px", maxWidth: "350px" }}>
                            Subjects
                          </th>
                          <th style={{ minWidth: "150px" }}>Section</th>
                          <th>Topics/Subtopics To Cover</th>
                          <th style={{ minWidth: "150px" }}>
                            Classwork & Homework
                          </th>
                          <th style={{ minWidth: "150px" }}>Remarks</th>
                          {dayTable[0].data.length <= 1 ? null : <th></th>}
                        </tr>
                      </thead>
                      <tbody>
                        {dayTable[0]?.data.map((row, tableIndex) => {
                          return (
                            <tr key={tableIndex}>
                              <td>
                                <Select
                                  value={row.period}
                                  onChange={(e) => {
                                    const updatedValue = e;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].period = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  className="basic-single"
                                  isSearchable={false}
                                  options={new Array(16)
                                    .fill(0)
                                    .map((_, i) => ({
                                      value: i + 1,
                                      label: i + 1,
                                    }))}
                                />
                              </td>
                              <td>
                                <Select
                                  value={row.grades}
                                  onChange={(e) => {
                                    const updatedValue = e;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].grades = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  className="basic-single "
                                  isSearchable={false}
                                  options={grades}
                                />
                              </td>
                              <td>
                                <Select
                                  value={row.subjects}
                                  onChange={(e) => {
                                    const updatedValue = e;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].subjects = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  className="basic-single "
                                  isSearchable={false}
                                  options={subjects2[row.grades?.value] || []}
                                />
                              </td>

                              <td>
                                <Select
                                  value={row.sections}
                                  onChange={(e) => {
                                    const updatedValue = e;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].sections = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  className="basic-single "
                                  isSearchable={false}
                                  options={sections}
                                />
                              </td>
                              <td style={{ maxWidth: "250px!important" }}>
                                <Select
                                  value={row.topics}
                                  onChange={(e) => {
                                    const updatedValue = e;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].topics = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  className="basic-single"
                                  isSearchable={false}
                                  options={topicsOrSubtopics2[row.grades?.value] || []}
                                />
                              </td>
                              <td>
                                <input
                                  value={row.classwork}
                                  onChange={(e) => {
                                    const updatedValue = e.target.value;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].classwork = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  type="text"
                                  className="form-control"
                                  name={`classworkOrHomework_${tableIndex}`}

                                />
                              </td>
                              <td>
                                <input
                                  value={row.remarks}
                                  onChange={(e) => {
                                    const updatedValue = e.target.value;
                                    setForm((prev) => {
                                      const temp = [...prev];
                                      temp[formIndex][0].data[
                                        tableIndex
                                      ].remarks = updatedValue;
                                      return temp;
                                    });
                                  }}
                                  type="text"
                                  className="form-control"
                                  name={`remarks_${tableIndex}`}

                                />
                              </td>
                              {tableIndex === 0 ? null : (
                                <td className="px-0 d-flex justify-content-center align-items-center">
                                  <span
                                    className="secondaryButton text-white pt-2 pb-2 mx-2 px-0"
                                    onClick={() => {
                                      setForm((prev) => {
                                        const temp = [...prev];
                                        temp[formIndex][0].data.splice(
                                          tableIndex,
                                          1
                                        );
                                        return temp;
                                      });
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      viewBox="0 0 16 16"
                                      width="24"
                                      height="24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.5"
                                    >
                                      {" "}
                                      <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5" />{" "}
                                      <circle cx="8" cy="8" r="6.25" />{" "}
                                    </svg>
                                  </span>
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="d-flex align-items-center">
                      {dayTable[0].data.length > 1 ? (
                        <span
                          className="secondaryButton text-white pt-2 pb-2 mx-2"
                          onClick={() => deleteRow(formIndex)}
                          disabled={dayTable[0].data.length === 1}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 16 16"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            {" "}
                            <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5" />{" "}
                            <circle cx="8" cy="8" r="6.25" />{" "}
                          </svg>
                        </span>
                      ) : null}
                      {dayTable[0].data.length < 15 ? (
                        <span
                          className="primaryButton pt-3 pb-2"
                          onClick={() => addRow(formIndex)}
                          disabled={dayTable[0].data.length === 15}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.2em"
                            height="1.2em"
                            viewBox="0 0 630 700"
                          >
                            <path
                              fill="currentColor"
                              d="M622 106L311 417L0 106l65-65l246 245L556 41z"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </div>
                  </Fragment>
                );
              })}
              <div className="d-flex justify-content-center align-items-center mb-5">
                <button
                  type="submit"
                  className="primaryButton mt-5"
                  disabled={
                    updateWeeklyPlanSpecialists.isPending ||
                    createWeeklyPlanSpecialists.isPending
                  }
                >
                  Save
                </button>
              </div>
            </form>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export { QafWeeklyPlanSpecialists };

