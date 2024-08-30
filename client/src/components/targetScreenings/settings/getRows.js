const getRows = (pupils, fields, headerRow, defaultValues = {}) => {
  const rows = [headerRow];
  pupils.forEach((person, index) => {
    const row = {
      rowId: index.toString(),
      cells: [
        { type: "checkbox", checked: person["selected"] || false }, // Add checkbox cell
        {
          type: "text",
          text: `${person.student_firstname} ${person.student_lastname}`,
        },
        // {
        //   type: "dropdown",
        //   values: [
        //     { value: "react", label: "React" },
        //     { value: "vue", label: "Vue" },
        //     { value: "angular", label: "Angular" }
        //   ],
        //   isOpen: false,
        //   // isDisabled: false,
        //   selectedValue: "react",
        // },
        ...fields.map((field) => ({
          type: "text",
          text: person[field]?.toString() || defaultValues[field] || "",
        })),
      ],
    };

    rows.push(row);
  });

  return rows;
};

export { getRows };
