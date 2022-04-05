const crypto = require('crypto')
 

class RandomKey 
{
    constructor(size) {
        this.size = size;
    }

    generate() {
        return crypto.randomBytes(this.size).toString('hex');
    }
}

module.exports = RandomKey;
