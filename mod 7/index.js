// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import Choices from 'inquirer/lib/objects/choices';

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install you project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project? Provide instructions and examples for use.',
  },
  {
    type: 'list',
    message: 'What license did you use if any?',
    name: 'license',
    choices: ['MIT', 'Apache', 'GNU', 'MPL', 'AGPL', 'none'],
  },
]

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile('README.md', )
}

// TODO: Create a function to initialize app

function init() {
  
}

// Function call to initialize app

init();
