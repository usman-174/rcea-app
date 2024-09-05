import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { createTeacher } from "../../../store/teacher/teacherActions";
import { errorToast, successToast } from "../../../utils/index";
import { InputField } from "../../inputField";
import Styles from "./create.module.scss";

export const qualifications = [
  {
    value: "School Certificate/GCE O levels",
    label: "School Certificate/GCE O levels",
  },
  {
    value: "Higher School Certificate/ GCE A levels",
    label: "Higher School Certificate/ GCE A levels",
  },
  { value: "Teacher Certificate", label: "Teacher Certificate" },
  {
    value: "Advanced Certificate of Education",
    label: "Advanced Certificate of Education",
  },
  {
    value: "Teacher’s Diploma (Primary)",
    label: "Teacher’s Diploma (Primary)",
  },
  {
    value: "Diploma in Education Management",
    label: "Diploma in Education Management",
  },
  {
    value: "Other Deploma",
    label: "Other Deploma (Please specify)",
    // isDisabled: true,
  },
  { value: "Bachelor of Education", label: "Bachelor of Education" },
  {
    value: "Other Degree",
    label: "Other Degree (Please specify)",
    // isDisabled: true,
  },
];

const grades = [
  {
    value: "Primary school educator (GP)",
    label: "Primary school educator (GP)",
  },
  {
    value: "Primary school educator (Creole Specialisation)",
    label: "Primary school educator (Creole Specialisation)",
  },
  {
    value: "Primary school educator (HEP)",
    label: "Primary school educator (HEP)",
  },
  { value: "Support Teacher", label: "Support Teacher" },
  { value: "ICT support Officer", label: "ICT support Officer" },
  { value: "Supply Teacher", label: "Supply Teacher" },
  { value: "Educator (SEN)", label: "Educator (SEN)" },
  {
    value: "Other (Please write)",
    label: "Other (Please write)",
    isDisabled: true,
  },
];

function CreateTeacherScreen() {
  const { selectedSchool } = useSelector((state) => state.school);
  const [erros, setErrors] = useState({});
  const errMsges = Object.values(erros).filter(Boolean);
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    address: "",
    firstName: "",
    lastName: "",
    phone: "",
    hire_date: "",
    gender: "Male",
    postingYear: null,
    qualifications: [],
    grade: null,
    nationalID: null,
    appointmentDate: "",
    remarks: "",
  });


  const inputProps = (label, type, required = true, name, placeholder) => ({
    name,
    label,
    type,
    erros, setErrors,
    required,
    onChange: handleInputChange,
    value: fields[name],
    placeholder,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFields({ ...fields, [name]: value });
  };

  const handleQualificationsChange = (selectedOptions) => {
    setFields({ ...fields, qualifications: selectedOptions });
  };

  const handleGradeChange = (selectedOption) => {
    setFields({ ...fields, grade: selectedOption.value });
  };

  const submitHandler = (e) => {

    e.preventDefault();

    if (errMsges.length) {
      errorToast('Please fill in all required fields');
      return;
    }
    dispatch(createTeacher({ ...fields, school_id: selectedSchool._id }))
      .unwrap()
      .then(() => {
        e.target.reset();
        successToast("Teacher created successfully");
      })
      .catch((error) => errorToast(error.message));
  };

  return (
    <main className={Styles.mainContainer}>
      <Toaster />
      <div className="container my-4">
        <h2 className="pt-3 mb-4 pb-2">Create Teacher</h2>
        <form onSubmit={submitHandler}>
          <Row>
            <Col sm={12}>
              {/* Show error msges */}
              {errMsges.length > 0 && (
                <div className="alert alert-danger">
                  {errMsges.map((msg, index) => (
                    <p key={index}>{msg}</p>
                  ))}
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              <InputField {...inputProps("First Name", "text", true, "firstName", "Enter the first name")} />
              <InputField {...inputProps("Address", "text", true, "address", "Enter the address")} />
            </Col>
            <Col sm={12} lg={6}>
              <InputField
                {...inputProps("Last Name", "text", true, "lastName", "Enter the first name")}
              />
              <InputField
                {...inputProps("Phone Number", "text", true, "phone", "e.g., 5000 0000 or 8344 444")}
                isPhoneNumber
              />
            </Col>
            <Col sm={12} lg={6}>
              <InputField
                {...inputProps("National ID", "text", true, "nationalID", "Enter the national ID")}
              />
              <div className="mt-2">
                <label>Qualifications *</label>
                <br />
                <CreatableSelect
                  isMulti
                  options={qualifications}
                  onChange={handleQualificationsChange}
                />
              </div>
              <div className="my-3" onChange={handleInputChange}>
                <label>Gender *</label>
                <br />
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  defaultChecked
                />{" "}
                Male <span className="mr-2"></span>
                <input type="radio" value="Female" name="gender" /> Female{" "}
                <span className="mr-2"></span>
                <input type="radio" value="Other" name="gender" /> Other{" "}
                <span className="mr-2"></span>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="mt-2">
                <label>Grade *</label>
                <br />
                <CreatableSelect
                  options={grades}
                  onChange={handleGradeChange}
                />
              </div>
              <InputField
                {...inputProps(
                  "Year of Posting",
                  "number",
                  true,
                  "postingYear",
                  "Enter the year of posting"
                )}
              />
              <InputField
                {...inputProps("Hire Date", "date", true, "hire_date", "Select the hire date")}
              />
            </Col>
            <Col sm={12} lg={6}>
              <InputField
                {...inputProps("Appointment Date", "date", true, "appointmentDate", "Select the appointment date")}
              />
              <InputField
                {...inputProps("Remarks", "text", false, "remarks", "Enter the remarks")}

              />
            </Col>
          </Row>
          <div className="text-center mt-5 d-flex items-center justify-content-center">
            <button type="submit" className={`px-5 ${Styles.submitButton}`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export { CreateTeacherScreen };

