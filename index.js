const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
let licenseNames = [
  "Apache",
  "Boost",
  "BSD",
  "Eclipse",
  "GNU",
  "IBM",
  "ISC",
  "MIT",
  "Mozilla",
  "Perl",
  "SIL",
  "Unlicense",
  "WTFPL",
  "Zlib",
];

let licenses = [
  {
    name: "Apache",
    link:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name: "Boost",
    link:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    name: "BSD",
    link:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    name: "Eclipse",
    link:
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  },
  {
    name: "GNU",
    link:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    name: "IBM",
    link:
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  },
  {
    name: "ISC",
    link:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
  {
    name: "MIT",
    link:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    name: "Mozilla",
    link:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    name: "Perl",
    link:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  },
  {
    name: "SIL",
    link:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  },
  {
    name: "Unlicense",
    link:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
  {
    name: "WTFPL",
    link:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  },
  {
    name: "Zlib",
    link:
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  },
];

const questions = [
  {
    type: "input",
    name: "github",
    message: "Github: 🧠\nWhat is your Github username?",
    default: "",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A github username is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "title",
    message: "Title: ⚙ \nWhat is the Title for your project?",
    default: "",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Description: 🧭 \nHow would you describe this project?",
    default: "",
  },
  {
    type: "input",
    name: "website",
    message: "Website: 🕸 \nWhat is the website address?",
    default: "",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Installation Instructions: ⤵ \nWhat installation instructions are there?",
    default: "",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage: 📄 \nHow can you use this project?",
    default: "",
  },

  {
    type: "input",
    name: "credits",
    message: "Credits: ⭐ \nWho was a part of the creation of this project?",
    default: "",
  },

  {
    type: "checkbox",
    name: "license",
    message:
      "Licenses: 📇 \nWhich licences do you want to include in this project?",
    choices: [
      "GNU",
      "BSD",
      "Eclipse",
      "IBM",
      "ISC",
      "Perl",
      "SIL",
      "WTFPL",
      "Zlib",
      "Mozilla",
      "Apache",
      "MIT",
      "Boost",
      "Unlicense",
    ],
    default: "",
  },
  {
    type: "input",
    name: "features",
    message: "Features: 💻 \nWhat are a few features in this project?",
    default: "",
  },

  {
    type: "input",
    name: "contributers",
    message: "Contributers: 👬 \nWho are some contributers in this project?",
    default: "",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests: 📝 \nWhat kind of tests are recomended for this project?",
    default: "",
  },
  {
    type: "input",
    name: "email",
    message: "Email: \nPlease enter your email?",
    default: "",
  },
];

function generateReadme(response, user) {
  let tableOfContents = "\n## Table of Contents\n";
  let fileName = "README.md";
  let myREADME = "";
  console.log(user);

  if (response.installation !== "") {
    tableOfContents += "\n[Installation](#installation)\n";
  }
  if (response.usage !== "") {
    tableOfContents += "\n[Usage](#usage)\n";
  }
  if (response.website !== "") {
    tableOfContents += "\n[Website](#website)\n";
  }
  if (response.credits !== "") {
    tableOfContents += "\n[Credits](#credits)\n";
  }
  if (response.features !== "") {
    tableOfContents += "\n[Features](#features)\n";
  }
  if (response.contributers !== "") {
    tableOfContents += "\n[Contributers](#contributers)\n";
  }
  if (response.tests !== "") {
    tableOfContents += "\n[Tests](#tests)\n";
  }
  if (response.license !== "") {
    tableOfContents += "\n[License](#license)\n";
  }

  tableOfContents += "\n[Questions](#questions)\n";

  // Adding to the readme file
  if (response.title !== "") {
    let title = "\n# " + response.title;
    myREADME += title;
  }

  if (response.license !== "") {
    let license = "";
    for (let i = 0; i < response.license.length; ++i) {
      if (licenseNames.includes(response.license[i])) {
        let indexOfLicense = licenseNames.indexOf(response.license[i]);
        license += "\n" + licenses[indexOfLicense].link;
      }
    }
    myREADME += license;
  }
  if (response.description !== "") {
    let description = "\n## Description\n> 🧭" + response.description;
    myREADME += description;
  }
  myREADME += tableOfContents;
  if (response.website !== "") {
    let website =
      "\n## Website  \n> 🕸 Visit the website live [here](" +
      response.website +
      ")";
    myREADME += website;
  }
  if (response.installation !== "") {
    let installation = "\n## Installation  \n> ⤵ " + response.installation;
    myREADME += installation;
  }
  if (response.instructions !== "") {
    let usage = "\n## Usage \n> 📄 " + response.usage;
    myREADME += usage;
  }
  if (response.credits !== "") {
    let credits = "\n## Credits \n> ⭐ " + response.credits;
    myREADME += credits;
  }
  if (response.features !== "") {
    let features = "\n## Features \n> 💻 " + response.features;
    myREADME += features;
  }
  if (response.contributers !== "") {
    let contributers =
      "\n## Contributers \n> 👬 " + "@" + response.contributers;
    myREADME += contributers;
  }
  if (response.tests !== "") {
    let tests = "\n## Tests \n> 📝 " + response.tests;
    myREADME += tests;
  }
  if (response.license !== "") {
    let licenseList =
      "\n## License \n" + "\n> 📇 These are the licences used in this project.";
    for (let k = 0; k < response.license.length; ++k) {
      if (licenseNames.includes(response.license[k])) {
        let indexOfLicense2 = licenseNames.indexOf(response.license[k]);
        licenseList += "\n> - " + licenses[indexOfLicense2].name;
      }
    }
    myREADME += licenseList;
  }
  if (response.github !== "") {
    let github =
      "\n## ⁉ Questions ⁉\n>" +
      "\n![Profile Picture](" +
      user.avatar_url +
      ")\n" +
      "\n>👦 Contact Me: " +
      "[" +
      response.github +
      "](" +
      user.html_url +
      ")" +
      "\n Email: " +
      response.email;
    myREADME += github;
  }

  createFile(fileName, myREADME);
}

function createFile(fileName, name) {
  console.log(name);
  fs.writeFile(fileName, name, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

const ghub = {
  async getUserInfo(response) {
    try {
      let myResponse = await axios.get(
        "https://api.github.com/users/" + response.github
      );
      console.log(response.github);
      return myResponse.data;
    } catch (err) {
      console.log("ERROR @ghub");
    }
  },
};

async function main() {
  try {
    const response = await inquirer.prompt(questions);
    console.log("Your README responses: ", response);

    const user = await ghub.getUserInfo(response);

    const readme = generateReadme(response, user);
    console.log(readme);
  } catch (err) {
    console.log("ERROR @main");
  }
}

main();
