const { text } = require("body-parser");
const fs = require("fs");

const demoFileData = fs.readFileSync("text.txt", "utf-8");
// if we want to read the file in binary format don't pass the encoding utf-8
// and then use toString method to convert it to string
console.log(demoFileData);

fs.appendFileSync("text.txt", "--This is the appended data by Dheeraj");

console.log(fs.readFileSync("text.txt").toString());
// console.log(fs.mkdirSync('newFolder'));

fs.writeFileSync(
  "newFolder/index.html",
  `<html><head><title>Document</title></head><body><h1>this is created by file module</h1></body></html>`
);
