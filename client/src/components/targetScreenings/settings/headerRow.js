const generateHeaderRow = (fields) => {
  const headerCells = fields.map((field="") => ({
    type: "header",
    text: capitalizeWords(field),
  }));

  return {
    rowId: "header",
    cells: headerCells,
  };
};

function capitalizeWords(str) {
  if (!str) return "";

  let words = str?.replace(/_/g, " ").split(" ");
  words = str?.replace(/_/g, "-").split(" ");
  var capitalizedWords = words?.map(function (word) {
    return word.charAt(0)?.toUpperCase() + word?.slice(1);
  });
  return capitalizedWords?.join(" ");
}
export { generateHeaderRow };
