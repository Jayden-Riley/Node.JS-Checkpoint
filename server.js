// Import the built-in 'http' module to create a server
let http = require("http");

// Create an HTTP server
let server = http.createServer((req, res) => {
  // This callback function runs whenever someone makes a request to your server

  // Set the response HTTP status to 200 (OK) and specify that the content type is HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send the HTML response to the browser
  res.end("<h1>Hello Node YOU NEVER WALK ALONE ;)!!!!</h1>\n");
});

// Start the server on port 3000
server.listen(3000, () => {
  // This function runs once the server is successfully listening
  console.log("Server is running on http://localhost:3000");
});
