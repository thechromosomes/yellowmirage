const bodyParser = require("body-parser");
const app = require("express")();
const nodemailer = require("nodemailer");

app.use(bodyParser.json());

app.post("/sendmail", async (req, res) => {
  var output;
  try {
    if (req.body.emailType === "contact") {
      output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
     
     <li>Name: ${req.body.name}</li>
      <li>location: ${req.body.location || null}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
    }

    if (req.body.emailType === "enquiry") {
      output = `
    <p>You have a new contact request (enquiry)</p>
    <h3>Contact Details</h3>
    <ul>  
     
     <li>Name: ${req.body.name}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
      <p>I want to book hotel from ${req.body.startDate} to ${req.body.endDate} for ${req.body.person}</p>
    `;
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      // secure: false, // true for 465, false for other ports
      secureConnection: true,
      auth: {
        user: "support@natureroar.com", // generated ethereal user
        pass: "@26stringsand9nums", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // setup email data with unicode symbols
    let dummy = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    let mailOptions = {
      from: `natureRoar${dummy}@natureroar.com`, // sender address
      to: "support@natureroar.com", // list of receivers
      subject: `nature roar ${req.body.emailType}`, // Subject line
      text: `From ${req.body.name} `, // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({
          status: false,
          message: "Error occurred while sending email",
        });
        return false
      }

      res.send({
        status: true,
        message: "Email has been sent",
      });
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error occurred while sending email",
    });
  }
});
module.exports = app;
