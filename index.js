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
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    Boost:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    BSD:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    Eclipse:
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  },
  {
    GNU:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    IBM:
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  },
  {
    ISC:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
  {
    MIT:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    Mozilla:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    Perl:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  },
  {
    SIL:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  },
  {
    Unlicense:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
  {
    WTFPL:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  },
  {
    Zlib:
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  },
];

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
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
    message: "What is the Title for your project?",
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
    message: "How would you describe this project?",
    default: "",
  },
  {
    type: "input",
    name: "installation",
    message: "How would you install this project?",
    default: "",
  },
  {
    type: "input",
    name: "instructions",
    message: "How can you use this project?",
    default: "",
  },

  {
    type: "input",
    name: "credits",
    message: "Who was a part of the creation of this project?",
    default: "",
  },

  {
    type: "checkbox",
    name: "license",
    message: "Which licences do you want to include in this project?",
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
    type: "checkbox",
    name: "badges",
    message: "Which badges do you want to include in this project?",
    choices: ["Choice1", "Choice2", "Etc."],
    default: "",
  },

  {
    type: "input",
    name: "features",
    message: "What are a few features in this project?",
    default: "",
  },

  {
    type: "input",
    name: "contributers",
    message: "Who are some contributers in this project?",
    default: "",
  },
  {
    type: "input",
    name: "tests",
    message: "What kind of tests are recomended for this project?",
    default: "",
  },

  {
    type: "confirm",
    name: "questions",
    message:
      "Do you want to include a contact the developer section for this project?",
    default: false,
  },
];

function generateReadme(response, user) {
  let tableOfContents = "\n## Table of Contents\n";
  let fileName = "README.md";
  let draft = "";

  if (response.installation !== "") {
    tableOfContents += "\n[Installation](#installation)\n";
  }
  if (response.instructions !== "") {
    tableOfContents += "\n[Instructions](#instructions)\n";
  }
  if (response.credits !== "") {
    tableOfContents += "\n[Credits](#credits)\n";
  }
  if (response.license !== "") {
    tableOfContents += "\n[License](#license)\n";
  }
  if (response.badges !== "") {
    tableOfContents += "\n[Badges](#badges)\n";
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
  if (response.questions !== "") {
    tableOfContents += "\n[Questions](#questions)\n";
  }
  if (response.title !== "") {
    let title = "\n# " + response.title;
    draft += title;
  }
  if (response.description !== "") {
    let description = "\n## Description\n" + response.description;
    draft += description;
  }

  draft += tableOfContents;

  if (response.installation !== "") {
    let installation = "\n## Installation\n" + response.installation;
    draft += installation;
  }
  if (response.instructions !== "") {
    let instructions = "\n## Instructions\n" + response.instructions;
    draft += instructions;
  }
  if (response.credits !== "") {
    let credits = "\n## credits\n" + response.credits;
    draft += credits;
  }
  if (response.license !== "") {
    let license = "\n## License\n";
    console.log("Length: " + response.license.length);
    console.log("TRUE OR NOT: " + licenseNames.includes(response.license[0]));
    console.log("before");
    console.log("LICENSE RESPONSE: " + licenses[response.license][0]);
    console.log("after");
    for (let i = 0; i < response.license.length; ++i) {
      if (licenseNames.includes(response.license[i])) {
        license += licenses.response.license[i];
      }
    }
    console.log("DONE");
    draft += license;
  }
  if (response.badges !== "") {
    let badges = "\n## Badges\n" + response.badges;
    draft += badges;
  }
  if (response.features !== "") {
    let features = "\n## Features\n" + response.features;
    draft += features;
  }
  if (response.contributers !== "") {
    let contributers = "\n## Contributers\n" + response.contributers;
    draft += contributers;
  }
  if (response.tests !== "") {
    let tests = "\n## Tests\n" + response.tests;
    draft += tests;
  }
  if (response.questions !== "") {
    let questions = "\n## Questions\n" + response.questions;
    draft += questions;
  }

  createFile(fileName, draft);
}

function createFile(fileName, name) {
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
