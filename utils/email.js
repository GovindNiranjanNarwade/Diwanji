const nodemailer = require("nodemailer");
// const env = require("dotenv");
// env.config({
//   path: ".env",
// });
// console.log(process.env.EMAIL_ID);
exports.sendEmail = (
  to = req.body.HotelOwnerEmail,
  subject = "Reset Password",
  text = "Reset Password Using Follwing Link "
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"govindpurva3@gmail.com",
      pass:"GovindPurva@123",
    },
  });
  const option = {
    from:"govindpurva3@gmail.com" ,
    to,
    subject,
    text,
  };
  transporter.sendMail(option, error => {
    error
      ? console.log(`EMAIL NOT SEND ${error}`)
      : console.log("EMAIL SEND");
  });
};