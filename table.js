require('colors');
var Table = require('cli-table');


class RulesTable extends Table 
{
    constructor(rules) {
        super();
        this.table = new Table({head: [" ", ...rules.args], colWidth: 20});
        this.createTable(rules);
    }

    createTable(rules) {
        for (let i = 0; i < rules.args.length; i++) {
            let winners = [];
            for (let j = 0; j < rules.args.length; j++) {
                
                winners.push(rules.who_won(rules.args[i], rules.args[j]));
            }
            let row = [rules.args[i], ...winners];
            this.table.push(row);
        }
    }

    print() {
        console.log("RED - is computer's move.".red)
        console.log("WHITE", "- is player's move.")
        console.log(this.table.toString())
    }
}

module.exports = RulesTable;
