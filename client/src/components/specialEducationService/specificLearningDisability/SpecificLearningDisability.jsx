import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AxiosConfig from "../../../utils/axiosConfig";

import { initialData } from "./initalData";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { successToast } from "../../../utils";
import { useSelector } from "react-redux";

import ServiceSelectBox from "../selectStudent/ServiceSelectBox";
import ServiceLayout from "../ServiceLayout";

const SpecificLearningDisability = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); // Move this line before using searchParams
  const specialData = searchParams.get("specialData");
  const { selectedSchool } = useSelector((state) => state.school);
  const currentSelectedSchoolId =
    searchParams.get("school") || (selectedSchool && selectedSchool._id);
  const selected = searchParams.get("selected");
  const [formData, setFormData] = useState(initialData);

  const handletable1Change = (index, key, type) => {
    console.log({
      index,
      key,
      type,
    });
    const newFormData = { ...formData };
    if (type === "check") {
      newFormData.table1[index][key] = true;
    } else {
      newFormData.table1[index][key] = false;
    }
    setFormData(newFormData);
  };

  const handletable2Change = (index, key, type) => {
    console.log({
      index,
      key,
      type,
    });
    const newFormData = { ...formData };
    if (type === "check") {
      newFormData.table2[index][key] = true;
    } else {
      newFormData.table2[index][key] = false;
    }
    setFormData(newFormData);
  };

  const {
    data: specificLearningDisabilitySpecialData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["specialData", specialData],
    queryFn: async () => {
      try {
        const { data: res } = await AxiosConfig.get(
          "/specialeducation/specificLearningDisability/search",
          {
            params: {
              educationService_id: specialData,
            },
          }
        );

        return res;
      } catch (error) {
        console.log("errrr", error.message);
        return initialData;
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
          "/specialeducation/specificLearningDisability",
          {
            ...formData,
            educationService_id: specialData,
            id: specificLearningDisabilitySpecialData?._id,
          }
        );
        successToast("Data Saved successfully");
        return data;
      } catch (error) {
        console.log(error.message);
        return initialData;
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
  }, [specialData, navigate]);

  useEffect(() => {
    if (specificLearningDisabilitySpecialData && !isLoading) {
      setFormData(specificLearningDisabilitySpecialData);
    } else if (!isLoading) {
      setFormData(initialData);
    }
  }, [specificLearningDisabilitySpecialData]);

  return (
    <ServiceLayout>
      <h2 className="my-5">Specific Learning Disability</h2>
      <div>
        <h5>Select a service</h5>
        <div className="w-50">
          <ServiceSelectBox currentService="specific-learning-disability" />
        </div>
      </div>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
      >
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Area of Concern</th>
                <th>Present Level of Performance</th>
                <th>Goal</th>
                <th>Accommodations</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
              {formData?.table1?.map((data, index) => (
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        checked={data.check1 === true}
                        onChange={(e) => {
                          handletable1Change(index, "check1", "check");
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        className="mx-2"
                        label="No"
                        checked={data.check1 === false}
                        onChange={(event) =>
                          handletable1Change(index, "check1", "uncheck")
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        checked={data.check2 === true}
                        onChange={(e) => {
                          handletable1Change(index, "check2", "check");
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        className="mx-2"
                        label="No"
                        checked={data.check2 === false}
                        onChange={(event) =>
                          handletable1Change(index, "check2", "uncheck")
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        checked={data.check3 === true}
                        onChange={(e) => {
                          handletable1Change(index, "check3", "check");
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        className="mx-2"
                        label="No"
                        checked={data.check3 === false}
                        onChange={(event) =>
                          handletable1Change(index, "check3", "uncheck")
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        checked={data.check4 === true}
                        onChange={(e) => {
                          handletable1Change(index, "check4", "check");
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        className="mx-2"
                        label="No"
                        checked={data.check4 === false}
                        onChange={(event) =>
                          handletable1Change(index, "check4", "uncheck")
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Area of Concern</th>
                <th>A concern w.r.t peer</th>
                <th>Inadequate classroom acheivement</th>
                <th>A concern w.r.t peer</th>
              </tr>
            </thead>
            <tbody>
              {formData?.table2?.map((data, index) => (
                <tr key={index}>
                  <td>
                    <span>{data.title}</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        checked={data.check1 === true}
                        onChange={(e) => {
                          handletable2Change(index, "check1", "check");
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        className="mx-2"
                        label="No"
                        checked={data.check1 === false}
                        onChange={(event) =>
                          handletable2Change(index, "check1", "uncheck")
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span>{data.title2}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        checked={data.check2 === true}
                        onChange={(e) => {
                          handletable2Change(index, "check2", "check");
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        className="mx-2"
                        label="No"
                        checked={data.check2 === false}
                        onChange={(event) =>
                          handletable2Change(index, "check2", "uncheck")
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        <center>
          <button
            type="submit"
            className="primaryButton"
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

export default SpecificLearningDisability;
