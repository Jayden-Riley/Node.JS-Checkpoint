// Import the nodemailer module to send emails
let nodemailer = require("nodemailer");

// Create a transporter to send the email using Gmail (you can use other services like Yahoo, Outlook)
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jaydendejong83@gmail.com",
    pass: "your-app-specific-password",
  },
});

// Define the email details
let mailOptions = {
  from: "jaydendejong83@gmail.com", // Sender's email
  to: "sgtriley753@gmail.com", // Recipient's email (replace with the recipient's email)
  subject: "Test Email from Node.js", // Email subject
  text: "This is a test email sent from Node.js using Nodemailer.", // Email body content
};

// Send the email using the transporter and mail options
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Error occurred: ", err);
  } else {
    console.log("Email sent successfully: " + info.response);
  }
});
