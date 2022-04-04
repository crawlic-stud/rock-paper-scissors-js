const prompt = require('prompt-sync')();

const Rules = require('./rules.js');
const RulesTable = require('./table.js');


// setup
const rules = new Rules(process.argv.slice(2));
const table = new RulesTable(rules);

// main loop
while (1)
{
    console.log("Available moves:");
    for (let i = 0; i < rules.args.length; i++) {
        console.log(i + 1, "-", rules.args[i])
    }
    console.log("0 - exit")
    console.log("? - help")

    let command = prompt("Enter your move: ");

    if (command == "0") {
        break;
    }
    if (command == "?") {
        table.print();
    }

    let computer_move = 4;
    if (parseInt(command)) { 
        console.log(rules.who_won(rules.args[parseInt(command - 1)], rules.args[computer_move])); 
    }
}
