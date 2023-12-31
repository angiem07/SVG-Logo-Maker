const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer"); 
const createSVG = require("./lib/createSVG"); 

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for logo (up to three characters): ",
    validate: function (text) {
      return text.length <= 3 && text.length > 0;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color: ",
  },
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
    message: "Select a shape",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape's color: ",
  },
  {
    type: "input",
    name: "filename",
    message: "Enter the desired filename (without extension), if not entered default to logo:",
    default: "logo", // default filename if the user doesn't provide one
  },
];

function userInput() {
  return inquirer.prompt(questions);
}

function writeToFile(filename, data) {
    try {
      const folderPath = path.join(__dirname, "examples");
      const filePath = path.join(folderPath, `${filename}.svg`);
      fs.mkdirSync(folderPath, { recursive: true }); 
      fs.writeFileSync(filePath, data);
      console.log(`SVG file generated, search for: examples/${filename}.svg`);
    } catch (error) {
      console.log(error);
    }
  }

function main() {
  // prompt the user
  userInput()
    .then((answers) => {
      // create the svg data
      const svgData = createSVG(answers);
      // write the svg data to the specified file
      writeToFile(answers.filename, svgData);
    })
    .catch((error) => console.error(error));
}

main();
