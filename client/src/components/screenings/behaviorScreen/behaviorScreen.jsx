import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Select from "react-select";
import { errorToast, successToast } from "../../../utils";

import { ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { Alert, Button, Container } from "react-bootstrap";
import AxiosConfig from "../../../utils/axiosConfig";
import { Spinner } from "../../spinner";
import { addPropertiesToPupils } from "../../targetScreenings/settings/addProperties";
import { generateHeaderRow } from "../../targetScreenings/settings/headerRow";
import { Column_Row_Fields, defaultValues, fields, validOptions } from "./fields";
import { useSelector } from "react-redux";

import { getColumns } from "../../targetScreenings/settings/getColumns";
import { getRows } from "../../targetScreenings/settings/getRows";
import { grades, sections } from "../../../utils/globals";

  console.log("Column_Row_Fields", Column_Row_Fields);
  
const headerRow = generateHeaderRow(Column_Row_Fields);

const BehaviorScreen = () => {

  const [pupils, setPupils] = useState([]);
  const [successSave, setSuccessSave] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [columns, setColumns] = useState(getColumns(Column_Row_Fields));
  const { selectedSchool } = useSelector((state) => state.school);
  const [selectOpen, setSelectOpen] = useState(false);


  const [error, setError] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const handleColumnResize = (ci, width) => {
    setColumns((prevColumns) => {
      const columnIndex = prevColumns.findIndex((el) => el.columnId === ci);
      const resizedColumn = prevColumns[columnIndex];
      const updatedColumn = { ...resizedColumn, width };
      prevColumns[columnIndex] = updatedColumn;

      return [...prevColumns];
    });
  };

  const handleChanges = (changes) => {

    setPupils((prevPeople) => applyChangesToPeople(changes, prevPeople));



  };

  const applyChangesToPeople = (changes, prevPeople) => {
    const updatedPeople = [...prevPeople];

    changes.forEach((change) => {
      const personIndex = change.rowId;
      const fieldName = change.columnId;

      const dataRow = updatedPeople[personIndex];
      if (change.type === "checkbox" && dataRow) {
        dataRow.selected = !dataRow.selected;
      } else {
        const val = validOptions[Number(change.newCell.text)] || change.newCell.text;
        updatedPeople[personIndex][fieldName] = val || change.newCell.text;


        dataRow.selected = true
      }
    });

    return updatedPeople;
  };

  const handleSave = () => {
    let result = pupils.filter((x) => x.selected);

    if (result.length <= 0) {
      errorToast("Please Select a row to apply changes");

      return;
    }
    result = result.map((person) => {
      const { student_firstname, student_lastname, _id } = person;
      const fullname = `${student_firstname} ${student_lastname}`;

      const dynamicFields = {};
      fields.forEach((field) => {
        dynamicFields[field] = person[field] || "";
      });

      return {
        pupil_id: _id || "",
        fullname,

        ...dynamicFields,
      };
    });

    AxiosConfig.post("/behaviorscr/create", result)
      .then(() => {
        successToast("Gross motor Screening Created successfully");
        setSuccessSave(true);
      })
      .catch(() => errorToast("An error happened. try again"));
  };
  useEffect(() => {
    let pupilx = [];
    let motorData = [];

    const fetchStudentData = async () => {
      setLoading(true);

      try {
        const response = await AxiosConfig.post("/pupil/getbysectiongrade", {
          student_section: selectedSection.value,
          grade: selectedGrade.value,
          school_id: selectedSchool._id,

        });
        pupilx = response.data;
        setPupils(response.data);
      } catch (err) {
        setError(err.message || err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchScreenPupils = async () => {
      try {
        const response = await AxiosConfig.post("/behaviorscr/all", {
          grade: selectedGrade.value,

          student_section: selectedSection.value,
        });
        motorData = response.data;

      } catch (err) {
        console.log("error");
      }
    };

    if (selectedGrade && selectedSection) {
      Promise.all([fetchStudentData(), fetchScreenPupils()]).then(() => {
        const combined = addPropertiesToPupils(pupilx, motorData, fields);
        const updatedRows = getRows(combined, fields, headerRow, defaultValues);

        setRows(updatedRows);
        setSuccessSave(false)
      });
    }
  }, [selectedGrade, selectedSection, successSave, selectedSchool._id]);

  useEffect(() => {
    if (pupils.length > 0) {


      const updatedRows = getRows(pupils, fields, headerRow, defaultValues);


      setRows(updatedRows);
    }

    const allSelected = pupils.every((pupil) => pupil.selected);

    setSelectAll(allSelected);
  }, [pupils]);

  return (
    <div>
      <Toaster />
      <Container>
        <h2 className="pt-5 mb-4 pb-2">Socio-Emotional Screening</h2>
        {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
        <div className="d-flex align-items-center mb-3">
          <div className="w-25">
            <h3> Grade</h3>
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
            <h3> Section</h3>
            <Select
              value={selectedSection}
              className="basic-single"
              onChange={(e) => setSelectedSection(e)}
              onMenuClose={() => setSelectOpen(false)}
              onMenuOpen={() => setSelectOpen(true)}
              isSearchable={false}
              name="section"
              options={sections}
            />
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div style={{ marginTop: "24px" }}>
            {rows?.length ? (
              <>
                <div>
                  Select All{" "}
                  <input
                    type="checkbox"
                    value={selectAll}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setSelectAll(isChecked);
                      setPupils((prev) =>
                        prev.map((pupil) => ({
                          ...pupil,
                          selected: isChecked,
                        }))
                      );
                    }}
                  />
                </div>

                <div style={{ overflowX: "auto", margin: "auto" }}>
                  <ReactGrid
                    rows={rows}
                    stickyLeftColumns={selectOpen ? 0 : 2}
                    columns={columns}
                    onColumnResized={handleColumnResize}
                    onCellsChanged={handleChanges}
                  />
                </div>
                <div className="text-center mt-5">
                  <Button className="primaryButton" onClick={handleSave}>
                    Submit
                  </Button>
                </div>
              </>
            ) : null}
            <p>
              Note: Please Enter data as follow
              <br />
              0: Not at all
              <br />
              1: Some of the time
              <br />
              2: Most of the time

            </p>
          </div>
        )}

      </Container>
    </div>
  );
};

export { BehaviorScreen };
