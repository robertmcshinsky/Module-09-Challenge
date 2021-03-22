console.log("hello");
let myArray = [];

//const fs = require("fs");
const inquirer = require("inquirer");

// MAIN FUNCTION
// ASKS THE QUESTIONS AT THE BEGINNING
function main() {
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "choices",
        message: "Check all that apply for your custom readme.",
        choices: [
          "Title",
          "Description",
          "Table of Contents",
          "Installation",
          "Instructions",
          "Credits",
          "License",
          "Badges",
          "Features",
          "Contributers",
          "Tests",
          "Questions",
        ],
      },
    ])
    .then(information)
    .then((answered) => {
      myArray = [answered];
      console.log(answered);
    });
}

// ASKS FOR THE INFORMATION UNDERNEATH THE SUB TITLE
function information() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the Title for your project?",
    },
    {
      type: "input",
      name: "Description",
      message: "How would you describe this project?",
    },

    {
      type: "confirm",
      name: "Table of Contents",
      message: "Add table of contents?",
      default: false,
    },

    {
      type: "input",
      name: "Installation",
      message: "How would you install this project?",
    },

    {
      type: "input",
      name: "Instructions",
      message: "How can you use this project?",
    },

    {
      type: "input",
      name: "Credits",
      message: "Who was a part of the creation of this project?",
    },

    {
      type: "checkbox",
      name: "License",
      message: "Which licences do you want to include in this project?",
      choices: ["Licence1", "Licence2", "Etc."],
    },
    {
      type: "checkbox",
      name: "Badges",
      message: "Which badges do you want to include in this project?",
      choices: ["Choice1", "Choice2", "Etc."],
    },

    {
      type: "input",
      name: "Features",
      message: "What are a few features in this project?",
    },

    {
      type: "input",
      name: "Contributers",
      message: "Who are some contributers in this project?",
    },
    {
      type: "input",
      name: "Tests",
      message: "What kind of tests are recomended for this project?",
    },

    {
      type: "confirm",
      name: "Questions",
      message:
        "Do you want to include a contact the developer section for this project?",
      default: false,
    },
  ]);
}

main().then((answer) => console.log(answer));
