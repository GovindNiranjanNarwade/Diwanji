const nodemailer = require("nodemailer");

const sendEmail = async (HotelOwnerEmail, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
              user:'govindpurva3@gmail.com',
                pass: "Purva@123",
            },
        });

        await transporter.sendMail({
            from:'govindpurva3@gmail.com' ,
            to: HotelOwnerEmail,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;
