const getRows = (pupils, fields, headerRow) => {
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

        ...fields.map((field) => ({
          type: "text",
          text: person[field]?.toString() || "",
        })),
      ],
    };

    rows.push(row);
  });

  return rows;
};

export {getRows}