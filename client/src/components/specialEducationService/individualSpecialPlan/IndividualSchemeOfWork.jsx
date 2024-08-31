import React, { Fragment, useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import Select from "react-select";
import { assessmentOptions, grades, prescribedBooks2, qatLessonPlanThemes2, subjects2, teachingStrategies, topicsOrSubtopics2 } from '../../../utils/globals';
import { schemeOfWorkInitial } from './initialData';

const IndividualSchemeOfWork = ({
    IndividualizedSpecialPlan,
    formData,
    setFormData

}) => {
    const schemeOfWork = formData.schemeOfWork;

    const schemeData = schemeOfWork?.scheme_data || schemeOfWorkInitial.scheme_data;





    const addRow = () => {
        const row = {
            THEME: "",
            TOPICS: "",
            PEDAGOGICAL_STRATEGIES: null,
            EDUCATIONAL_RESOURCES: "",
            ASSESSMENT_EVALUATION: null,
            REMARKS: "",
        };

        setFormData({
            ...formData,
            schemeOfWork: {
                ...formData.schemeOfWork,
                scheme_data: [...schemeData, row],
            },
        });
    };

    const deleteRow = () => {
        const updatedForm = [
            ...schemeData,
        ];
        updatedForm.pop();

        setFormData({
            ...formData,
            schemeOfWork: {
                ...formData.schemeOfWork,
                scheme_data: updatedForm,
            },
        });
    };

    console.log(schemeOfWork);
    
    return (
        <div>
            <Toaster />
            <div>
                <h2 className="pt-5 mb-4 pb-2">Special Scheme of Work</h2>


                <div className="d-flex align-items-center mb-3">
                    <div className="w-25">
                        <h3>Grade</h3>
                        <Select
                            value={grades.find(
                                (grade) => grade.value === Number(schemeOfWork?.grade)
                            )}
                            className="basic-single mr-4"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    schemeOfWork: {
                                        ...formData.schemeOfWork,
                                        grade: e.value,
                                    },
                                })
                            }
                            isSearchable={false}
                            name="grade"
                            options={grades}
                        />
                    </div>
                    <div className="w-25">
                        <h3>Subject</h3>
                        <Select
                            value={subjects2[schemeOfWork.grade]?.find(
                                (subject) => subject.value === schemeOfWork?.subject
                            ) ||
                                { value: "", label: "" }}
                            className="basic-single mr-4"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    schemeOfWork: {
                                        ...formData.schemeOfWork,
                                        subject: e.value,
                                    },
                                })
                            }
                            isSearchable={false}
                            name="subject"
                            options={subjects2[schemeOfWork.grade]}
                        />
                    </div>
                </div>
            </div>
            {schemeData.length > 0 ? (
                <Fragment>
                    <Container>
                        <div className="dropdown-divider mt-5"></div>
                        <div className="d-flex align-items-center mt-5">
                            <div className="w-50">
                                <h4>PRESCRIBED TEXTBOOK/s:</h4>
                                <Select
                                    value={
                                        prescribedBooks2[schemeOfWork.grade]?.find(
                                            (book) => book.value === schemeOfWork?.prescribes_book
                                        ) || { value: "", label: "" }
                                    }
                                    className="basic-single mr-4"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            schemeOfWork: {
                                                ...formData.schemeOfWork,
                                                prescribes_book: e.value,
                                            },
                                        })
                                    }
                                    name="prescribedTextbook"
                                    isSearchable={false}
                                    options={prescribedBooks2[schemeOfWork.grade]}
                                />
                            </div>
                            <div className="w-50">
                                <h4>NUMBER OF PERIODS/WEEK:</h4>
                                <Select
                                    value={
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => ({
                                            value: week,
                                            label: week,
                                        })).find(
                                            (week) => week.value === schemeOfWork?.number_of_period_per_week
                                        ) || { value: "", label: "" }
                                    }
                                    className="basic-single mr-4"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            schemeOfWork: {
                                                ...formData.schemeOfWork,
                                                number_of_period_per_week: e.value,
                                            },
                                        })
                                    }
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
                    <div className="">

                        <div style={{
                            width: "100%",
                            minHeight: "300px",
                            overflowX: "auto",

                        }}>
                            <table
                                cellSpacing={0}
                                style={{}}
                                className="table table-bordered mt-2"
                            >
                                <thead className="text-nowrap">
                                    <tr>
                                        <th style={{ minWidth: "50px" }}>Week</th>
                                        <th style={{ minWidth: "190px" }}>Theme</th>
                                        <th style={{ minWidth: "190px" }}>Topics</th>
                                        <th style={{ minWidth: "190px" }}>
                                            Pedagogical Strategies
                                        </th>
                                        <th style={{ minWidth: "190px" }}>
                                            Educational Resources
                                        </th>
                                        <th style={{ minWidth: "200px" }}>
                                            Assessment/ Evaluation
                                        </th>
                                        <th style={{ minWidth: "190px" }}>REMARKS</th>
                                        {schemeData.length <= 1 ? null : <th></th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {schemeData?.map((row, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Select
                                                        value={qatLessonPlanThemes2[schemeOfWork.grade]?.find(
                                                            (theme) => theme.value === row.THEME
                                                        ) || {
                                                            value: "", label: ""

                                                        }}
                                                        className="basic-single  z-index-10"
                                                        onChange={(e) => {
                                                            const { value } = e;
                                                            const updatedForm = [...schemeData];
                                                            updatedForm[index].THEME = value;

                                                            setFormData({
                                                                ...formData,
                                                                schemeOfWork: {
                                                                    ...formData.schemeOfWork,
                                                                    scheme_data: updatedForm,
                                                                },
                                                            });
                                                        }}
                                                        isSearchable={false}
                                                        options={
                                                            qatLessonPlanThemes2[schemeOfWork.grade]
                                                        }
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
                                                        value={topicsOrSubtopics2[schemeOfWork.grade]?.find(
                                                            (topic) => topic.value === row.TOPICS
                                                        ) || {
                                                            value: "", label: ""
                                                        }
                                                        }
                                                        className="basic-single  z-index-10"
                                                        onChange={(e) => {
                                                            const { value } = e;
                                                            const updatedForm = [...schemeData,];
                                                            updatedForm[index].TOPICS = value

                                                            setFormData({
                                                                ...formData,
                                                                schemeOfWork: {
                                                                    ...formData.schemeOfWork,
                                                                    scheme_data: updatedForm,
                                                                },
                                                            });

                                                        }}
                                                        isSearchable={false}
                                                        options={topicsOrSubtopics2[schemeOfWork.grade]}
                                                    />
                                                </td>
                                                <td>
                                                    <Select
                                                        value={
                                                            teachingStrategies.find(
                                                                (strategy) =>
                                                                    strategy.value === row.PEDAGOGICAL_STRATEGIES
                                                            ) || { value: "", label: "" }
                                                        }
                                                        className="basic-single z-index-10"
                                                        onChange={(e) => {
                                                            const { value } = e;
                                                            const updatedForm = [...schemeData];
                                                            updatedForm[index].PEDAGOGICAL_STRATEGIES = value

                                                            setFormData({
                                                                ...formData,
                                                                schemeOfWork: {
                                                                    ...formData.schemeOfWork,
                                                                    scheme_data: updatedForm,
                                                                },
                                                            });
                                                        }}
                                                        isSearchable={false}
                                                        options={teachingStrategies}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        value={row.EDUCATIONAL_RESOURCES}
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => {
                                                            const { value } = e.target;
                                                            const updatedForm = [...schemeData];
                                                            updatedForm[index].EDUCATIONAL_RESOURCES = value;

                                                            setFormData({
                                                                ...formData,
                                                                schemeOfWork: {
                                                                    ...formData.schemeOfWork,
                                                                    scheme_data: updatedForm,
                                                                },
                                                            });
                                                        }}
                                                        name={`educationalResources_${index}`}
                                                    />
                                                </td>
                                                <td>
                                                    <Select
                                                        value={
                                                            assessmentOptions.find(
                                                                (assessment) =>
                                                                    assessment.value === row.ASSESSMENT_EVALUATION
                                                            ) || { value: "", label: "" }
                                                        }
                                                        className="basic-single mr-4"
                                                        onChange={(e) => {
                                                            const { value } = e;
                                                            const updatedForm = [...schemeData];
                                                            updatedForm[index].ASSESSMENT_EVALUATION = value

                                                            setFormData({
                                                                ...formData,
                                                                schemeOfWork: {
                                                                    ...formData.schemeOfWork,
                                                                    scheme_data: updatedForm,
                                                                },
                                                            });
                                                        }}
                                                        isSearchable={false}
                                                        options={assessmentOptions}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        value={row.REMARKS}
                                                        onChange={(e) => {
                                                            const { value } = e.target;
                                                            const updatedForm = [...schemeData];
                                                            updatedForm[index].REMARKS = value;

                                                            setFormData({
                                                                ...formData,
                                                                schemeOfWork: {
                                                                    ...formData.schemeOfWork,
                                                                    scheme_data: updatedForm,
                                                                },
                                                            });
                                                        }}
                                                        type="text"
                                                        style={{ width: "150px" }}
                                                        className="form-control"
                                                        name={`REMARKS_${index}`}
                                                    />
                                                </td>
                                                {index === 0 ? null : (
                                                    <td>
                                                        <span
                                                            className="secondaryButton text-white pt-2 pb-2 mx-2 px-0"
                                                            onClick={() => {
                                                                const updatedForm = [...schemeData];
                                                                updatedForm.splice(index, 1);

                                                                setFormData({
                                                                    ...formData,
                                                                    schemeOfWork: {
                                                                        ...formData.schemeOfWork,
                                                                        scheme_data: updatedForm,
                                                                    },
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
                        </div>
                        <div className="d-flex align-items-center my-1">
                            {schemeData.length > 1 ? (
                                <span
                                    className="secondaryButton text-white pt-2 pb-2 mx-2 "
                                    onClick={deleteRow}
                                    disabled={schemeData.length === 1}
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
                            {schemeData.length < 15 ? (
                                <span
                                    className="primaryButton pt-3 pb-2"
                                    onClick={addRow}
                                    disabled={schemeData.length === 15}
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

                    </div>
                </Fragment>
            ) : null}
        </div>
    );
};

export default IndividualSchemeOfWork;
