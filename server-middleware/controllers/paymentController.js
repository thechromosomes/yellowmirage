const shortid = require("shortid");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { response } = require("express");
const secret = "natureRoarSecretKey";

exports.getRazorId = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: "rzp_test_vfDjnIFxp14DhZ",
    key_secret: "o63wGye0iSt6jc1IFOuFjfuv",
  });

  let { name, email, contact } = req.body;

  // do a validation

  const payment_capture = 1;
  const amount = 100;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    let razor_id = response.id;

    const data = {
      razor_id,
      status: 0,
      name,
      contact,
      email,
    };

    db.query("INSERT INTO razorPayment SET ? ;", data, (err, result) => {
      if (err) throw err;
      else {
        res.json({
          id: razor_id,
          currency: response.currency,
          amount: response.amount,
          error: false,
        });
      }
    });
  } catch (error) {
    res.json({
      id: null,
      currency: null,
      amount: null,
      error: true,
    });
    console.log(error);
  }
};
exports.authRazorPay = async (req, res) => {
  // do a validation
  try {
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === req.headers["x-razorpay-signature"]) {
      let payment_detail = req.body.payload.payment.entity;
      let razorId = JSON.stringify(payment_detail.order_id);

      let queryData =
        "UPDATE razorPayment SET payment_detail = " +
        "'" +
        JSON.stringify(req.body.payload) +
        "'" +
        ", status = 1 " +
        "WHERE razor_id = " +
        razorId;

      db.query(queryData, (err, result) => {
        if (err) throw err;
        else {
          // create PDF to send over email

          res.json({
            status: "ok",
            message: "payment successful",
          });
        }
      });
    } else {
      res.json({
        status: false,
        message: `Payment failed with unauthorized header`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: `Payment failed with unauthorized header`,
    });
  }
};
