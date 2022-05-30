const shortid = require("shortid");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const secret = "natureRoarSecretKey";

exports.getRazorId = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: "rzp_test_vfDjnIFxp14DhZ",
    key_secret: "o63wGye0iSt6jc1IFOuFjfuv",
  });

  // do a validation

  console.log(req.body);

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
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.authRazorPay = (req, res) => {
  // do a validation

  console.log(req.body);

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
  } else {
    // pass it
  }
  res.json({ status: "ok" });
};
