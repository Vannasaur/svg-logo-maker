# SVG Logo Maker
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
## Description

This is a Node.js command-line application that takes in user input to generate a logo and saves it as an SVG file. This allows the user to easily make a simple logo by answering 4 questions in their terminal or Git Bash. Please see User Story and Acceptance Criteria below:

User Story: 

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

Acceptance Criteria:

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named "logo.svg"
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the "logo.svg" file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


## Installation

Please download Git BASH at https://gitforwindows.org/ if you are a Windows user. If you are a Mac user, please pull up the terminal on your Mac by pressing Command Spacebar and searching for terminal. 

Please also install the following programs: 

     - Node.js at https://nodejs.dev/en/download/
     - Inquirer.js Version 8.2.4 at https://www.npmjs.com/package/inquirer
     - VScode at https://code.visualstudio.com/download
     - Jest Version 29.7.0 at https://jestjs.io/


## Usage

In order to use this application, open up your terminal (on Mac) or Git Bash (on Windows). CD into the folder that contains the SVG Logo Maker code and type ‘node index.js’ into your terminal (without the single quotations). You will be prompted with questions regarding the logo you would like to create. Once you answer each question, a logo.svg file will be created and added to the folder that contains the SVG Logo Maker code. If you already have a logo.svg file, it will be overwritten with the new logo. 

## Demo

Please see a demo of my application [here](https://drive.google.com/file/d/1jpLqCreCzfTKux7VB6ohjFCcrYvUZHDz/view?usp=sharing).

Please see a demo of running the unit tests [here](https://drive.google.com/file/d/1i14kvGCTNl4D7VvQDHPBTHbkbfbwN0VS/view?usp=sharing).

## Credits

SVG has been developed by the World Wide Web Consortium (W3C) since 1999. See below for link to the W3C website: https://www.w3.org/TR/SVG2/

Badge for MIT License was made with [Shields.io](http://shields.io/) and taken from GitHub user: lukas-h. See below for the link to the license badge collection: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


## License

MIT License, please refer to the LICENSE in the repo.

## Contributing

N/A

## Tests

This application uses Jest to run unit tests. If you would like to run the unit tests found in shapes.test.js, type in 'npm run test' in your terminal (without the single quotations).

## Questions

Please refer to my profile for additional projects: https://github.com/Vannasaur

If you have any questions please email me at: vannaluciano@gmail.com