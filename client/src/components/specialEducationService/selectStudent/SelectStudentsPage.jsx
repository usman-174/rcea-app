import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { Container, Spinner } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { getPupils } from "../../../store/pupil/pupilActions";
import { errorToast } from "../../../utils";
import AxiosConfig from "../../../utils/axiosConfig";
import { grades, sections } from "../../../utils/globals";
import Styles from "./list.module.scss";
const initialSpecialData = {
  pupil_id: "",
  date_of_referral: "",
  date_of_consent_evalutaion: "",
  date_of_eligibility: "",
  date_of_consent_iep: "",
};
// function convertToHTMLDate(mongooseDate) {
//   mongooseDate = new Date(mongooseDate);
//   const year = mongooseDate.getFullYear();
//   let month = (mongooseDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0 indexed
//   let day = mongooseDate.getDate().toString().padStart(2, "0");

//   // Returning the date in HTML date input format
//   return `${year}-${month}-${day}`;
// }

const SelectStudentsPage = () => {
  const dispatch = useDispatch();
  const { pupilInfo } = useSelector((state) => state.pupil);

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
      // eslint-disable-next-line
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
      // eslint-disable-next-line
      const [_, parameters] = queryKey;
      const response = await AxiosConfig.get("/specialeducation/search", {
        params: parameters,
      });
      console.log("dwdawd");
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
        // const searchParams = getAllParamsFromEntries(prev)
        return {
          ...Object.fromEntries(prev),
          school: selectedSchool._id,
        };
      });
    }
    // eslint-disable-next-line
  }, [searchParams]);

  useEffect(() => {
    dispatch(getPupils({ schoolID: selectedSchool._id }));

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Search Students</h2>
        {/* {studentsIsError && (
                    <Alert key="danger" variant="danger">
                        {error}
                    </Alert>
                )} */}
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

                // setCurrentSelectedSchool(e)
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
        {!shouldFetch && pupilInfo?.length ? (
          <div style={{ marginTop: "24px" }}>
            {pupilInfo?.length ? (
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="table-responsive-xl">
                      <table className="table ">
                        <thead>
                          <tr>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                              Roll #
                            </th>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                              Name
                            </th>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                              Screenx
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {pupilInfo.map((pupil, i) => (
                            <tr className={Styles.pupil} key={pupil._id + i}>
                              <td
                                className={`align-top text-nowrap ${Styles.pupilRoll}`}
                              >
                                {pupil.student__nid}
                              </td>
                              <td
                                className={`align-top text-nowrap ${Styles.pupilName}`}
                              // onClick={() =>
                              //     navigate(`/data-portal/pupils/${pupil._id}`)
                              // }
                              >
                                <h5 className="font-medium mb-0">
                                  {pupil.student_firstname}{" "}
                                  {pupil.student_lastname}
                                </h5>
                              </td>
                              <td className="align-top text-nowrap d-flex flex-row align-items-center">
                                <button>Select</button>
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
              shouldFetch && (
                <div className="alert alert-info">No students found</div>
              )
            )}
          </div>
        ) : shouldFetch && studentsIsLoading ? (
          <Spinner />
        ) : (
          <div style={{ marginTop: "24px" }}>
            {students?.length ? (
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="table-responsive-xl">
                      <table className="table ">
                        <thead>
                          <tr>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                              Roll #
                            </th>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                              Name
                            </th>
                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                              Screen
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((pupil) => (
                            <tr className={Styles.pupil} key={pupil._id}>
                              <td
                                className={`align-top text-nowrap ${Styles.pupilRoll}`}
                              >
                                {pupil.student__nid}
                              </td>
                              <td
                                className={`align-top text-nowrap ${Styles.pupilName}`}
                              >
                                <h5 className="font-medium mb-0">
                                  {pupil.student_firstname}{" "}
                                  {pupil.student_lastname}
                                </h5>
                              </td>

                              <td className="w-25">
                                <button
                                  className="primaryButton "
                                  onClick={() => {
                                    if (selected === pupil._id) {
                                      searchParams.delete("selected");
                                      const params =
                                        Object.fromEntries(searchParams);
                                      delete params.selected;
                                      setSearchParams(params);
                                    } else {
                                      setSearchParams((prev) => {
                                        // const searchParams = getAllParamsFromEntries(prev)
                                        return {
                                          ...Object.fromEntries(prev),
                                          selected: pupil._id,
                                        };
                                      });
                                    }
                                  }}
                                >
                                  {selected === pupil._id
                                    ? "Selected"
                                    : "Select"}
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
              shouldFetch && (
                <div className="alert alert-info">No students found</div>
              )
            )}
          </div>
        )}

        {selected ? (
          <div>
            <div className="d-flex align-items-start  mb-3 mt-5 justify-content-around">
              <div className="w-25">
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
              <div className="w-25">
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
            </div>
            <div
              style={{ gap: "10px" }}
              className="d-flex align-items-start  justify-content-around"
            >
              <div className="w-25">
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
              <div className="w-25">
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
            </div>
            <div className="w-100 mt-4">
              <center>
                <button
                  className="primaryButton"
                  onClick={async () => {
                    try {
                      await AxiosConfig.post("/specialeducation", {
                        ...specialData,
                        pupil_id: selected,
                      });
                      refetchSpecialEducationService();
                    } catch (error) {
                      errorToast("An error occured");
                    }
                  }}
                >
                  {specialData?.id ? "Update" : "Save"}
                </button>
              </center>
            </div>

            <br />
            {specialData?.id ? <div>

              <Link
                to={`/data-portal/special-education-service/speech-and-language?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                SpeechAndLanguage
              </Link>
              {/* /data-portal/special-education-service/physically-impairment */}
              <Link
                to={`/data-portal/special-education-service/physically-impairment?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton"
              >
                Physically Impairment
              </Link>

              <Link
                to={`/data-portal/special-education-service/emotional-or-behavioural-disorders?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Emotional Or Behavioiral Disorders
              </Link>

              <Link
                to={`/data-portal/special-education-service/autism-spectrum-disorder?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2 my-2"
              >
                Autism Spectrum Disorder
              </Link>

              <Link
                to={`/data-portal/special-education-service/developmental-cognitive-disability?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Developmental Cognitive Disability
              </Link>

              <Link
                to={`/data-portal/special-education-service/developmental-delay?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Developmental Delay
              </Link>

              <Link
                to={`/data-portal/special-education-service/hearing-impairment?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Hearing Impairment
              </Link>

              <Link
                to={`/data-portal/special-education-service/taumatic-brain-injury?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Traumatic Brain Injury
              </Link>

              <Link
                to={`/data-portal/special-education-service/visual-impairment?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2 my-2"
              >
                Visual Impairment
              </Link>

              <Link
                to={`/data-portal/special-education-service/other-health-impairment?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Other Health Impairments
              </Link>

              <Link
                to={`/data-portal/special-education-service/specific-learning-disability?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton mx-2"
              >
                Specific Learning Disability
              </Link>
              <br />
              <Link
                to={`/data-portal/special-education-service/individial-education-plan?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton m-2"
              >
                Individualized Education Plan
              </Link>
              <Link
                to={`/data-portal/special-education-service/special-scheme-of-work?specialData=${specialData.id}&school=${currentSelectedSchoolId}&selected=${selected}`}
                className="primaryButton m-2"
              >
                SchemeOfWork
              </Link>
            </div> : null}

          </div>
        ) : null}
      </Container>
      <br />
      <br />
    </div>
  );
};

export default SelectStudentsPage;
