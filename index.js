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
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: "input", //basic text input
            name: "title",
            message: "Welcome to the HTML generator. \nTest"
        },
        {

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
    const answers = await userPrompt(); //won't progress until the user finishes their prompts.
    console.log(answers);
}

start(); //initialise the script