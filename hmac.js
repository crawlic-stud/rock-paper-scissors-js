const SHA3_HMAC = require('crypto-js/hmac-sha3');


class HMACgenerator 
{
    createHMAC(text, key) {
        let hmac = SHA3_HMAC(text, key);
        return hmac;
    }
}

module.exports = HMACgenerator;