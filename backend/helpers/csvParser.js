const fs = require("fs");
const parse = require("csv-parser");
const parser = parse({ columns: true });
const csvFile = "./data/Sale-Data.csv";

let csvData = [];
fs.createReadStream(csvFile)
  .pipe(parser)
  .on("data", (csvRow) => {
    csvData.push(csvRow);
  })
  .on("end", () => {
    // console.log(csvData);
  });

module.exports = csvData;
