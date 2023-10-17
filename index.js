const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//gathers the user prompts for the HTML file
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
        if(error.isTtyError)
        {
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
                {name: "Engineer", value: "Engineer"}, //will send user to add engineer entries.
                {name: "Intern", value: "Intern"},  //will send user to add intern entries.
                {name: "Finish", value: "Exit"} //will finish the program
            ]
        }
    ])
    .catch((error) => {
        if(error.isTtyError)
        {
            console.error("Prompt cannot be rendered in current environment, please try again.");
        }
        else
            console.error(`Something went wrong \n + error`);
    });
}

const start = async () =>
{
    const managerAnswers = await managerPrompt(); //won't progress until the user finishes their prompts.
    console.log(managerAnswers);
    let needsEmployees = true; //will loop the following answer getter until the user no longer needs employees.
    let engineerAnswers = []; //array of engineers in the team
    let internAnswers = []; //array of interns in the team

    while(needsEmployees) //will continue to ask the user what they would like to add, or if they would like to finish
    {
        if()
    }
}

start(); //initialise the script