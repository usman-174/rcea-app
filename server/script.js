// const xlsx = require("xlsx");

// const filePath = "sample.xlsx"; // Replace with the path to your Excel file

// const workbook = xlsx.readFile(filePath);
// // const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// const data = {};

// const titles = {
//   0: "A",
//   1: "B",
//   2: "C",
//   3: "D",
//   4: "E",
//   5: "F",
//   6: "G",
//   7:"H"
// };

// // console.log({title,name : workbook.SheetNames});
// for (let sheet = 0; sheet < workbook.SheetNames.length; sheet++) {
//   const sheetName = workbook.SheetNames[sheet];
//   const worksheet = workbook.Sheets[sheetName];

//   data[sheetName] = {};
//   for (let col = 0; col <= 7; col++) {
//     const colTitle = String(worksheet[`${titles[col]}1`]?.v).trim();
//     data[sheetName][colTitle] = [];
//     console.log({ colTitle });
//     for (let row = 2; ; row++) {
//       const cellValue = worksheet[`${titles[col]}${row}`]?.v; // Assuming your data is in column D
//       if (cellValue != undefined && cellValue != "") {
//         if (
//           !Array.from(data[sheetName][colTitle]).find(
//             (item) =>
//               item.value ==
//               (typeof cellValue === "string"
//                 ? cellValue.trim()
//                 : cellValue.toString().trim())
//           )
//         ) {
//           data[sheetName][colTitle].push({
//             value:
//               typeof cellValue === "string"
//                 ? cellValue.trim()
//                 : cellValue.toString().trim(),
//             label:
//               typeof cellValue === "string"
//                 ? cellValue.trim()
//                 : cellValue.toString().trim(),
//           });
//         }
//       } else {
//         break;
//       }
//     }
//   }
// }
// //Save the output to a file in js format
// const fs = require("fs");
// console.log(JSON.stringify(data));

// //if data exists in output.js file then append the data after 2 lines gap
// fs.appendFileSync("outputN.js", "\n\n");
// fs.appendFileSync("outputN.js", `const dropdowns= ${JSON.stringify(data)};`); // Save the output to a file in js format
// // fs.appendFileSync("output.js", `${JSON.stringify(data)}`); // Save the output to a file in js format

const xlsx = require('xlsx');
const fs = require('fs');

// Function to extract and categorize topics by subjects from an Excel file
function extractTopicsBySubject(filePath) {
    // Read the Excel file
    const workbook = xlsx.readFile(filePath);

    // Initialize an object to store the topics by subjects
    const topicsBySubject = {};

    // Iterate through each sheet in the workbook
    workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

        // Loop through each row in the sheet
        jsonData.forEach(row => {
            const subject = row[0]; // Assuming the subject is in the first column
            const topic = row[3];   // Assuming the topic/objective is in the fourth column

            // Skip rows without valid subject or topic
            if (subject && topic) {
                if (!topicsBySubject[subject]) {
                    topicsBySubject[subject] = [];
                }
                topicsBySubject[subject].push(topic);
            }
        });
    });

    return topicsBySubject;
}

// Specify the path to your Excel file
const filePath = 'data.xlsx';

// Extract topics by subjects
const topicsBySubject = extractTopicsBySubject(filePath);

// Save the result as a JSON file
fs.writeFileSync('topicsBySubject.json', JSON.stringify(topicsBySubject, null, 2), 'utf8');

console.log('Topics by subject have been extracted and saved to topicsBySubject.json');

