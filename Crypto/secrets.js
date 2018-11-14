let text;
let passwort;

text="You will never guess this text!";

passwort="hallo123";

console.log("---Verschlüsselung---");

const encrypt = require ("./encrypt.js");

encrypted(text, passwort);

console.log("");

console.log("---Entschlüsselung---");

const decrypt = require("./decrypt.js");

decrypted(encryptedtext, passwort);
