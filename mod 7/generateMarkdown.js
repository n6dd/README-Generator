// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `https://img.shields.io/badge/license-MIT-blue`
  } else if (license === 'Apache') {
    return `https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square`
  } else if (license === 'GNU') {
    return `https://img.shields.io/badge/License-GNU%20GPL-blue`
  } else if (license === 'MPL') {
    return `https://img.shields.io/badge/license-MPL%202.0-black`
  } else if (license === 'AGPL') {
    return `https://img.shields.io/badge/license-AGPL--v3-blue`
  } else if (license === 'none') {
    return ('')
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://mit-license.org/`
  } else if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === 'GNU') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else if (license === 'MPL') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
  } else if (license === 'AGPL') {
    return `https://opensource.org/license/agpl-v3`
  } else {
    return ('')
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under MIT.`
  } else if (license === 'Apache') {
    return `This project is licensed under Apache.`
  } else if (license === 'GNU') {
    return `This project is licensed under GNU.`
  } else if (license === 'MPL') {
    return `This project is licensed under MPL.`
  } else if (license === 'AGPL') {
    return `This project is licensed under AGPL.`
  } else {
    return ('')
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge{data.license}}

 ## Description
 ${data.description}

 ## Table of Contents
 - [Installation]($installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Question]($questions)

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## License
 ${renderLicenseSection{data.license}}
 ${renderLicenseLink{data.license}}
 `;
}

export default generateMarkdown;
