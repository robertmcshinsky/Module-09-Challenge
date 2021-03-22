console.log("hello");

//const fs = require("fs");
const inquirer = require("inquirer");

// MAIN FUNCTION
// ASKS THE QUESTIONS AT THE BEGINNING
function main() {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "createReadme",
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
  ]);
}

// ASKS FOR A TITLE
function title() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of this project?",
    },
  ]);
}

// ASKS FOR THE INFORMATION UNDERNEATH THE SUB TITLE
function information(title) {
  if (title === "Title") {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the Title for your project?",
      },
    ]);
  }
  if (title === "Description") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Description",
        message: "How would you describe this project?",
      },
    ]);
  }
  if (title === "Installation") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Installation",
        message: "How would you install this project?",
      },
    ]);
  }
  if (title === "Instructions") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Instructions",
        message: "How can you use this project?",
      },
    ]);
  }
  if (title === "Credits") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Credits",
        message: "Who was a part of the creation of this project?",
      },
    ]);
  }
  if (title === "License") {
    return inquirer.prompt([
      {
        type: "checkbox",
        name: "License",
        message: "Which licences do you want to include in this project?",
        choices: ["Licence1", "Licence2", "Etc."],
      },
    ]);
  }
  if (title === "Badges") {
    return inquirer.prompt([
      {
        type: "checkbox",
        name: "Badges",
        message: "Which badges do you want to include in this project?",
        choices: ["Choice1", "Choice2", "Etc."],
      },
    ]);
  }
  if (title === "Features") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Features",
        message: "What are a few features in this project?",
      },
    ]);
  }
  if (title === "Contributers") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Contributers",
        message: "Who are some contributers in this project?",
      },
    ]);
  }
  if (title === "Tests") {
    return inquirer.prompt([
      {
        type: "input",
        name: "Tests",
        message: "What kind of tests are recomended for this project?",
      },
    ]);
  }
  if (title === "Questions") {
    return inquirer.prompt([
      {
        type: "confirm",
        name: "Questions",
        message:
          "Do you want to include a contact the developer section for this project?",
        default: false,
      },
    ]);
  }
}

main().then((answer) => console.log(answer));
