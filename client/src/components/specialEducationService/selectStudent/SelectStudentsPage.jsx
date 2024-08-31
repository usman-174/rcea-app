import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { getPupils } from "../../../store/pupil/pupilActions";
import { errorToast } from "../../../utils";
import AxiosConfig from "../../../utils/axiosConfig";
import { grades, sections } from "../../../utils/globals";
import Styles from "./list.module.scss";
import ServiceSelectBox from "./ServiceSelectBox";
import StudentDetails from "./StudentDetails";

const initialSpecialData = {
  pupil_id: "",
  date_of_referral: "",
  date_of_consent_evalutaion: "",
  date_of_eligibility: "",
  date_of_consent_iep: "",
  item: "",
};

const items = [
  {
    label: "An Initial Evaluation",
    value: "initial-evaluation",
  },
  {
    label: "A 3-year re-evaluation",
    value: "3-year-re-evaluation",
  }
]

const SelectStudentsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedSchool } = useSelector((state) => state.school);
  const [searchParams, setSearchParams] = useSearchParams();
  const schools = useSelector((state) => state.school);
  const [specialData, setSpecialData] = useState(initialSpecialData);
  const currentSelectedSchoolId =
    searchParams.get("school") || (selectedSchool && selectedSchool._id);
  const currentSelectedSchool = currentSelectedSchoolId
    ? {
      value: currentSelectedSchoolId,
      label:
        schools?.schoolInfo?.find(
          (school) => school._id === currentSelectedSchoolId
        )?.name || "Unknown School",
    }
    : null;
  const selected = searchParams.get("selected");
  const selectedGrade = searchParams.get("grade")
    ? { value: searchParams.get("grade"), label: searchParams.get("grade") }
    : {
      value: "",
      label: "All",
    };
  const selectedSection = searchParams.get("section")
    ? { value: searchParams.get("section"), label: searchParams.get("section") }
    : {
      value: "",
      label: "All",
    };

  const query = {
    grade: selectedGrade?.value,
    student_section: selectedSection?.value,
    school_id: currentSelectedSchoolId,
  };
  const shouldFetch = currentSelectedSchoolId;
  const { data: students, isLoading: studentsIsLoading } = useQuery({
    queryKey: ["students", query],
    queryFn: async ({ queryKey }) => {
      const [_, parameters] = queryKey;

      const response = await AxiosConfig.get("/pupil/getbysectiongrade", {
        params: parameters,
      });

      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!shouldFetch,
  });



  const {
    data: specialEducationService,
    isLoading: spedialEducationServiceIsLoading,
    refetch: refetchSpecialEducationService,
  } = useQuery({
    queryKey: ["specialEducation", { pupil_id: selected }],
    queryFn: async ({ queryKey }) => {
      const [_, parameters] = queryKey;
      const response = await AxiosConfig.get("/specialeducation/search", {
        params: parameters,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!selected,
  });

  useEffect(() => {
    if (specialEducationService) {
      setSpecialData({
        id: specialEducationService?._id || "",
        pupil_id: specialEducationService.pupil_id,
        ...(specialEducationService.date_of_referral
          ? {
            date_of_referral: DateTime.fromISO(
              specialEducationService.date_of_referral
            ).toFormat("yyyy-MM-dd"),
          }
          : {}),
        ...(specialEducationService.date_of_consent_evalutaion
          ? {
            date_of_consent_evalutaion: DateTime.fromISO(
              specialEducationService.date_of_consent_evalutaion
            ).toFormat("yyyy-MM-dd"),
          }
          : {}),
        ...(specialEducationService.date_of_eligibility
          ? {
            date_of_eligibility: DateTime.fromISO(
              specialEducationService.date_of_eligibility
            ).toFormat("yyyy-MM-dd"),
          }
          : {}),

        ...(specialEducationService.date_of_consent_iep
          ? {
            date_of_consent_iep: DateTime.fromISO(
              specialEducationService.date_of_consent_iep
            ).toFormat("yyyy-MM-dd"),
          }
          : {}),

        item: items.find((item) => item.value === specialEducationService.item),

      });
    } else {
      setSpecialData(initialSpecialData);
    }
  }, [
    specialEducationService,
    specialEducationService?.id,
    spedialEducationServiceIsLoading,
  ]);

  useEffect(() => {
    if (!searchParams.get("school") && selectedSchool) {
      setSearchParams((prev) => {
        return {
          ...Object.fromEntries(prev),
          school: selectedSchool._id,
        };
      });
    }
  }, [searchParams]);

  useEffect(() => {
    dispatch(getPupils({ schoolID: selectedSchool._id }));
  }, []);

  const handleSelectChange = (selectedOption) => {
    navigate(
      `/data-portal/special-education-service/${selectedOption.value}?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`
    );
  };
  const options = [
    { value: "speech-and-language", label: "Speech And Language" },
    { value: "physically-impairment", label: "Physically Impairment" },
    {
      value: "emotional-or-behavioural-disorders",
      label: "Emotional Or Behavioural Disorders",
    },
    { value: "autism-spectrum-disorder", label: "Autism Spectrum Disorder" },
    {
      value: "developmental-cognitive-disability",
      label: "Developmental Cognitive Disability",
    },
    { value: "developmental-delay", label: "Developmental Delay" },
    { value: "hearing-impairment", label: "Hearing Impairment" },
    { value: "taumatic-brain-injury", label: "Traumatic Brain Injury" },
    { value: "visual-impairment", label: "Visual Impairment" },
    { value: "other-health-impairment", label: "Other Health Impairments" },
    {
      value: "specific-learning-disability",
      label: "Specific Learning Disability",
    },
    {
      value: "individial-education-plan",
      label: "Individualized Education Plan",
    },
    { value: "special-scheme-of-work", label: "Scheme Of Work" },
  ];

  const tableStudents = selected ? students?.filter((student) => student._id === selected) : students;

  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Search Students</h2>
        <div className="d-flex align-items-center mb-3">
          <div className="w-25">
            <h3> Grade</h3>
            <Select
              value={selectedGrade}
              className="basic-single mr-4"
              onChange={(e) => {
                setSearchParams((prev) => {
                  return {
                    ...Object.fromEntries(prev),
                    grade: e.value,
                  };
                });
              }}
              name="grade"
              isSearchable={false}
              options={[
                {
                  value: "",
                  label: "All",
                },
                ...grades,
              ]}
            />
          </div>
          <div className="w-25">
            <h3> Section</h3>
            <Select
              value={selectedSection}
              className="basic-single mr-4"
              onChange={(e) => {
                setSearchParams((prev) => {
                  return {
                    ...Object.fromEntries(prev),
                    section: e.value,
                  };
                });
              }}
              isSearchable={false}
              name="section"
              options={[
                {
                  value: "",
                  label: "All",
                },
                ...sections,
              ]}
            />
          </div>

          <div className="w-100">
            <h3>School</h3>
            <Select
              value={currentSelectedSchool}
              className="basic-single mr-4"
              onChange={(e) => {
                setSearchParams((prev) => {
                  return {
                    ...Object.fromEntries(prev),
                    school: e.value,
                  };
                });
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
        </div>
        {shouldFetch && studentsIsLoading ? (
          <Spinner />
        ) : (
          <div style={{ marginTop: "24px" }}>
            {students?.length ? (
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">Roll #</th>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">Name</th>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">Screen</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableStudents.map((pupil) => (
                            <tr className={Styles.pupil} key={pupil._id}>
                              <td className={`align-top text-nowrap ${Styles.pupilRoll}`}>
                                {pupil.student__nid}
                              </td>
                              <td className={`align-top text-nowrap ${Styles.pupilName}`}>
                                <h5 className="font-medium mb-0">
                                  {pupil.student_firstname} {pupil.student_lastname}
                                </h5>
                              </td>
                              <td className="w-25">
                                <button
                                  className={selected !== pupil._id ? "primaryButton" : "secondaryButton"}
                                  onClick={() => {
                                    if (selected === pupil._id) {
                                      searchParams.delete("selected");
                                      const params = Object.fromEntries(searchParams);
                                      delete params.selected;
                                      setSearchParams(params);
                                    } else {
                                      setSearchParams((prev) => {
                                        return {
                                          ...Object.fromEntries(prev),
                                          selected: pupil._id,
                                        };
                                      });
                                    }
                                  }}
                                >
                                  {selected === pupil._id ? "Selected" : "Select"}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              shouldFetch && <div className="alert alert-info">No students found</div>
            )}

          </div>
        )}
        <StudentDetails selected={selected} />
        {selected ? (
          <div>
            <div className="d-flex flex-wrap align-items-start mb-3 mt-5 justify-content-between">
              <div className="flex-grow-1 flex-basis-25 mb-3">
                <h5>Refferal Date</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={specialData.date_of_referral}
                    className="form-control"
                    onChange={(e) =>
                      setSpecialData({
                        ...specialData,
                        date_of_referral: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex-grow-1 flex-basis-25 mb-3">
                <h5>Consent Eval Date</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={specialData.date_of_consent_evalutaion}
                    className="form-control"
                    onChange={(e) =>
                      setSpecialData({
                        ...specialData,
                        date_of_consent_evalutaion: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex-grow-1 flex-basis-25 mb-3">
                <h5>Eligibity Date</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={specialData.date_of_eligibility}
                    className="form-control"
                    onChange={(e) =>
                      setSpecialData({
                        ...specialData,
                        date_of_eligibility: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex-grow-1 flex-basis-25 mb-3">
                <h5>Consent IEP Date</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={specialData.date_of_consent_iep}
                    className="form-control"
                    onChange={(e) =>
                      setSpecialData({
                        ...specialData,
                        date_of_consent_iep: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex-grow-1 flex-basis-25 mb-3">
                <h5>This is an</h5>
                <Select
                  value={specialData.item}
                  className="basic-single mr-4"
                  onChange={
                    (e) => setSpecialData({
                      ...specialData,
                      item: e,
                    })
                  }
                  isSearchable={false}
                  name="item"
                  options={
                    items
                  }
                />
              </div>
            </div>
            <div className="w-100 mt-4">
              <center>
                <button
                  className="primaryButton"
                  onClick={async () => {
                    if (!specialData.item) {
                      errorToast("Please select an item");
                      return;
                    }

                    try {
                      await AxiosConfig.post("/specialeducation", {
                        ...specialData,
                        pupil_id: selected,
                        item: specialData.item.value,
                      });
                      refetchSpecialEducationService();
                    } catch (error) {
                      errorToast("An error occurred");
                    }
                  }}
                >
                  {specialData?.id ? "Update" : "Save"}
                </button>
              </center>
            </div>

            <br />
            {specialData?.id ? (

              <ServiceSelectBox handleSelectChange={handleSelectChange} />
            ) : (
              <p className="text-danger text-center">
                Please save the above form to access the services
              </p>
            )}
          </div>
        ) : null}
        <br />
        <br />
        <br />

      </Container>
      <br />
      <br />
    </div>
  );
};

export default SelectStudentsPage;
