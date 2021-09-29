const inquirer = require('inquirer');
const fs = require('fs');

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
            type: 'editor',
            message: "Enter your license here",
            name: 'License',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
        },
        {
            type: 'editor',
            message: "Do you want to input any badges?",
            name: 'Badges',
            validate: (value) =>{ if(value){return true} else {return 'I need you to enter something in this field'}}           
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
    Badges
}) =>{
    const template = `
    #Title:
     ${title}
    ##Description:
    ${Description}
    ${Description1}
    ${Description2}
    ${Description3}
    ##Installation:
    ${Installation}
    ##Usage:
    ${Usage}
    ##Credits:
    ${Credits}
    ##License:
    ${License}
    ##Badges:
    ${Badges}`;

    fs.writeFile('readme.md', template, function(err){
        if(err) throw err;
    });
    
})