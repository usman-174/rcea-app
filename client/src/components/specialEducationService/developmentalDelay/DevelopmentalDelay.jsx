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

const DevelopmentalDelay = () => {
  const navigate = useNavigate(); // axios
  const [searchParams, setSearchParams] = useSearchParams();
  const specialData = searchParams.get("specialData");
  const { selectedSchool } = useSelector((state) => state.school);
  const currentSelectedSchoolId =
    searchParams.get("school") || (selectedSchool && selectedSchool._id);
  const selected = searchParams.get("selected");
  const [formData, setFormData] = useState(initialData);

  const handleFirstOptionChange = (index, subIndex, mode, event) => {
    const { name, value, type, checked } = event.target;
    const newData = { ...formData };
    console.log({ name, value, type, checked });
    if (type === "checkbox") {
      if (mode === "check") {
        newData.data[index].options[subIndex].checked = true;
      } else if (mode === "uncheck") {
        newData.data[index].options[subIndex].checked = false;
      }
    }

    setFormData(newData);
  };
  const handleChildOptionChange = (
    index,
    subIndex,
    innerIndex,
    mode,
    event
  ) => {
    const { name, value, type, checked } = event.target;
    const newData = { ...formData };

    if (type === "checkbox") {
      if (mode === "check") {
        newData.data[index].options[subIndex].options2[
          innerIndex
        ].checked = true;
      } else if (mode === "uncheck") {
        newData.data[index].options[subIndex].options2[
          innerIndex
        ].checked = false;
      }
    }

    setFormData(newData);
  };
  const {
    data: developmentalDelaySpecialData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["specialData", specialData],
    queryFn: async () => {
      try {
        const { data: res } = await AxiosConfig.get(
          "/specialeducation/developmentalDelay/search",
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
          "/specialeducation/developmentalDelay",
          {
            ...formData,

            educationService_id: specialData,
            id: developmentalDelaySpecialData?._id,
          }
        );
        successToast("Data Saved successfully");
        return data;
      } catch (error) {
        // throw new Error("An error occurred while fetching data")
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
    // eslint-disable-next-line
  }, [specialData, navigate]);
  useEffect(() => {
    console.log(developmentalDelaySpecialData);
    if (developmentalDelaySpecialData && !isLoading) {
      console.log({ developmentalDelaySpecialData });
      setFormData(developmentalDelaySpecialData);
    } else if (!isLoading) {
      setFormData(initialData);
    }
  }, [developmentalDelaySpecialData]);
  return (
    <ServiceLayout>
      <h2 className="my-5">Developmental Delay</h2>
     
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
      >
        {formData?.data?.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom:
                index !== formData?.data.length - 1 ? "1px solid #000" : "",
              marginBottom: "20px",
            }}
          >
            <h3>{item.title}</h3>
            {item.options.map((option, subIndex) => (
              <div key={subIndex} className="mt-3">
                <Form.Group as={Row}>
                  <Form.Label column sm={6}>
                    {option.title}
                  </Form.Label>
                  <Col sm={6}>
                    <div className="d-flex align-items-center ">
                      <Form.Check
                        type="checkbox"
                        label="Yes"
                        name="check"
                        checked={option.checked === true}
                        onChange={(event) =>
                          handleFirstOptionChange(
                            index,
                            subIndex,
                            "check",
                            event
                          )
                        }
                        className="mx-2"
                      />
                      <Form.Check
                        type="checkbox"
                        name="check"
                        label="No"
                        checked={option.checked === false}
                        onChange={(event) =>
                          handleFirstOptionChange(
                            index,
                            subIndex,
                            "uncheck",
                            event
                          )
                        }
                      />
                    </div>
                  </Col>
                </Form.Group>
                {/* Render child options if they exist and parent option is checked */}
                {option?.options2 &&
                  option.options2.map((childOption, childIndex) => (
                    <Form.Group as={Row} key={childIndex} className="mx-2">
                      <Form.Label column sm={6}>
                        {childOption.title}
                      </Form.Label>

                      <Form.Check
                        type="checkbox"
                        // label="Yes"
                        name="childcheck"
                        checked={childOption.checked === true}
                        onChange={(event) =>
                          handleChildOptionChange(
                            index,
                            subIndex,
                            childIndex,
                            childOption.checked ? "uncheck" : "check",
                            event
                          )
                        }
                        className="mx-2"
                      />
                    </Form.Group>
                  ))}
              </div>
            ))}
          </div>
        ))}
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

export default DevelopmentalDelay;
