console.log("hello");

/* THIS IS THE IMPORTANT PART */
var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// MAIN FUNCTION
// ASKS THE QUESTIONS AT THE BEGINNING
function main() {}

// ASKS FOR A TITLE
function title() {}

// ASKS FOR A DESCRIPTION
function description() {
  let title = "Description";
  information(title);
}

// CREATES TABLE OF CONTENTS
function tableOfContents() {}

// ASKS FOR INSTALLATION STEPS
function installation() {
  let title = "Installation";
  information(title);
}

// ASKS FOR THE USAGE AND INSTRUCTIONS
function instructions() {
  let title = "Instructions";
  information(title);
}

// ASKS FOR CREDITS AND ANY COLLABORATORS
function credits() {
  let title = "Credits";
  information(title);
}

// ASKS FOR LICENSE
function license() {
  let title = "License";
  information(title);
}

// ASKS FOR BADGES
function badges() {
  let title = "Badges";
  information(title);
}

// ASKS FOR THE FEATURES OF THE APP
function features() {
  let title = "Features";
  information(title);
}

// ASKS IF YOU WOULD LIKE OTHERS TO CONTRIBUTE TO THE APP
function contributers() {
  let title = "Contributers";
  information(title);
}

// MAYBE ASK FOR TESTS
function tests() {
  let title = "Tests";
  information(title);
}

// ASKS FOR QUESTIONS -- KINDA LIKE A CONTACT ME SECTION
function questions() {
  let title = "Questions";
  information(title);
  // ASKS FOR GITHUB USERNAME

  // ASKS FOR EMAIL
}

// ASKS FOR THE INFORMATION UNDERNEATH THE SUB TITLE
function information(title) {
  let question1 = prompt("Is this title: (" + title + ") correct?");

  if (title === "Description") {
  } else if (title === "Installation") {
  } else if (title === "Instructions") {
  } else if (title === "Credits") {
  } else if (title === "License") {
  } else if (title === "Badges") {
  } else if (title === "Features") {
  } else if (title === "Contributers") {
  } else if (title === "Tests") {
  } else if (title === "Questions") {
  } else {
    return 0;
  }
}
