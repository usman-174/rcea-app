import { useMutation, useQuery } from "@tanstack/react-query";
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
import { InputField } from "../../inputField";
import { Spinner } from "../../spinner";

const initialFormData = [
    {
        skill: "Showing Body Parts",
        level: "",
        score: 0
    },
    {
        skill: "Naming Body Parts",
        level: "",
        score: 0
    },
    {
        skill: "Draw a Person",
        level: "",
        score: 0
    },
   
    {
        skill: "Space",
        level: "",
        score: 0
    },
    {
        skill: "Time",
        level: "",
        score: 0
    },
    {
        skill: "Rote counting",
        level: "",
        score: 0
    },
    {
        skill: "Number recognition",
        level: "",
        score: 0
    },
    {
        skill: "Number concept",
        level: "",
        score: 0
    },
    {
        skill: "Pre-writing lines",
        level: "",
        score: 0
    },
    {
        skill: "Pencil grip",
        level: "",
        score: 0
    },
    {
        skill: "Beads",
        level: "",
        score: 0
    },
    {
        skill: "Scissors",
        level: "",
        score: 0
    },
    {
        skill: "Blocks",
        level: "",
        score: 0
    }
]


const PsychoMotor = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { selectedTerm: defaultTerm } = useSelector((state) => state.academics);
    const pupil_id = searchParams.get("pupil_id");
    const selectedSubject = searchParams.get("subject") ? { value: searchParams.get("subject"), label: searchParams.get("subject") } : null;
    const selectedTerm = searchParams.get("term") ? { value: searchParams.get("term"), label: searchParams.get("term") } : null;
    const selectedDate = searchParams.get("date") ? searchParams.get("date") : null;

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
        queryKey: ["psychomotor", {
            pupil_id, term: searchParams.get("term"),
            subject: searchParams.get("subject"),
            date: selectedDate

        }],
        queryFn: async ({ queryKey }) => {
            // eslint-disable-next-line
            const [_, parameters] = queryKey;
            const res = await AxiosConfig.get(`/psychomotor/search`, {
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
            const response = await AxiosConfig.post("/psychomotor/", data);
            return response.data;
        },
        onSuccess: () => {
            successToast("Data Submitted successfully");

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
                data: formData,
                date: searchParams.get("date"),
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
                    const data = [...prev]
                    data.forEach(x => {
                        x.score = 0
                        x.level = ""
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
                <h2 className="pt-5 mb-4 pb-2">PsychoMotor</h2>
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

                <div className="row">
                    {/* Student details */}

                    <div className="col-md-6">
                        <p>Student :
                            <b>{" " + student?.student_firstname + " " + student?.student_lastname}
                            </b></p>


                    </div>

                </div>
                {isFetchAble ? <div>


                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <div style={{ marginTop: "24px" }}>
                            <form onSubmit={handleSubmit}>

                                {Array.isArray(formData) && formData?.length ? (
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col ">Skill</th>
                                                    <th scope="col">Level</th>
                                                    <th scope="col">Score</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{
                                                height: "75vh"
                                            }}>
                                                {formData?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.skill}</td>
                                                        <td>
                                                            <InputField
                                                                type="text"
                                                                value={item.level}
                                                                onChange={(e) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index].level = (e.target.value);
                                                                    setFormData(newFormData);
                                                                }}
                                                            />

                                                        </td>

                                                        <td>
                                                            <InputField
                                                                type="Number"
                                                                value={item.score}
                                                                onChange={(e) => {
                                                                    const newFormData = [...formData];
                                                                    newFormData[index].score = Number(e.target.value);
                                                                    setFormData(newFormData);
                                                                }}
                                                            />

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : null}

                                <center>
                                    <div className="d-flex justify-content-center align-items-center mb-5">
                                        <button type="submit" className="primaryButton mt-5">
                                            Submit
                                        </button>
                                    </div>
                                </center>
                                <br />
                            </form>

                        </div>
                    )}
                </div> : null}
            </Container>
        </div>
    );
};

export { PsychoMotor };

