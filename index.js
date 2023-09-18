// Packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the text for your logo. You may choose up to 3 characters.',
        name: 'text'
    }, {
        type: 'input',
        message: 'Please enter the text color you would like, either by color keyword or hexadecimal color code.',
        name: 'textColor'
    }, {
        type: 'list',
        message: 'Please choose a shape for your logo:',
        name: 'shape',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    }, {
        type: 'input',
        message: 'Please enter the shape color you would like, either by color keyword or hexadecimal color code.',
        name: 'shapeColor'
    }
];

// Function to make logo
const makeLogo = (userInput) => {
    if (userInput.shape === 'Triangle') {
        let userLogo = new Triangle (userInput.text, userInput.textColor, userInput.shapeColor)
        return userLogo.render()
    }
    if (userInput.shape === 'Circle') {
        let userLogo = new Circle (userInput.text, userInput.textColor, userInput.shapeColor)
        return userLogo.render()
    }
    if (userInput.shape === 'Square') {
        let userLogo = new Square (userInput.text, userInput.textColor, userInput.shapeColor)
        return userLogo.render()
    }
}

// Function to create SVG file
const writeToFile = (userInput) => {
    const Logo = makeLogo(userInput);
    fs.writeFile('logo.svg', Logo, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg')
    })
}

// Function to validate color keywords:
// Color list taken from W3Schools at: https://www.w3schools.com/colors/colors_names.asp
const isValidColorKeyword = (color) => {
    const ValidColorKeywords = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure',
    'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet',
    'Brown', 'BurlyWood',
    'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue',
    'Cornsilk', 'Crimson', 'Cyan',
    'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue',
    'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia',
    'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow',
    'HoneyDew', 'HotPink',
    'IndianRed', 'Indigo', 'Ivory',
    'Khaki',
    'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen',
    'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin',
    'NavajoWhite', 'Navy',
    'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid',
    'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple',
    'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue',
    'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue',
    'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise',
    'Violet',
    'Wheat', 'White', 'WhiteSmoke',
    'Yellow', 'YellowGreen'];

    return ValidColorKeywords.includes(color.toLowerCase());
};

// Function to validate hexadecimal color codes:
const isValidHexCode = (color) => {
// regular expression to validate a 3-digit or 6-digit hexadecimal color code with an optional # at the beginning
    const hexCodeRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

    return hexCodeRegex.test(color);
};

// Function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((userInput) => {
        const { text } = userInput;
        // validation check for text input length
        if (text.length > 3) {
            console.error('Text must be 3 characters or less. Please try again');
            init(); // prompt the user to enter input again
            return;
        // validation check for text color input
        } else if (!isValidColorKeyword(userInput.textColor) && !isValidHexCode(userInput.textColor)) {
            console.error('Invalid text color input. Please enter a valid color keyword or hexadecimal color code.');
            init(); // prompt the user to enter input again
            return;
        // validation check for shape color input
        } else if (!isValidColorKeyword(userInput.shapeColor) && !isValidHexCode(userInput.shapeColor)) {
            console.error('Invalid shape color input. Please enter a valid color keyword or hexadecimal color code.');
            init(); // prompt the user to enter input again
            return;
        } else {
            writeToFile(userInput);
        }
    });
};

// Function call to initialize app
init();