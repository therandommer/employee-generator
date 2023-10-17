const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//prompt to add managers
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input", //basic text input
            name: "managerName",
            message: "Welcome to the Team generator. \nPlease fill in the following details for the team manager:\n Name: "
        },
        {
            type: "input",
            name: "managerID",
            message: "ID: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Email: "
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Office Number: "
        }
    ])
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt cannot be rendered in current environment, please try again.");
            }
            else
                console.error(`Something went wrong \n + error`);
        });
}

//prompt to add engineers
const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please fill in the following details for an engineer:\n Name: "
        },
        {
            type: "input",
            name: "engineerID",
            message: "ID: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Email: "
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Github Username: "
        }
    ])
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt cannot be rendered in current environment, please try again.");
            }
            else
                console.error(`Something went wrong \n + error`);
        });
}

//prompt to add interns
const internPrompt = () => {
    return inquirer.prompt([
        {

            type: "input",
            name: "internName",
            message: "Please fill in the following details for an intern:\n Name: "
        },
        {
            type: "input",
            name: "internID",
            message: "ID: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "Email: "
        },
        {
            type: "input",
            name: "internSchool",
            message: "School: "
        }
    ])
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt cannot be rendered in current environment, please try again.");
            }
            else
                console.error(`Something went wrong \n + error`);
        });
}
const menuPrompt = () => {
    return inquirer.prompt([ //overall menu item to be called multiple times.
        {
            type: "list",
            name: "menu",
            message: "What type of employee would you like to add?",
            choices: [
                { name: "Engineer", value: "Engineer" }, //will send user to add engineer entries.
                { name: "Intern", value: "Intern" },  //will send user to add intern entries.
                { name: "Finish", value: "Exit" } //will finish the program
            ]
        }
    ])
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt cannot be rendered in current environment, please try again.");
            }
            else
                console.error(`Something went wrong \n + error`);
        });
}

const start = async () => {
    const managerAnswers = await managerPrompt(); //won't progress until the user finishes their prompts.
    console.log(managerAnswers);
    let needsEmployees = true; //will loop the following answer getter until the user no longer needs employees.
    let engineerAnswers = []; //array of engineers in the team
    let internAnswers = []; //array of interns in the team

    while (needsEmployees) //will continue to ask the user what they would like to add, or if they would like to finish
    {
        const userChoice = await menuPrompt();
        if (userChoice.menu === "Engineer") {
            console.log("Engineer selected");
            const tmpEngineerAnswers = await engineerPrompt();
            engineerAnswers.push(tmpEngineerAnswers);//pushes the answers to the engineer array
        }
        else if (userChoice.menu === "Intern") {
            console.log("Intern selected");
            const tmpInternAnswers = await internPrompt();
            internAnswers.push(tmpInternAnswers);//pushes the answers to the intern array
        }
        else if (userChoice.menu === "Exit") //will set needsEmployees to false to exit the loop of asking for more employees
        {
            console.log("Program Exit");
            needsEmployees = false;
        }
    }
}

start(); //initialise the script