import { ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import React, { useState } from "react";

const getPeople = () => [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
  { name: "", surname: "" },
];

const getColumns = () => [
  { columnId: "name", width: 150 },
  { columnId: "surname", width: 150 },
];

const headerRow = {
  rowId: "header",
  cells: [
    { type: "header", text: "Name" },
    { type: "header", text: "Surname" },
  ],
};

const getRows = (people) => [
  headerRow,
  ...people.map((person, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: person.name },
      { type: "text", text: person.surname },
    ],
  })),
];

const applyChangesToPeople = (changes, prevPeople) => {
  changes.forEach((change) => {
    const personIndex = change.rowId;
    const fieldName = change.columnId;
    prevPeople[personIndex][fieldName] = change.newCell.text;
  });
  return [...prevPeople];
};

function GridExample() {
  const [people, setPeople] = useState(getPeople());
  const [changedData, setChangedData] = useState([]);

  const rows = getRows(people);
  const columns = getColumns();

  const saveDataToAPI = (data) => {
    const updatedRows = data.map((change) => ({
      name: change.newCell.text,
      surname: change.columnId === "surname" ? change.newCell.text : "",
    }));

    const mergedRows = people.map((person) => ({
      name: person.name,
      surname: person.surname,
    }));

    updatedRows.forEach((updatedRow) => {
      const index = updatedRow.rowId;
      mergedRows[index] = updatedRow;
    });

    console.log("Sending data to API:", mergedRows);
  };

  const handleChanges = (changes) => {
    setPeople((prevPeople) => {
      const updatedPeople = applyChangesToPeople(changes, prevPeople);
      const lastRow = updatedPeople[updatedPeople.length - 1];
      if (lastRow.name !== "" || lastRow.surname !== "") {
        // Add a new empty row
        const newRow = { name: "", surname: "" };
        return [...updatedPeople, newRow];
      }
      return updatedPeople;
    });

    setChangedData((prevData) => [...prevData, ...changes]);
  };

  const handleSave = () => {
    saveDataToAPI(changedData);
    setChangedData([]);
  };

  return (
    <div style={{ margin: "50px" }}>
      <ReactGrid rows={rows} style={{ overflowX: "auto" }}
        stickyLeftColumns={selectOpen ? 0 : 2}
        columns={columns} onCellsChanged={handleChanges} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default GridExample;
