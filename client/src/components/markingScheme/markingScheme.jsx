/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Alert,
  Container,
  Table,
  Button,
  Form,
} from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import Select from "react-select";
import { errorToast, successToast } from "../../utils";
import AxiosConfig from "../../utils/axiosConfig";
import { grades, language, sections } from "../../utils/globals";
import { Spinner } from "../spinner";

export const MarkingScheme = () => {
  const subjects = language;
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [successSave, setSuccessSave] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectOpen, setSelectOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedGrade || !selectedSection || !selectedSubject) {
      setError("Please select grade, section, and subject");
      return;
    }

    const allRowsEmpty = rows
      .map((row) => ({
        questionNumber: row.questionNumber,
        topic: row.topic,
        subTopic: row.subTopic,
        numberOfMarks: row.numberOfMarks,
      }))
      .some((row) => {
        return Object.values(row).every((value) => value === "");
      });

    if (allRowsEmpty) {
      errorToast("Please fill in all rows");
      return;
    }

    setLoading(true);
    setError("");
   
    const data = {
      subject: selectedSubject.value,
      grade: selectedGrade.value,
      student_section: selectedSection.value,
      rows,
    };

    AxiosConfig.post("/markingcsch/create", data)
      .then(() => {
        successToast("Marking Scheme created successfully");
        setSuccessSave(true);
      })
      .catch(() => errorToast("An error occurred. Please try again."))
      .finally(() => setLoading(false));
  };

  const handleRowChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        itemNumber: rows.length + 1,
        questionNumber: "",
        topic: "",
        subTopic: "",
        numberOfMarks: "",
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  useEffect(() => {
    if (selectedGrade && selectedSection && selectedSubject) {
      const fetchMarkingScheme = async () => {
        setLoading(true);
        try {
          const { data } = await AxiosConfig.post("/markingcsch/all", {
            student_section: selectedSection.value,
            grade: selectedGrade.value,
            subject: selectedSubject.value,
          });

          // Update rows state with the fetched data
          if (data[0]?.rows?.length) {
            setRows(data[0].rows);
          } else {
            setRows([
              {
                itemNumber: 1,
                questionNumber: "",
                topic: "",
                subTopic: "",
                numberOfMarks: "",
              },
            ]);
          }
        } catch (err) {
          setError(err.message || err.response.data.message);
        } finally {
          setLoading(false);
        }
      };
      fetchMarkingScheme();
    } else {
      setRows([]);
    }
  }, [selectedGrade, selectedSection, selectedSubject, successSave]);

  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Marking Scheme</h2>
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
				<div className="d-flex align-items-center mb-3">
					<div className="w-25">
						<h3>Select Grade</h3>
						<Select
							value={selectedGrade}
							className="basic-single mr-4"
							onChange={(e) => setSelectedGrade(e)}
							name="grade"
							onMenuClose={() => setSelectOpen(false)}
              onMenuOpen={() => setSelectOpen(true)}
              isSearchable={false}
							options={grades}
						/>
					</div>
					<div className="w-25">
						<h3>Select Section</h3>
						<Select
							value={selectedSection}
							className="basic-single mr-4"
							onChange={(e) => setSelectedSection(e)}
							onMenuClose={() => setSelectOpen(false)}
              onMenuOpen={() => setSelectOpen(true)}
              isSearchable={false}
							name="section"
							options={sections}
						/>
					</div>
					<div className="w-25">
						<h3>Select Subject</h3>
						<Select
							value={selectedSubject}
							className="basic-single"
							onChange={(e) => setSelectedSubject(e)}
							onMenuClose={() => setSelectOpen(false)}
              onMenuOpen={() => setSelectOpen(true)}
              isSearchable={false}
							name="subject"
							options={subjects}
						/>
					</div>
				</div>
				{loading ? (
					<Spinner />
				) : selectedSection && selectedSection && selectedSubject ? (
					<div className="mt-3">
						<Table striped bordered>
							<thead>
								<tr>
									<th>Item Number</th>
									<th>Question Number</th>
									<th>Topic</th>
									<th>Subtopic</th>
									<th>Number of Marks</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{rows.map((row, index) => (
									<tr key={index}>
										<td>{row.itemNumber}</td>
										<td>
											<Form.Control
												type="text"
												name="questionNumber"
												value={row.questionNumber}
												onChange={(e) => handleRowChange(e, index)}
											/>
										</td>
										<td>
											<Form.Control
												type="text"
												name="topic"
												value={row.topic}
												onChange={(e) => handleRowChange(e, index)}
											/>
										</td>
										<td>
											<Form.Control
												type="text"
												name="subTopic"
												value={row.subTopic}
												onChange={(e) => handleRowChange(e, index)}
											/>
										</td>
										<td>
											<Form.Control
												type="text"
												name="numberOfMarks"
												value={row.numberOfMarks}
												onChange={(e) => handleRowChange(e, index)}
											/>
										</td>
										<td>
											<Button
												variant="danger"
												onClick={() => handleDeleteRow(index)}
											>
												Delete
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<Button
							variant="primary"
							className="m-2"
							onClick={handleAddRow}
						>
							Add Row
						</Button>
						<div className="mx-auto text-center">
							<Button
								variant="success"
								className="mx-auto"
								onClick={handleSubmit}
							>
								Submit
							</Button>
						</div>
					</div>
				) : null}
      </Container>
    </div>
  );
};

export default MarkingScheme;
