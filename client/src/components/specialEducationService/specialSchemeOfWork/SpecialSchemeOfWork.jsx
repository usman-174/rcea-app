import { useMutation, useQuery } from "@tanstack/react-query";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { errorToast, successToast } from "../../../utils";
import AxiosConfig from "../../../utils/axiosConfig";

import {
    assessmentOptions,
    grades,
    prescribedBooks,
    qatLessonPlanThemes2,
    subjects2,
    teachingStrategies,
    topicsOrSubtopics2
} from "../../../utils/globals";
import { useSelector } from "react-redux";

const SpecialSchemeOfWork = () => {




    const [searchParams] = useSearchParams();
    const { selectedSchool } = useSelector((state) => state.school);
    const currentSelectedSchoolId =
        searchParams.get("school") || (selectedSchool && selectedSchool._id);
    const selected = searchParams.get("selected");
    const [selectedSubject, setSelectedSubject] = useState(null);
    const specialData = searchParams.get("specialData");
    const [selectedPrescribedTextbook, setSelectedPrescribedTextbook] = useState(null);
    const [selectedNumberOfPeriodsPerWeek, setSelectedNumberOfPeriodsPerWeek] = useState(null);
    const [form, setForm] = useState([]);
    const [error, setError] = useState("");

    const shouldWeFetchSchemeOfWork = !!specialData && !!selectedSubject;
    const [selectedGrade, setSelectedGrade] = useState(null);

    const {
        data: schemeOfWork,
        isLoading: schemeOfWorkLoading,
        isFetching: schemeOfWorkIsFetching,
        isError: schemeOfWorkIsError,
        error: schemeOfWorkError,
        refetch: refetchSchemeOfWork,
    } = useQuery({
        queryKey: [
            "specialSchemeOfWork",
            {
                educationService_id: specialData,
                subject: selectedSubject?.value,
            },
        ],
        queryFn: async ({ queryKey }) => {
            const [, parameters] = queryKey;
            const response = await AxiosConfig.get("specialeducation/specialschemeofwork/get", {
                params: {

                    subject: parameters.subject,
                    educationService_id: parameters.educationService_id,
                },
            });
            return response.data;
        },
        refetchOnWindowFocus: false,
        retry: false,
        enabled: !!shouldWeFetchSchemeOfWork,
    });

    const createSchemeOfWork = useMutation({
        mutationFn: async (data) => {
            const response = await AxiosConfig.post("specialeducation/specialschemeofwork/create", data);
            return response.data;
        },
        onSuccess: () => {
            successToast("Scheme of Work added successfully");
            refetchSchemeOfWork();
        },
        onError: (err) => {
            errorToast("An error occurred. Please try again.");
        },
    });

    const updateSchemeOfWork = useMutation({
        mutationFn: async (data) => {
            const response = await AxiosConfig.put(`specialeducation/specialschemeofwork/update/${data?.id}`, data?.data);
            return response.data;
        },
        onSuccess: () => {
            successToast("Scheme of Work updated successfully");
        },
        onError: (err) => {
            errorToast("An error occurred. Please try again.");
        },
    });

    useEffect(() => {
        if (!!schemeOfWork) {
            const tableData = [];
            const schemes = [...schemeOfWork?.data?.scheme_data];
            schemes.forEach((scheme) => {
                const row = {
                    theme: {
                        value: scheme?.THEME,
                        label: scheme?.THEME,
                    },
                    topics: {
                        value: scheme?.TOPICS,
                        label: scheme?.TOPICS,
                    },
                    pedagogicalStrategies: {
                        value: scheme?.PEDAGOGICAL_STRATEGIES,
                        label: scheme?.PEDAGOGICAL_STRATEGIES,
                    },
                    educationalResources: scheme?.EDUCATIONAL_RESOURCES,
                    assesmentOrEvaluation: {
                        value: scheme?.ASSESSMENT_EVALUATION,
                        label: scheme?.ASSESSMENT_EVALUATION,
                    },
                    remarks: scheme?.REMARKS,
                };
                tableData.push(row);
            });
            if (schemeOfWork?.data?.prescribes_book) {
                setSelectedPrescribedTextbook({
                    value: schemeOfWork?.data?.prescribes_book,
                    label: schemeOfWork?.data?.prescribes_book,
                });
            }
            if (schemeOfWork?.data?.number_of_period_per_week) {
                setSelectedNumberOfPeriodsPerWeek({
                    value: schemeOfWork?.data?.number_of_period_per_week,
                    label: schemeOfWork?.data?.number_of_period_per_week,
                });
            }
            setForm(tableData);
        }
    }, [schemeOfWork]);

    useEffect(() => {
        if (schemeOfWorkIsError) {
            if (schemeOfWorkError?.response?.status === 404) {
                setTimeout(() => {
                    setError("");
                }, 5000);
                const row = {
                    theme: "",
                    topics: "",
                    pedagogicalStrategies: null,
                    educationalResources: "",
                    assesmentOrEvaluation: null,
                    remarks: "",
                };
                setForm([row]);
                setSelectedPrescribedTextbook(null);
                setSelectedNumberOfPeriodsPerWeek(null);
            }
        } else {
            setError(schemeOfWorkError?.response?.data?.error);
        }
    }, [schemeOfWorkError, schemeOfWorkIsError]);


    const addRow = () => {
        const row = {
            theme: "",
            topics: "",
            pedagogicalStrategies: null,
            educationalResources: "",
            assesmentOrEvaluation: null,
            remarks: "",
        };
        setForm([...form, row]);
    };

    const deleteRow = () => {
        const updatedForm = [...form];
        updatedForm.pop();
        setForm(updatedForm);
    };

    const uploadSchemeOfWork = (e) => {
        e.preventDefault();
        const data = {

            subject: selectedSubject?.value,
            ...(specialData ? { educationService_id: specialData } : {}),
            prescribes_book: selectedPrescribedTextbook?.value,
            number_of_period_per_week: selectedNumberOfPeriodsPerWeek?.value,
        };
        const scheme_data = form.map((row, index) => {
            return {
                week: index + 1,
                THEME: row.theme.value,
                TOPICS: row.topics.value,
                PEDAGOGICAL_STRATEGIES: row.pedagogicalStrategies?.value,
                EDUCATIONAL_RESOURCES: row.educationalResources,
                ASSESSMENT_EVALUATION: row.assesmentOrEvaluation?.value,
                REMARKS: row.remarks,
            };
        });
        data.scheme_data = scheme_data;
        if (!!schemeOfWork) {
            const updatedData = {
                data: {
                    ...data,
                },
                id: schemeOfWork.data._id,
            };
            updateSchemeOfWork.mutate(updatedData);
            return;
        }
        createSchemeOfWork.mutate(data);
    };

    return (
        <div>
            <Toaster />
            <Container>
                <h2 className="pt-5 mb-4 pb-2">Special Scheme of Work</h2>
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
                            onChange={(e) => {
                                setSelectedSubject("");
                                setSelectedGrade(e)
                            }}
                            name="grade"
                            isSearchable={false}
                            options={grades}
                        />
                    </div>
                    <div className="w-25">
                        <h3>Subject</h3>
                        <Select
                            value={selectedSubject}
                            className="basic-single mr-4"
                            onChange={(e) => setSelectedSubject(e)}
                            isSearchable={false}
                            name="subject"
                            options={subjects2[selectedGrade?.value]}
                        />
                    </div>
                </div>
            </Container>
            {schemeOfWorkLoading || schemeOfWorkIsFetching ? (
                <div className="schemeOfWorkLoader">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : form.length > 0 ? (
                <Fragment>
                    <Container>
                        <div className="dropdown-divider mt-5"></div>
                        <div className="d-flex align-items-center mt-5">
                            <div className="w-50">
                                <h4>PRESCRIBED TEXTBOOK/s:</h4>
                                <Select
                                    value={selectedPrescribedTextbook}
                                    className="basic-single mr-4"
                                    onChange={(e) => setSelectedPrescribedTextbook(e)}
                                    name="prescribedTextbook"
                                    isSearchable={false}
                                    options={prescribedBooks}
                                />
                            </div>
                            <div className="w-50">
                                <h4>NUMBER OF PERIODS/WEEK:</h4>
                                <Select
                                    value={selectedNumberOfPeriodsPerWeek}
                                    className="basic-single mr-4"
                                    onChange={(e) => setSelectedNumberOfPeriodsPerWeek(e)}
                                    name="numberOfPeriodsPerWeek"
                                    isSearchable={false}
                                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => ({
                                        value: week,
                                        label: week,
                                    }))}
                                />
                            </div>
                        </div>
                    </Container>
                    <div className="mx-5 mt-5">
                        <form onSubmit={uploadSchemeOfWork} style={{ paddingBottom: "10rem", overflowX: "auto" }}>
                            <div>
                                <table cellSpacing={0} style={{}} className="table table-bordered mt-2">
                                    <thead className="text-nowrap">
                                        <tr>
                                            <th style={{ minWidth: "50px" }}>Week</th>
                                            <th style={{ minWidth: "190px" }}>Theme</th>
                                            <th style={{ minWidth: "190px" }}>Topics</th>
                                            <th style={{ minWidth: "190px" }}>Pedagogical Strategies</th>
                                            <th style={{ minWidth: "190px" }}>Educational Resources</th>
                                            <th style={{ minWidth: "200px" }}>Assessment/ Evaluation</th>
                                            <th style={{ minWidth: "190px" }}>Remarks</th>
                                            {form.length <= 1 ? null : <th></th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {form?.map((row, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Select
                                                            value={row.theme}
                                                            className="basic-single  z-index-10"
                                                            onChange={(e) => {
                                                                const { value } = e;
                                                                const updatedForm = [...form];
                                                                updatedForm[index].theme = {
                                                                    value,
                                                                    label: value,
                                                                };
                                                                setForm(updatedForm);
                                                            }}
                                                            isSearchable={false}
                                                            options={qatLessonPlanThemes2[selectedGrade?.value]}
                                                        />
                                                    </td>
                                                    <td>
                                                        {/* <input
                              value={row.topics}
                              type="text"
                              className="form-control "
                              onChange={(e) => {
                                const { value } = e.target;
                                const updatedForm = [...form];
                                updatedForm[index].topics = value;
                                setForm(updatedForm);
                              }}
                              style={{ width: "200px" }}
                              name={`topics_${index}`}
                              
                            /> */}
                                                        <Select
                                                            value={row.topics}
                                                            className="basic-single  z-index-10"
                                                            onChange={(e) => {
                                                                const { value } = e;
                                                                const updatedForm = [...form];
                                                                updatedForm[index].topics = {
                                                                    value,
                                                                    label: value,
                                                                };
                                                                setForm(updatedForm);
                                                            }}
                                                            isSearchable={false}
                                                            options={topicsOrSubtopics2[selectedGrade?.value]}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Select
                                                            value={row.pedagogicalStrategies}
                                                            className="basic-single z-index-10"
                                                            onChange={(e) => {
                                                                const { value } = e;
                                                                const updatedForm = [...form];
                                                                updatedForm[index].pedagogicalStrategies = {
                                                                    value,
                                                                    label: value,
                                                                };
                                                                setForm(updatedForm);
                                                            }}
                                                            isSearchable={false}
                                                            options={teachingStrategies}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            value={row.educationalResources}
                                                            type="text"
                                                            className="form-control"
                                                            onChange={(e) => {
                                                                const { value } = e.target;
                                                                const updatedForm = [...form];
                                                                updatedForm[index].educationalResources = value;
                                                                setForm(updatedForm);
                                                            }}
                                                            name={`educationalResources_${index}`}

                                                        />
                                                    </td>
                                                    <td>
                                                        <Select
                                                            value={row.assesmentOrEvaluation}
                                                            className="basic-single mr-4"
                                                            onChange={(e) => {
                                                                const { value } = e;
                                                                const updatedForm = [...form];
                                                                updatedForm[index].assesmentOrEvaluation = {
                                                                    value,
                                                                    label: value,
                                                                };
                                                                setForm(updatedForm);
                                                            }}
                                                            isSearchable={false}
                                                            options={assessmentOptions}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            value={row.remarks}
                                                            onChange={(e) => {
                                                                const { value } = e.target;
                                                                const updatedForm = [...form];
                                                                updatedForm[index].remarks = value;
                                                                setForm(updatedForm);
                                                            }}
                                                            type="text"
                                                            style={{ width: "150px" }}
                                                            className="form-control"
                                                            name={`remarks_${index}`}

                                                        />
                                                    </td>
                                                    {index === 0 ? null : (
                                                        <td>
                                                            <span
                                                                className="secondaryButton text-white pt-2 pb-2 mx-2 px-0"
                                                                onClick={() => {
                                                                    const updatedForm = [...form];
                                                                    updatedForm.splice(index, 1);
                                                                    setForm(updatedForm);
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
                                                                    <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5" /> <circle cx="8" cy="8" r="6.25" />{" "}
                                                                </svg>
                                                            </span>
                                                        </td>
                                                    )}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                {form.length > 1 ? (
                                    <span
                                        className="secondaryButton text-white pt-2 pb-2 mx-2 "
                                        onClick={deleteRow}
                                        disabled={form.length === 1}
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
                                            <path d="m10.25 5.75-4.5 4.5m0-4.5 4.5 4.5" /> <circle cx="8" cy="8" r="6.25" />{" "}
                                        </svg>
                                    </span>
                                ) : null}
                                {form.length < 15 ? (
                                    <span className="primaryButton pt-3 pb-2" onClick={addRow} disabled={form.length === 15}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 630 700">
                                            <path fill="currentColor" d="M622 106L311 417L0 106l65-65l246 245L556 41z" />
                                        </svg>
                                    </span>
                                ) : null}
                            </div>
                            <div className="d-flex justify-content-center my-2">
                                <button
                                    className="primaryButton"
                                    disabled={createSchemeOfWork.isPending || updateSchemeOfWork.isPending}
                                    aria-disabled={createSchemeOfWork.isPending || updateSchemeOfWork.isPending}
                                    type="submit"
                                >
                                    {!schemeOfWork ? "Save" : "Update"}
                                </button>
                                <Link
                                    to={`/data-portal/special-education-service?school=${currentSelectedSchoolId}&selected=${selected}`}
                                    className="secondaryButton m-2"
                                    // disabled={mutation.isPending}
                                >

                                    Back
                                </Link>
                            </div>
                        </form>
                    </div>
                </Fragment>
            ) : null}
        </div>
    );
};

export default SpecialSchemeOfWork;

