const prompt = require('prompt-sync')();

const Rules = require('./rules.js');
const RulesTable = require('./table.js');
const RandomKey = require('./key.js')
const HMACgenerator = require('./hmac.js')


// setup
const rules = new Rules(process.argv.slice(2));
const table = new RulesTable(rules);
const key = new RandomKey(32);
const generator = new HMACgenerator();


let restart = "y";
let help = false;
// main loop
while (1)
{   
    if (restart != "y") {
        break;
    }
    help = false;

    console.log("----------------------------------------");

    let hmac_key = key.generate();
    let computer_move = rules.args[Math.floor(Math.random() * rules.args.length)];
    let hmac = generator.createHMAC(computer_move, hmac_key);

    console.log("HMAC:\n" + hmac);

    console.log("Available moves:");
    for (let i = 0; i < rules.args.length; i++) {
        console.log((i + 1).toString(), "-", rules.args[i])
    }
    console.log("0 - exit")
    console.log("? - help")

    let command = prompt("Enter your move: ");

    if (command == "0") {
        break;
    }
    if (command == "?") {
        help = true;
        table.print();
    }

    let your_move = rules.args[parseInt(command - 1)];
    
    if (help) { continue; }

    console.log("Player's move:", your_move);
    console.log(("Computer's move: " + computer_move).red);

    if (parseInt(command)) { 
        console.log(rules.who_won(your_move, computer_move)); 
    }
    console.log("HMAC key:\n" + hmac_key)

    restart = prompt("Want to replay? [y/n]: ".green);
}
