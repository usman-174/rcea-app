import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { errorToast, successToast } from "../../../utils";
import AxiosConfig from "../../../utils/axiosConfig";
import { academicTerm, language } from "../../../utils/globals";
import { Spinner } from "../../spinner";

const initialFormData = [
    {
        targetWord: "",
        sound: "",
        position: "",
        difficulty: "",
        pronounced: "",
    },

];
const positions = [
    { value: "Initial", label: "Initial" },
    { value: "Medial", label: "Medial" },
    { value: "Final", label: "Final" },
]
const difficulties = [
    { value: "Word Level", label: "Word Level" },
    { value: "Sentence Level", label: "Sentence Level" },
]
const SpeechAndLanguage = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const client = new  QueryClient()

    const pupil_id = searchParams.get("pupil_id");
    const { selectedTerm: defaultTerm } = useSelector((state) => state.academics);
    const selectedTerm = searchParams.get("term") ? { value: searchParams.get("term"), label: searchParams.get("term") } : null;
    const selectedDate = searchParams.get("date") ? searchParams.get("date") : null;

    const selectedSubject = searchParams.get("subject") ? { value: searchParams.get("subject"), label: searchParams.get("subject") } : null;
    const [formData, setFormData] = useState(initialFormData);

    const {
        data: student,

    } = useQuery({
        queryKey: [pupil_id, { id: pupil_id }],
        queryFn: async ({ queryKey }) => {
// eslint-disable-next-line
            const [_, parameters] = queryKey;
            const response = await AxiosConfig.get(`/pupil/${parameters.id}`);
            return response.data;
        },
        refetchOnWindowFocus: false,
        retry: false,
        enabled: !!pupil_id,
    });
    const isFetchAble = !!(pupil_id && searchParams.get("date") && searchParams.get("term") && searchParams.get("subject"));
    const {
        data,
        isLoading,
        isFetching,

        isFetched,

    } = useQuery({
        queryKey: ["speechandlanguage", {
            pupil_id,
            term: searchParams.get("term"),
            subject: searchParams.get("subject"),
            date: selectedDate

        }],
        queryFn: async ({ queryKey }) => {
            // eslint-disable-next-line
            const [_, parameters] = queryKey;
            const res = await AxiosConfig.get(`/speechandlanguage/search`, {
                params: parameters,
            });
            return res.data;

        },
        refetchOnWindowFocus: false,
        retry: false,
        enabled: isFetchAble
    });



    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await AxiosConfig.post("/speechandlanguage/", data);
            return response.data;
        },
        onSuccess: () => {
            successToast("Data Submitted successfully");
            client.invalidateQueries("speechandlanguage")

        },
        onError: (err) => {
            errorToast("An error occurred. Please try again.");
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData) {
            const payload = {
                pupil_id,
                term: searchParams.get("term"),
                subject: searchParams.get("subject"),
                date: searchParams.get("date"),

                data: formData,
                ...(data?._id ? { id: data._id } : {})
            }
            mutation.mutate(payload);
        } else {
            // handle error or display a message that formData is not available
        }
    }
    useEffect(() => {

        if (isFetched) {
            if (data?.data?.length) {

                setFormData(data.data);
            } else {

                setFormData(prev => {
                    const data = [{}]
                    data.forEach(x => {
                        x.difficulty = ""
                        x.position = ""
                        x.pronounced = ""
                        x.sound = ""
                        x.targetWord = ""
                    })
                    return data
                })
            }
        }
    }, [isFetched, isFetching, data?.data]);
    useEffect(() => {
        if (!selectedTerm && defaultTerm && pupil_id) {
            setSearchParams((prev) => {
                // const searchParams = getAllParamsFromEntries(prev)
                return {
                    ...Object.fromEntries(prev),
                    term: defaultTerm,
                }
            })
        }
        // eslint-disable-next-line
    }, [searchParams])
    
    useEffect(() => {
        if (!pupil_id) {
           
            navigate("/data-portal/target-screening");
            
        }
        // eslint-disable-next-line
    }, [pupil_id, navigate])

    return (
        <div>
            <Toaster />
            <Container>
                <h2 className="pt-5 mb-4 pb-2">Speech and Language</h2>
                {/* {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )} */}
                <div className="d-flex align-items-center mb-3">
                    <div className="w-25">
                        <h3> Term</h3>
                        <Select
                            value={academicTerm.find(option => option.value === searchParams.get("term"))
                            }
                            className="basic-single mr-4"
                            onChange={(e) => {

                                setSearchParams((prev) => {

                                    return {

                                        ...Object.fromEntries(prev),
                                        term: e.value,

                                    }
                                })



                            }}
                            name="term"
                            isSearchable={false}
                            options={academicTerm}
                        />
                    </div>

                    <div className="w-25">
                        <h3> Subject</h3>
                        <Select
                            value={selectedSubject}
                            className="basic-single mr-4"
                            onChange={(e) => {

                                setSearchParams((prev) => {

                                    return {

                                        ...Object.fromEntries(prev),
                                        subject: e.value,

                                    }
                                })
                            }}
                            isSearchable={false}
                            name="language"
                            options={language}
                        />
                    </div>
                    <div className="w-25">
                        <h3> Date</h3>
                        <input
                            value={selectedDate}
                            type="date"
                            className="  form-control"
                            onChange={(e) => {

                                setSearchParams((prev) => {

                                    return {

                                        ...Object.fromEntries(prev),
                                        date: e.target.value,

                                    }
                                })
                            }}

                            name="date"

                        />
                    </div>
                </div>
                {student ? <div className="row">
                    {/* Student details */}

                    <div className="col-md-6">
                        <p>Student :
                            <b>{" " + student?.student_firstname + " " + student?.student_lastname}
                            </b></p>


                    </div>

                </div> : null}
                {isFetchAble ? <div>


                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <div style={{ marginTop: "24px" }}>
                            <form onSubmit={handleSubmit}>

                                {Array.isArray(formData) && formData?.length ? (
                                    <div className="">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Target Word</th>
                                                    <th scope="col">Sound</th>
                                                    <th scope="col">Position</th>
                                                    <th scope="col">Dificulty</th>
                                                    <th scope="col">Sound pronounced instead of the target sound? </th>
                                                    {
                                                        formData?.length > 1
                                                            ?
                                                            <th scope="col">Action </th>
                                                            : null
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {formData?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <input
                                                                className="form-control"
                                                                style={{ width: "150px" }}
                                                                type="text"
                                                                value={item.targetWord}
                                                                onChange={(e) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index].targetWord = (e.target.value);
                                                                    setFormData(newFormData);
                                                                }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                style={{ width: "170px" }}
                                                                value={item.sound}
                                                                onChange={(e) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index].sound = (e.target.value);
                                                                    setFormData(newFormData);
                                                                }}
                                                            />

                                                        </td>
                                                        <td
                                                            style={{ width: "150px" }}

                                                        >

                                                            <Select
                                                                name="position"
                                                                className={`${index === formData?.length - 1 ? "mb-5 " : ""}`}
                                                                id="position"

                                                                value={positions.find(option => option.value === formData[index]?.position)}
                                                                onChange={(selectedOption) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index] = {
                                                                        ...newFormData[index],
                                                                        position: selectedOption.value
                                                                    };
                                                                    setFormData(newFormData);
                                                                }}
                                                                options={positions}
                                                            />
                                                        </td>
                                                        <td
                                                            style={{ width: "200px" }}
                                                        >

                                                            <Select
                                                                name="difficulty"
                                                                className={`${index === formData?.length - 1 ? "mb-5 " : ""}`}
                                                                id="difficulty"
                                                                value={difficulties.find(option => option.value === formData[index]?.difficulty)}
                                                                onChange={(selectedOption) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index] = {
                                                                        ...newFormData[index],
                                                                        difficulty: selectedOption.value
                                                                    };
                                                                    setFormData(newFormData);
                                                                }}
                                                                options={difficulties}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                value={item.pronounced}
                                                                onChange={(e) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index].pronounced = (e.target.value);
                                                                    setFormData(newFormData);
                                                                }}
                                                            />

                                                        </td>
                                                        {index === 0 ? null : (
                                                            <td>
                                                                <span
                                                                    className="secondaryButton text-white p-2 px-0"
                                                                    onClick={() => {
                                                                        const res = [...formData];
                                                                        res.splice(index, 1);
                                                                        setFormData(res);
                                                                    }}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        version="1.1"
                                                                        viewBox="0 0 16 16"
                                                                        width="18"
                                                                        height="18"
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
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : null}
                                <div className="d-flex justify-content-start align-items-start">
                                    <span className="primaryButton pt-3 pb-2" onClick={() => {
                                        setFormData((prev) => {
                                            return [
                                                ...prev,
                                                {
                                                    targetWord: "",
                                                    sound: "",
                                                    position: "",
                                                    difficulty: "",
                                                    pronounced: "",
                                                },
                                            ];
                                        }
                                        );
                                    }
                                    } >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 630 700">
                                            <path fill="currentColor" d="M622 106L311 417L0 106l65-65l246 245L556 41z" />
                                        </svg>
                                    </span>


                                </div>
                                <center>
                                    <div className="d-flex justify-content-center align-items-center mb-5">
                                        <button type="submit" className="primaryButton mt-5">
                                            Submit
                                        </button>
                                    </div>
                                </center>
                                {/* Add row Buttton */}

                                <br />
                            </form>

                        </div>
                    )}
                </div> : null}
            </Container>
        </div>
    );
};

export { SpeechAndLanguage };

