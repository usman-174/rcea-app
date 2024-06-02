import React, { useState } from "react";
import Select from "react-select";

const data = {
  English: 'E',
  French: 'F',
  Mathematics: 'M',
  'Science/SSEE': 'S',
  'History-Geography': 'H',
  Creole: 'C',
  Arts: 'A',
  'P.E': 'P',
  Health: 'He',
  'Road Safety': 'R',
  'Citizenship/Values': 'V'
};

const Rows = ({ setClassVisitData, teacher, date }) => {
  const [value, setValue] = useState(teacher.value || '');

  const handleSelectChange = (selectedOption) => {
    setValue(selectedOption.value);
    setClassVisitData((prevData) => {
      const updatedData = prevData.map((data) => {
        if (data._id === teacher._id) {
          return {
            ...data,
            value: selectedOption.value,
            date,
          };
        }
        return { ...data, date };
      });
      return updatedData;
    });
  };

  const options = Object.entries(data).map(([label, value]) => ({
    label,
    value
  }));

  return (
    <tr key={teacher._id}>
      <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
      <td>
        <Select
          value={options.find((option) => option.value === value)}
          onChange={handleSelectChange}
          options={options}
          placeholder="Select a value"
        />
      </td>
    </tr>
  );
};

export default Rows;
