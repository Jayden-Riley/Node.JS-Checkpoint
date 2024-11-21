// create-file.js
let fs = require("fs");

// Create 'welcome.txt' with "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File has been saved!");
});

// Read the content of 'hello.txt' (assuming the file exists)
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // Log the content of hello.txt
});
