import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import AxiosConfig from "../../../utils/axiosConfig";
import { academicTerm, language } from "../../../utils/globals";
import { Spinner } from "../../spinner";
import { InputField } from "../../inputField";
import { errorToast, successToast } from "../../../utils";
import { useSelector } from "react-redux";

const initialFormData = [{ "skill": "Letter Names Upper Case", "item": "LnU", "score": 0 }, { "skill": "Letter Names Lower Case", "item": "LnL", "score": 0 }, { "skill": "Consonant Sounds", "item": "Cs", "score": 0 }, { "skill": "Long Vowel Sounds", "item": "Lvs", "score": 0 }, { "skill": "Short Vowel Sounds", "item": "Svs", "score": 0 }, { "skill": "Short Vowels in CVC words", "item": "Cvc", "score": 0 }, { "skill": "Consonant Blends with short vowels", "item": "Blends", "score": 0 }, { "skill": "Short Vowels, digraphs, and -tch trigraph", "item": "Teams", "score": 0 }, { "skill": "R-controlled vowel teams", "item": "RControlled", "score": 0 }, { "skill": "Long vowel spellings", "item": "LongVs", "score": 0 }, { "skill": "Variant spellings", "item": "Variant", "score": 0 }, { "skill": "Low Frequency vowel and consonant spellings", "item": "LowFreq", "score": 0 }, { "skill": "Multi-syllabic words", "item": "MultiSyllabic", "score": 0 }]

const CorePhonicsSurvey = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pupil_id = searchParams.get("pupil_id");
  const { selectedTerm: defaultTerm } = useSelector((state) => state.academics);

  const selectedSubject = searchParams.get("subject") ? { value: searchParams.get("subject"), label: searchParams.get("subject") } : null;
  const selectedTerm = searchParams.get("term") ? { value: searchParams.get("term"), label: searchParams.get("term") } : null;
  const [formData, setFormData] = useState(initialFormData);
  const selectedDate = searchParams.get("date") ? searchParams.get("date") : null;
  const {
    data: student,

  } = useQuery({
    queryKey: [pupil_id, { id: pupil_id }],
    queryFn: async ({ queryKey }) => {
      // eslint-disable-next-line
      const [__, parameters] = queryKey;
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
    queryKey: ["corePhonics", {
      pupil_id, term: searchParams.get("term"),
      subject: searchParams.get("subject"),
      date: selectedDate
    }],
    queryFn: async ({ queryKey }) => {
      // eslint-disable-next-line
      const [_, parameters] = queryKey;
      const res = await AxiosConfig.get(`/corephonics/search`, {
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
      const response = await AxiosConfig.post("/corephonics/", data);
      return response.data;
    },
    onSuccess: () => {
      successToast("Data Submitted successfully");
      // setFormData(initialFormData);
      // refetch()
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
        date: searchParams.get("date"),
        subject: searchParams.get("subject"),
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
          const data = [...prev]
          data.forEach(x => {
            x.score = 0
          })
          return data
        })
      }
    }
    // eslint-disable-next-line
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
        <h2 className="pt-5 mb-4 pb-2">Core Phonics Survey</h2>
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
                          <th scope="col w-25">Skill</th>
                          <th scope="col">Item</th>
                          <th scope="col">Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData?.map((item, index) => {

                          return (
                            <tr key={item.skill}>
                              <td>{item.skill}</td>
                              <td>{item.item}</td>
                              <td>
                                <InputField
                                  type="number"
                                  value={item.score}
                                  onChange={(e) => {
                                    const newFormData = [...formData];
                                    newFormData[index].score = Number(e.target.value);
                                    setFormData(newFormData);
                                  }}
                                />

                              </td>
                            </tr>
                          )
                        })}
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

export { CorePhonicsSurvey };

