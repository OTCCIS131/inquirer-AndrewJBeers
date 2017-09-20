var inquirer = require('inquirer');
const chalk = require('chalk');
const log = console.log;
// const prompt = inquirer.prompt;

log("")
log("██████╗ ██╗███████╗███████╗ █████╗     ██████╗  ██████╗ ███╗   ██╗ █████╗ ███╗   ██╗███████╗ █████╗ ██╗██╗")
log("██╔══██╗██║╚══███╔╝╚══███╔╝██╔══██╗    ██╔══██╗██╔═══██╗████╗  ██║██╔══██╗████╗  ██║╚══███╔╝██╔══██╗██║██║")
log("██████╔╝██║  ███╔╝   ███╔╝ ███████║    ██████╔╝██║   ██║██╔██╗ ██║███████║██╔██╗ ██║  ███╔╝ ███████║██║██║")
log("██╔═══╝ ██║ ███╔╝   ███╔╝  ██╔══██║    ██╔══██╗██║   ██║██║╚██╗██║██╔══██║██║╚██╗██║ ███╔╝  ██╔══██║╚═╝╚═╝")
log("██║     ██║███████╗███████╗██║  ██║    ██████╔╝╚██████╔╝██║ ╚████║██║  ██║██║ ╚████║███████╗██║  ██║██╗██╗")
log("╚═╝     ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝")
log("")









let questions = [{
    type: 'list',
    message:"What size of pizza would you like?",
    name:"size",
    choices: ['Small', 'Medium', 'Large'],
    // filter: function (val){
    //     return val.toLowerCase();
    // }
},{
    type: 'checkbox',
    message:"What toppings would you like?",
    name: 'toppings',
    choices: ["Peperonni", "Sassage","Extra Cheese","Onions","Peppers"]
},{
    type: 'list',
    message: "How would you like your pizza cut?",
    name: "cut",
    choices: ['Triangle', 'Square']
},{
    type: 
    message:
    name:
    choices:
},{
    type: 
    message:
    name:
    choices:
},{
    type: 
    message:
    name:
    choices:
}]


    
    

    inquirer.prompt(questions).then(function(answers){

        console.log(answers)

    });
