function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License v3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "None":
      return ``;
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[Apache Docs](http://www.apache.org/licenses/)`;
    case "GNU General Public License v3.0":
      return `[GNU Docs](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `[MIT Docs](https://opensource.org/licenses/MIT)`;
    case "None":
      return ``;
  }
}


function renderLicenseSection(license) {
  switch (license) {
    case "Apache License 2.0":
      return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
    case "GNU General Public License v3.0":
      return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
    case "MIT License":
      return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
    case "None":
      return `This reposity is unlicensed.`;
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

## Installation

${data.installation}

## Usage
${data.usage}

## License
${data.license}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: ${data.GitHub}

email: ${data.email}


`;
}

module.exports = generateMarkdown;