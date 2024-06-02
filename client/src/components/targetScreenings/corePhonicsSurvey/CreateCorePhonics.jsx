import React, { useEffect, useState } from "react";
import { Form, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router";
import AxiosConfig from "../../../utils/axiosConfig";
import Styles from "./create.module.scss";
import { successToast } from "../../../utils";
import { fields } from "./fields";

const CreateCorePhonics = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    loading: false,
    error: "",
    values: {},
  });
console.log(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      values: {
        ...prevData.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    const data = {
      ...location.state,
      ...formData?.values,
    };
    console.log(location.state,data);
    // data.pupil_id = data._id;
    // delete data["_id"];
// return
    try {
      const response = await AxiosConfig.post(`/corephonics/create/`, { data });
      if (response) {
        successToast("Gross motor Screening Created successfully");
        navigate(-1, {
          state: {
            language: data.language,
            grade: data.grade,
            section: data.section,
          },
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      setFormData((prevData) => ({
        ...prevData,
        loading: true,
      }));

      try {
        const response = await AxiosConfig.get(
          `/corephonics/get/${id}?language=${location.state.language}`
        );
        const { data } = response;

        setFormData((prevData) => ({
          ...prevData,
          values: fields.reduce((obj, field) => {
            obj[field] = data[field] || "";
            return obj;
          }, {})
        }));
      } catch (err) {
        setFormData((prevData) => ({
          ...prevData,
          error: err.message || err.response.data.message,
        }));
      } finally {
        setFormData((prevData) => ({
          ...prevData,
          loading: false,
        }));
      }
    };

    if (id) {
      fetchStudentData();
    }
  }, [id, location.state.language]);

  const { loading, error, values } = formData;

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <main className={Styles.mainContainer}>
      <Toaster />
      <div className="container my-4">
        <h2 className="pt-3 mb-4 pb-2">Create Core Phonics</h2>
        <Form>
          {fields.map((field, index) => (
            index % 2 === 0 && (
              <Row key={field}>
                <Col md={6}>
                  <Form.Group controlId={field}>
                    <Form.Label> {field}</Form.Label>
                    <Form.Control
                      type="text"
                      name={field}
                      value={values[field]}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                {index + 1 < fields.length && (
                  <Col md={6}>
                    <Form.Group controlId={fields[index + 1]}>
                      <Form.Label> {fields[index + 1]}</Form.Label>
                      <Form.Control
                        type="text"
                        name={fields[index + 1]}
                        value={values[fields[index + 1]]}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                )}
              </Row>
            )
          ))}
          <div className="text-center mt-5">
            <Button className="primaryButton" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              className="secondaryButton mx-2"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default CreateCorePhonics;
