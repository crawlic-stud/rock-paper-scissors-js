const crypto = require('crypto')


class HMACgenerator 
{
    constructor(hash_func='sha1') {
        this.hash_func = hash_func;
    }

    createHMAC(text, key) {
        let hmac = crypto.createHmac(this.hash_func, key);
        hmac.update(text);
        return hmac.digest('hex');
    }
}

module.exports = HMACgenerator;