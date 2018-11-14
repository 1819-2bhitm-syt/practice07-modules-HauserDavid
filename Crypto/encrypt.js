const crypto = require('crypto');

encrypted = function(text, passwort) {

    const cipher = crypto.createCipher('aes192' , passwort);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
    encryptedtext = encrypted.toString();

};

module.exports = encrypted;