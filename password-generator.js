// password-generator.js
let generatePassword = require("generate-password");

let password = generatePassword.generate({
  length: 10, // Length of the password
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});

console.log("Generated Password:", password);
