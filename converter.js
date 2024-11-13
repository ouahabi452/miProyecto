
const csvToJson = require('convert-csv-to-json');

let fileInputName = 'The_Rise_Of_Artificia_Intellegence2.csv'; 
let fileOutputName = './data.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
console.log("Conversión de CSV a JSON completada.");
