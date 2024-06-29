
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/Javascript/generateMarkdown.js");


const questions = [
  {
    type: "input",
    message: "Title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Description of your project?",
    name: "description"
  },
  {
    type: "input",
    message: "Steps required to install your project?",
    name: "installation"
  },
  {
    type: "input",
    message: "Usage of your project?",
    name: "usage"
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "None"
    ]
  },
  {
    type: "input",
    message: "Contribution guidelines for your project?",
    name: "contributing"
  },
  {
    type: "input",
    message: "Tests for your project?",
    name: "tests"
  },
  {
    type: "input",
    message: "GitHub username?",
    name: "GitHub"
  }, 
  {
    type: "input",
    message: "eMail address?",
    name: "email"

  }
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}


function init() {
  inquirer.prompt(questions).then(function(data) {
    writeToFile("generatedREADME.md", generateMarkdown(data));
  });
}


init();