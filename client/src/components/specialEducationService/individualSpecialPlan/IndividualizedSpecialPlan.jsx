import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AxiosConfig from "../../../utils/axiosConfig";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { successToast } from "../../../utils";
import { DateLabels, initialData, textFields, TextLabels } from "./initialData";

import ServiceLayout from "../ServiceLayout";
import { DateTime } from "luxon";
import IndividualSchemeOfWork from "./IndividualSchemeOfWork";

const IndividualizedSpecialPlan = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const specialData = searchParams.get("specialData");
  const [formData, setFormData] = useState(initialData);
  const { selectedSchool } = useSelector((state) => state.school);
  const currentSelectedSchoolId =
    searchParams.get("school") || (selectedSchool && selectedSchool._id);
  const selected = searchParams.get("selected");
  const addRow = () => {
    setFormData((e) => ({
      ...e,
      realtedService: {
        table: [
          ...e.realtedService.table,
          {
            service: "",
            duration: "",
            frequency: "",
            place: "",
            provider: "",
          },
        ],
      },
    }));
  };
  const {
    data: IndividualizedSpecialPlan,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["specialData", specialData],
    queryFn: async () => {
      try {
        const { data: res } = await AxiosConfig.get(
          "/specialeducation/individualizedspecialplan/search",
          {
            params: {
              educationService_id: specialData,
            },
          }
        );

        return res;
      } catch (error) {
        // throw new Error("An error occurred while fetching data")
        console.log("errrr", error.message);

        return { error: error.message };
      }
    },
    refetchOnWindowFocus: false,
    retry: false,

    enabled: !!specialData,
  });

  const mutation = useMutation({
    onMutate: async () => {
      try {
        const { data } = await AxiosConfig.post(
          "/specialeducation/individualizedspecialplan",
          {
            ...formData,

            educationService_id: specialData,
            id: IndividualizedSpecialPlan?._id,
          }
        );
        successToast("Data Saved successfully");
        return data;
      } catch (error) {
        // throw new Error("An error occurred while fetching data")
        console.log(error.message);

        return { error: error.message };
      }
    },
    onSuccess: (data) => {
      refetch();
    },
  });
  useEffect(() => {
    if (!specialData) {
      navigate("/data-portal/special-education-service");
    }
    // eslint-disable-next-line
  }, [specialData, navigate]);
  useEffect(() => {
    console.log("IndividualizedSpecialPlan", IndividualizedSpecialPlan);
    if (IndividualizedSpecialPlan && !isLoading) {
      if (IndividualizedSpecialPlan?.accomodation?.table?.length === 0) {
        IndividualizedSpecialPlan.accomodation.table.push({
          need: "",
          instructions: "",
          instruction_modification: "",
          assessments: "",
          assement_modification: "",
        });
      }

      setFormData((e) => {
        const res = {
          ...e, ...IndividualizedSpecialPlan,

        }

        Object.keys(DateLabels).forEach((item) => {
          if (IndividualizedSpecialPlan[item]) {

            res[item] = DateTime.fromISO(
              IndividualizedSpecialPlan[item]
            ).toFormat("yyyy-MM-dd")
          }
        })




        return res
      });
    } else if (!isLoading) {
      setFormData((e) => ({
        ...e,
        educationService_id: specialData,
        areasOfConcern: "",
        currentPerformance: "",
        annualGoal: "",
      }));
    }

  }, [IndividualizedSpecialPlan]);
  return (
    <ServiceLayout>
      <h2 className="my-5">Individualized Education Plan</h2>


      <Form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
      >
        <div className="d-flex flex-wrap align-items-start mb-3 mt-5 justify-content-between">
          {
            Object.keys(DateLabels).map((item, index) => (
              <div className="flex-grow-1 flex-basis-25 mb-3"
                key={index}>
                <h5>{DateLabels[item]}</h5>
                <div className="mr-4">
                  <input
                    type="date"
                    value={formData[item]}
                    className="form-control"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [item]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ))

          }

        </div>

        {
          Object.keys(textFields).map((item, index) => (
            <Row key={index}>
              <Col>
                <Form.Group controlId={item}>
                  <Form.Label>{TextLabels[item]}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={formData[item]}
                    onChange={(e) => {
                      // max 1000 words

                      if (e.target.value.length > 1000) {
                        return;
                      }

                      setFormData({
                        ...formData,
                        [item]: e.target.value,
                      })
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          ))
        }
        {/* <Row>
          <Col>
            <Form.Group controlId="currentPerformance">
              <Form.Label>Current Performance(max 1000 words)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.currentPerformance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentPerformance: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="annualGoal">
              <Form.Label>Annual Goal(max 1000 words)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.annualGoal}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    annualGoal: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row> */}

        <IndividualSchemeOfWork
          formData={formData}
          setFormData={setFormData}
          IndividualizedSpecialPlan={IndividualizedSpecialPlan}
        />
        <Row>
          <h2 className="my-5">Related Services</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Related Services</th>
                <th>Duration (in-minutes)</th>
                <th>Frequency</th>
                <th>Place</th>
                <th>Service Provider</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData?.realtedService?.table?.map((item, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    <Form.Control
                      value={item.service}
                      onChange={(e) => {
                        const newTable = [...formData.realtedService.table];
                        newTable[index].service = e.target.value;
                        setFormData({
                          ...formData,
                          realtedService: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.duration}
                      type="text"
                      onChange={(e) => {
                        //donot add any other character except number
                        if (isNaN(e.target.value)) {
                          return;
                        }

                        const newTable = [...formData.realtedService.table];
                        newTable[index].duration = e.target.value;
                        setFormData({
                          ...formData,
                          realtedService: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.frequency}
                      onChange={(e) => {
                        const newTable = [...formData.realtedService.table];
                        newTable[index].frequency = e.target.value;
                        setFormData({
                          ...formData,
                          realtedService: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.place}
                      onChange={(e) => {
                        const newTable = [...formData.realtedService.table];
                        newTable[index].place = e.target.value;
                        setFormData({
                          ...formData,
                          realtedService: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.provider}
                      onChange={(e) => {
                        const newTable = [...formData.realtedService.table];
                        newTable[index].provider = e.target.value;
                        setFormData({
                          ...formData,
                          realtedService: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  {index === 0 ? null : (
                    <td>
                      <span
                        className="secondaryButton text-white pt-2 pb-2 mx-2 px-0"
                        onClick={() => {
                          const newTable = [...formData.realtedService.table];
                          newTable.splice(index, 1);
                          setFormData({
                            ...formData,
                            realtedService: { table: newTable },
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
              ))}
            </tbody>
          </table>
          <button onClick={addRow} type="button" className="primaryButton">
            Add Row
          </button>
        </Row>
        <Row>
          <h2 className="my-5">Accomodations and modifications</h2>
          <table className="table table-responsive-xl">
            <thead>
              <tr>
                <th>Area of Needs</th>
                <th>Accomodations(instructions)</th>
                <th>Accomodations(assessments)</th>
                <th>Modifications(instructions)</th>
                <th>Modifications(assessments)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData?.accomodation?.table?.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    minWidth: "300px",
                  }}
                >
                  <td>
                    {" "}
                    <Form.Control
                      value={item.need}
                      onChange={(e) => {
                        const newTable = [...formData.accomodation.table];
                        newTable[index].need = e.target.value;
                        setFormData({
                          ...formData,
                          accomodation: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.instructions}
                      onChange={(e) => {
                        const newTable = [...formData.accomodation.table];
                        newTable[index].instructions = e.target.value;
                        setFormData({
                          ...formData,
                          accomodation: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.assessment}
                      onChange={(e) => {
                        const newTable = [...formData.accomodation.table];
                        newTable[index].assessment = e.target.value;
                        setFormData({
                          ...formData,
                          accomodation: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.instruction_modification}
                      onChange={(e) => {
                        const newTable = [...formData.accomodation.table];
                        newTable[index].instruction_modification =
                          e.target.value;
                        setFormData({
                          ...formData,
                          accomodation: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      value={item.assessment_modification}
                      onChange={(e) => {
                        const newTable = [...formData.accomodation.table];
                        newTable[index].assessment_modification =
                          e.target.value;
                        setFormData({
                          ...formData,
                          accomodation: { table: newTable },
                        });
                      }}
                    />
                  </td>
                  {index === 0 ? null : (
                    <td>
                      <span
                        className="secondaryButton text-white pt-2 pb-2 mx-2 px-0"
                        onClick={() => {
                          const newTable = [...formData.accomodation.table];
                          newTable.splice(index, 1);
                          setFormData({
                            ...formData,
                            accomodation: { table: newTable },
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
              ))}
            </tbody>
          </table>
          <button
            onClick={() => {
              setFormData((e) => ({
                ...e,
                accomodation: {
                  table: [
                    ...e.accomodation.table,
                    {
                      need: "",
                      instructions: "",
                      instruction_modification: "",
                      assessments: "",
                      assement_modification: "",
                    },
                  ],
                },
              }));
            }}
            type="button"
            className="primaryButton"
          >
            Add Row
          </button>
        </Row>
        <br />
        <center>
          <button
            type="submit"
            className="primaryButton mr-2"
            disabled={mutation.isPending}
          >
            Save
          </button>
          <Link
            to={`/data-portal/special-education-service?school=${currentSelectedSchoolId}&selected=${selected}`}
            className="secondaryButton m-2"
            disabled={mutation.isPending}
          >
            Back
          </Link>
        </center>
      </Form>
    </ServiceLayout>
  );
};

export default IndividualizedSpecialPlan;
