const fields = [
  "balance_left",
  "balance_right",
  "bilateral",
  "upper",
  "remarks",
];

const validOptions = {
  0: "Not at all",
  1: "Partially",
  2: "Yes",
};

const defaultValues = {
  balance_left: validOptions[2],
  balance_right: validOptions[2],
  bilateral: validOptions[2],
  upper: validOptions[2],
  remarks: "",
};

const Column_Row_Fields = ["", "Name", ...fields];
export { Column_Row_Fields, fields, validOptions, defaultValues };
