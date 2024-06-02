const getColumns = (fields) => {
  const columns = [];

  fields.forEach((field) => {
    if (field === "") {
      columns.push({ columnId: "checkbox", width: 20, resizable: false });
    } else if (field === "Name" || field === "name") {
      columns.push({
        columnId: "name",
        width: 150,
        resizable: true,
        editable: false,
      });
    }  else {
      columns.push({
        columnId: field,
        width:
          fields?.length >= 27 ? 340 :
          field?.length > 23
            ? 310
            : field?.length >= 17
            ? 280
            : field?.length >= 13
            ? 260
            : field?.length >= 10
            ? 230
            : 200,

        resizable: true,
        editable: true,
      });
    }
  });

  return columns;
};

export { getColumns };
