const bodyParser = require("body-parser");
const app = require("express")();
const axios = require("axios");

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

    let dummy = Math.floor(Math.random() * (1000 - 100) + 100) / 100;

    let personalization = {
      personalizations: [
        {
          to: [
            {
              email: "thenatureroar@gmail.com",
            },
          ],
          subject: `Nature roar ${req.body.emailType}`,
        },
      ],
      from: {
        email: `natureRoar${dummy}@natureroar.com`,
      },
      content: [
        {
          type: "text/html",
          value: output,
        },
      ],
    };

    const options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "8953346137msh5153af51b2a639ep12086bjsn45635ad766a8",
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      data: personalization,
    };

    axios
      .request(options)
      .then(function (response) {
        res.send({
          status: true,
          message: "Email has been sent",
        });
      })
      .catch(function (error) {
        res.send({
          status: false,
          message: "Error occurred while sending email",
        });
      });
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "Error occurred while sending email",
    });
  }
});
module.exports = app;
