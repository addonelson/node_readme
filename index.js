const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

inquirer
.prompt([
        {
            type: 'input',
            message: "Whats the title of the project?",
            name: 'title',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "What was your motivation? ",
            name: 'Description',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}         
        },
        {
            type: 'input',
            message: "Why did you build this project?",
            name: 'Description1',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "What problem does it solve?",
            name: 'Description2',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "What did you learn?",
            name: 'Description3',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "What are the steps required to install your project?",
            name: 'Installation',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "Provide instructions and examples for use.",
            name: 'Usage',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "List your collaborators",
            name: 'Credits',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "Did you use third party assets for this project?",
            name: 'Credits',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}},        
        },
        {
            type: 'checkbox',
            message: "Enter your license here",
            name: 'License',
            choices: ["![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)", "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"],
            default: ["![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"],
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'checkbox',
            message: "Do you want to input any badges?",
            name: 'Badges',
            choices: ["![alt text](https://img.shields.io/badge/Index-HTML-yellowgreen)", "![alt text](https://img.shields.io/badge/Style-CSS-blue)", "![alt text](https://img.shields.io/badge/Script-JS-brightgreen)", "![alt text](https://img.shields.io/badge/JQuery-JQuery-orange)"],
            default: ["![alt text](https://img.shields.io/badge/Script-JS-brightgreen)"],
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'Username',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}},        
        },
        {
            type: 'input',
            message: "Enter your email address",
            name: 'Email',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}},        
        },
        
    ]

)
.then(({
    title,
    Description,
    Description1,
    Description2,
    Description3,
    Installation,
    Usage,
    Credits,
    License,
    Badges,
    Username,
    Email
}) =>{
    const template = `
${License}

#Title:
${title}

##Description:
${Description}
${Description1}
${Description2}
${Description3}

##Table of Contents:
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

##Installation:
${Installation}

##Usage:
${Usage}

##Credits:
${Credits}

##License:
${License}

##Badges:
${Badges}

##Questions:
https://github.com/${Username}/node_readme
${Email}`;

    fs.writeFile('./generated readme/readme', template, function(err){
       err ? console.error(err) : console.log("Your File Has Been Created");
    });
    
})