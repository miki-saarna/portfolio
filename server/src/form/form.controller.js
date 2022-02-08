const nodemailer = require("nodemailer");
require('dotenv').config();

// export default async function submit(req, res) {
async function submit(req, res) {
    const { data: {
        name,
        email,
        url,
        message
    } } = req.body;

    // this validation should be replaced with more detailed ones in the near future
    if (!name || !email || !message) {
      return res.status(400).json({ status: 400, response: `Message not sent` })
    }

    // this variable defines the `from` email address
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"MikiSaarna.com" <${process.env.EMAIL}>`,
      to: process.env.EMAIL, // can be a comma-separated list of receivers
      subject: "Inquiry from MikiSaarna.com",
      text: `Name: ${name}\nMessage: ${message}\nURL: ${url}\nEmail: ${email}`,
      // html:, // will likely replace the text value above
    }

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(`Email successfully sent!`);
        }
    })
    // unsure if status code 200 or 201
    res.status(201).json({ response: 'Email Sent!' })
}

module.exports = {
    submit
}
