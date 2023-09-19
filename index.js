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
        message: 'Please enter the text color you would like, either by color keyword or hexadecimal color code. If using a hexadecimal color code, you must include the #.',
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
        message: 'Please enter the shape color you would like, either by color keyword or hexadecimal color code. If using a hexadecimal color code, you must include the #.',
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
    const ValidColorKeywords = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet',
        'brown', 'burlywood',
        'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue',
        'cornsilk', 'crimson', 'cyan',
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
        'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
        'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow',
        'honeydew', 'hotpink',
        'indianred', 'indigo', 'ivory',
        'khaki',
        'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen',
        'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
        'navajowhite', 'navy',
        'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
        'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple',
        'rebeccapurple', 'red', 'rosybrown', 'royalblue',
        'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
        'tan', 'teal', 'thistle', 'tomato', 'turquoise',
        'violet',
        'wheat', 'white', 'whitesmoke',
        'yellow', 'yellowgreen'
    ];

    return ValidColorKeywords.includes(color.toLowerCase());
};

// Function to validate hexadecimal color codes:
const isValidHexCode = (color) => {
// regular expression to validate a 3-digit or 6-digit hexadecimal color code with an optional # at the beginning
    const hexCodeRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}$/;

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
        } else if (!isValidColorKeyword(userInput.textColor) && !isValidHexCode(userInput.shapeColor)) {
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