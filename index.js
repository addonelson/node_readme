const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
        {
            type: 'input',
            message: "Whats the title of the project?",
            name: 'title'           
        },
        {
            type: 'input',
            message: "What was your motivation?",
            name: 'Description'          
        },
        {
            type: 'input',
            message: "Why did you build this project?",
            name: 'Description'           
        },
        {
            type: 'input',
            message: "What problem does it solve?",
            name: 'Description'           
        },
        {
            type: 'input',
            message: "What did you learn?",
            name: 'Description'           
        },
        {
            type: 'input',
            message: "Whats the title of the project",
            name: 'title'           
        },
    ]
)