const fields = [
  "verticalT",
  "verticalC",
  "horizontalT",
  "horizontalC",
  "circleT",
  "circleC",
  "plusT",
  "plusC",
  "rectangleT",
  "rectangleC",
  "forwardSlashT",
  "forwardSlashCforwardSlash",
  "backSlashT",
  "backSlashC",
  "crossT",
  "crossC",
  "triangleT",
  "triangleC",
];

const validOptions = {
  0: "Not Acquired",
  1: "Developing",
  2: "Mastered",
};

const defaultValues = {
  verticalT: validOptions[2],
  verticalC: validOptions[2],
  horizontalT: validOptions[2],
  horizontalC: validOptions[2],
  circleT: validOptions[2],
  circleC: validOptions[2],
  plusT: validOptions[2],
  plusC: validOptions[2],
  rectangleT: validOptions[2],
  rectangleC: validOptions[2],
  forwardSlashT: validOptions[2],
  forwardSlashC: validOptions[2],
  backSlashT: validOptions[2],
  backSlashC: validOptions[2],
  crossT: validOptions[2],
  crossC: validOptions[2],
  triangleT: validOptions[2],
  triangleC: validOptions[2],
};

const Column_Row_Fields = ["", "name", ...fields];

export { Column_Row_Fields, fields, defaultValues, validOptions };
