class Rules 
{
    constructor(args) {
        args = [...new Set(args)];
        if (args.length < 2) throw "Can not be less than 2 arguments.".red;
        if (args.length % 2 == 0) throw "Argument's length can not be an even number.".red;
        this.args = args;
        this.rules = {};
        this.create();
    }

    create() {
        let args = this.args.concat(this.args);
        let length = this.args.length;
        for (let i = 0; i < length; i++) {
            this.rules[this.args[i]] = args.slice(i + 1, i + (length-1)/2 + 1);
        } 
    }

    print() {
        console.log(this.rules);
    }

    who_won(your_move, other_move) {
        if (this.rules[other_move].includes(your_move)) {
            return "Player lost."
        }
        else if (this.rules[your_move].includes(other_move)) {
            return "Player won."
        }
        else {
            return "Draw."
        }
    }
}

module.exports = Rules;
