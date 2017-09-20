var inquirer = require('inquirer');
const chalk = require('chalk');
const log = console.log;

log("")
log("██████╗ ██╗███████╗███████╗ █████╗     ██████╗  ██████╗ ███╗   ██╗ █████╗ ███╗   ██╗███████╗ █████╗ ██╗██╗")
log("██╔══██╗██║╚══███╔╝╚══███╔╝██╔══██╗    ██╔══██╗██╔═══██╗████╗  ██║██╔══██╗████╗  ██║╚══███╔╝██╔══██╗██║██║")
log("██████╔╝██║  ███╔╝   ███╔╝ ███████║    ██████╔╝██║   ██║██╔██╗ ██║███████║██╔██╗ ██║  ███╔╝ ███████║██║██║")
log("██╔═══╝ ██║ ███╔╝   ███╔╝  ██╔══██║    ██╔══██╗██║   ██║██║╚██╗██║██╔══██║██║╚██╗██║ ███╔╝  ██╔══██║╚═╝╚═╝")
log("██║     ██║███████╗███████╗██║  ██║    ██████╔╝╚██████╔╝██║ ╚████║██║  ██║██║ ╚████║███████╗██║  ██║██╗██╗")
log("╚═╝     ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝")
log("")
log("555-555-5555!!! Call NOW!!")
log("")


let questions = [{
    type: 'list',
    message:"What size of pizza would you like?",
    name:"size",
    choices: ['Small', 'Medium', 'Large'],
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
}]
    inquirer.prompt(questions).then(function(answers){
         console.log()
         console.log("You Ordered a " + chalk.blue(answers.size) + " Pizza")
         console.log("With the Toppings: " + chalk.red(answers.toppings))
         console.log("And would like your pizza with a " + chalk.yellow(answers.cut) + " cut")
    });
