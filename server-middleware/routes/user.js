const express = require("express");

//load middleware function to auth user
const auth = require("../middleware/authUser");

const router = express.Router();

const userControler = require("../controllers/user");
const paymentController = require("../controllers/paymentController");

router.get("/test", auth, userControler.test); //logout

router.get("/getUserData", auth, userControler.getUserData); //home page

router
  .route("/login")
  .get(userControler.getLogin) // get request for login
  .post(userControler.postLogin); // post request for login

router
  .route("/createaccount")
  .get(userControler.getCreateAccount) //get request for create account
  .post(userControler.postCreateAccount); //post request for create account

// router
//   .route("/category")
//   .get(auth, userControler.getCategory) //get request for Category
//   .post(userControler.postCategory); //post request form the category
router.route("/boooking").post(auth, userControler.postBooking); //post booking data

// handle razorpay
router.route("/getrazorpayid").post(auth, paymentController.getRazorId); //post booking data
router.route("/authRazorpay").post(paymentController.authRazorPay); //post booking data


router.route("/status").post(auth, userControler.postStatus);

router.route("/showStatus").get(auth, userControler.getShowStatus); // get show status

router.post(
  "/deletereq",
  userControler.deleteBooking,
  userControler.getShowStatus
);

// router.get('/contact',userControler.getContact);

router.get("/logout", userControler.logout); //logout

module.exports = router;
