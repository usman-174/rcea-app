const fields = [
  "levelD1",
  "levelD2",
  "levelE2",
  "levelE3",
  "levelF",
  "levelG",
  "levelH",
  "levelI",
  "levelJ",
  "levelK",
  "levelL",
  "levelM",
];

const dropdownValues = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];
function convertFields(fields) {
  return fields.map((field) => {
    const match = field.match(/(level[A-Z]\w*)/);
    if (match) {
      const replaced = match[1].replace(/([A-Z])/g, "-$1").toUpperCase();
      return field.replace(match[1], replaced);
    }
    return field;
  });
}
const convertedFields = convertFields([
  "levelD1",
  "levelD2",
  "levelE2",
  "levelE3",
  "levelF",
  "levelG",
  "levelH",
  "levelI",
  "levelJ",
  "levelK",
  "levelL",
  "levelM",
]);
const HEADER_COLS = ["", "Name", ...convertedFields];

const Column_Row_Fields = ["", "Name", ...fields];
export { Column_Row_Fields, HEADER_COLS, dropdownValues, fields };

