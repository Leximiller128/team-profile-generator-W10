// import Engineer from "./lib/Engineer.js";
const Engineer = require("./lib/Engineer.js");
// import Intern from "./lib/Intern.js";
const Intern = require("./lib/Intern.js");
// import Manager from "./lib/Manager.js";
const Manager = require("./lib/Manager.js");
// import inquirer from "inquirer";
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateTeam = require("./template.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const dirpath = path.join(OUTPUT_DIR, "./outline.html");

const teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Why type of employee are you adding to your team?",
          name: "addEmployee",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No additional members are needed",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }
  //   Generate Manager
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID number?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }
  // Generate Engineer
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID number?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "What is the engineer's GitHub URL?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }
  // Generate Intern
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID number?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the intern's school?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  function htmlBuilder() {
    console.log(teamArray);
    fs.writeFileSync(dirpath, generateTeam(teamArray), (err) =>
      err ? console.log(err) : console.log("Team is complete.")
    );
  }

  createTeam();
}

runApp();
