console.log("hello");
let myArray = [];

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the Title for your project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe this project?",
  },

  {
    type: "confirm",
    name: "table of contents",
    message: "Add table of contents?",
    default: false,
  },

  {
    type: "input",
    name: "installation",
    message: "How would you install this project?",
  },

  {
    type: "input",
    name: "instructions",
    message: "How can you use this project?",
  },

  {
    type: "input",
    name: "credits",
    message: "Who was a part of the creation of this project?",
  },

  {
    type: "checkbox",
    name: "license",
    message: "Which licences do you want to include in this project?",
    choices: ["Licence1", "Licence2", "Etc."],
  },
  {
    type: "checkbox",
    name: "badges",
    message: "Which badges do you want to include in this project?",
    choices: ["Choice1", "Choice2", "Etc."],
  },

  {
    type: "input",
    name: "features",
    message: "What are a few features in this project?",
  },

  {
    type: "input",
    name: "contributers",
    message: "Who are some contributers in this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What kind of tests are recomended for this project?",
  },

  {
    type: "confirm",
    name: "questions",
    message:
      "Do you want to include a contact the developer section for this project?",
    default: false,
  },
];
//

//

function generateReadme(response, user) {
  let tableOfContents = "## Table of Contents";

  if (response.installation !== "") {
    tableOfContents += "* [Installation](#installation)";
  }
  if (response.instructions !== "") {
    tableOfContents += "* [Instructions](#instructions)";
  }
  if (response.credits !== "") {
    tableOfContents += "* [Credits](#credits)";
  }
  if (response.license !== "") {
    tableOfContents += "* [License](#license)";
  }
  if (response.badges !== "") {
    tableOfContents += "* [Badges](#badges)";
  }
  if (response.features !== "") {
    tableOfContents += "* [Features](#features)";
  }
  if (response.contributers !== "") {
    tableOfContents += "* [Contributers](#contributers)";
  }
  if (response.tests !== "") {
    tableOfContents += "* [Tests](#tests)";
  }
  if (response.questions !== "") {
    tableOfContents += "* [Questions](#questions)";
  }

  //

  //
}

//

//

const ghub = {
  async getUserInfo(response) {
    try {
      let myResponse = await axios.get(
        "https://api.github.com/users/" + response.github
      );
      console.log(response.github);
      return myResponse.data;
    } catch (err) {
      console.log("ERROR");
    }
  },
};

//

//

function createReadme(filename, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md file has been created!");
  });
}

//

//
async function main() {
  try {
    const response = await inquirer.prompt(questions);
    console.log("Your README responses: ", response);

    const user = await ghub.getUserInfo(response);
    console.log("Your Github username: ", user);

    const readme = generateReadme(response, user);
    console.log(readme);

    createReadme("README.md", readme);
  } catch (err) {
    console.log("ERROR");
  }
}

main();
