const crypto = require('crypto');

decrypted = function (encryptedtext, passwort) {
    const decipher = crypto.createDecipher('aes192', passwort);

    try {

        let decrypted = decipher.update(encryptedtext, 'hex', 'utf8');
        try {
            decrypted += decipher.final('utf8');
            console.log(decrypted);
        } catch (err){
            console.log("Falsches Passwort")
        };
    } catch (err){
        console.log("Falscher Hash-Code!")
    }
};

module.exports = decrypted;