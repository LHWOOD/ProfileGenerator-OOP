// packages needed for the application

const inquirer = require("inquirer");
const fs = require("fs");
const generateTemplate = require("./src/template");
//require 4 lib - js

const questions = [
  {
    type: "input",
    message: "Hello team manager! What is your name?",
    name: "manager-name",
  },
  {
    type: "input",
    message: "What is your employee ID number?",
    name: "manager-ID",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "manager-email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "manager-office",
  },
  //option to build team or select intern engineer etc.
];

//function to write the HTML

//not correct -- this neds path and join
function writeToFile(fileName, data) {
  fs.writeFile("index.html", data, (err) => {
    err ? console.log(err) : console.log("Team Profile had been created");
  });
}

//function to initialize the app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("index.html", generate.generateTemplate(data));
  });
}

init();
