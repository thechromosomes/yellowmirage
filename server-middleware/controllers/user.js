//moduler
var mysql = require("mysql");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const moment = require("moment");

// //authentication check
// exports.authentication = (req, res, next) => {
//   if (req.session.mail != undefined) {
//     next();
//   } else {
//     res.render("user/home", { user: "" });
//   }
// };

//show the login page
exports.getLogin = (req, res, next) => {
  res.render("user/loginAccount", { user: "", msg: [], err: [] });
};

// fetch user data

exports.getUserData = async (req, res) => {
  try {
    data =
      "SELECT name, email,  phone " +
      "FROM  user " +
      "WHERE email = " +
      mysql.escape(req.body.email);

    db.query(data, (err, result) => {
      if (err) throw err;
      res.status(200).json({
        message: `user data fetched successfully`,
        data: result,
        status: true,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `error occurred`,
      data: null,
      status: false,
    });
  }
};

//post page of login
exports.postLogin = (req, res, next) => {
  data =
    "SELECT * " +
    "FROM  user " +
    "WHERE email = " +
    mysql.escape(req.body.mail);

  db.query(data, (err, result) => {
    if (err) throw err;
    // show if any error have
    else {
      if (result.length) {
        //check password
        bcrypt.compare(req.body.pass, result[0].password).then((isMatch) => {
          if (isMatch) {
            const token = jwt.sign({ email: result[0].email }, "nature_roar", {
              expiresIn: "60d",
            });
            let userName = result[0].email;

            req.session.mail = userName;
            res.cookie("nature_roar_user", userName);
            res.cookie("nature_roar_user_token", token);
            req.headers.authorization = `bearer ${token}`;
            res.redirect("/");
          } else {
            res.render("user/loginAccount", {
              user: "",
              msg: [],
              err: ["Password does not match"],
            });
          }
        });
      } else {
        res.render("user/loginAccount", {
          user: "",
          msg: [],
          err: ["Please Check Your information again"],
        });
      }
    }
  });
};

// show create account page
exports.getCreateAccount = (req, res, next) => {
  res.render("user/createAccount", { user: "", msg: [], err: [] });
};

//get data from user for create account
exports.postCreateAccount = (req, res, next) => {
  console.log("body", req.body);
  var users = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.mobile,
  };
  var p1 = req.body.pass;
  var p2 = req.body.con_pass;

  if (p1 != p2) {
    // if password doesn't match
    return res.render("user/createAccount", {
      user: "",
      msg: [],
      err: ["Password Doesn't Match"],
    });
  }

  // check if mail exist and hash pass

  //check if email exists
  db.query(
    `SELECT * FROM user WHERE email = '${users.email}'`,
    (err, rows, fields) => {
      console.log(rows);
      if (rows.length > 0) {
        res.render("user/createAccount", {
          message: `email already exists`,
          status: 409,
          err: ["Email already exists"],
        });
      } else {
        //Joi authentication for registration
        const schema = Joi.object().keys({
          name: Joi.string().alphanum().min(3).max(25).required(),
          pass: Joi.string().required(),
          con_pass: Joi.string().valid(Joi.ref("pass")).required(),
          email: Joi.string().required(),
          mobile: Joi.number().required(),
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
          res.render("user/createAccount", {
            message: `there is some problem with credentials`,
            status: 400,
            err: [validation.error.details[0].message],
          });
          return;
        }
        if (err) {
          res.render("user/createAccount", {
            message: `There is some problem with credentials`,
            status: 400,
            err: ["There is some problem with credentials"],
          });
        } else {
          //generating encrypted password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(p1, salt, (err, hash) => {
              if (err) throw err;
              users.pass_key = hash;
              db.query(
                "INSERT INTO user " +
                  " VALUES ( '" +
                  users.name +
                  "' ,'" +
                  users.email +
                  "','" +
                  users.phone +
                  "','" +
                  users.pass_key +
                  "')",
                (err, rows, fields) => {
                  if (err) throw err;

                  const token = jwt.sign(
                    { email: users.email },
                    "nature_roar",
                    { expiresIn: "60d" }
                  );

                  res.cookie("nature_roar_user_token", token);
                  req.headers.authorization = `bearer ${token}`;
                  req.session.mail = users.email;
                  res.cookie("nature_roar_user", users.email);
                  res.redirect("/");
                }
              );
            });
          });
        }
      }
    }
  );
};

//get request for category
exports.getCategory = (req, res, next) => {
  res.render("user/category", { user: req.session.mail });
};

//post request of category
exports.postCategory = (req, res, next) => {
  data =
    "SELECT * " +
    " FROM  category " +
    " WHERE name = " +
    mysql.escape(req.body.cat) +
    " AND type = " +
    mysql.escape(req.body.type) +
    " AND available > 0";

  db.query(data, (err, result) => {
    if (err) throw err;
    //show if error found
    else {
      //console.log(result);
      return res.render("user/showCategory", {
        user: req.session.mail,
        rooms: result,
      });
    }
  });
};

// get booking data
exports.postBooking = (req, res, next) => {
  // console.log(req.body);

  res.render("user/bookingConfirm.ejs", {
    user: req.session.mail || req.cookies.nature_roar_user,
    name: req.body.name,
    type: req.body.type,
    cost: req.body.cost,
  });
};

//post status request

exports.postStatus = (req, res, next) => {
  var dateFrom = req.body.dateFrom;
  var dateTo = req.body.dateTo;
  var userEmail = req.cookies.nature_roar_user || req.session.mail;

  console.log(dateFrom, dateTo);

  data =
    "INSERT INTO bookingstatus" +
    " VALUES ('" +
    userEmail +
    "','" +
    req.body.category +
    "','" +
    req.body.paymentID +
    "','" +
    req.body.type +
    "','" +
    req.body.numberOfGuest * 1 +
    "','" +
    0 +
    "','" +
    dateFrom +
    "', '" +
    dateTo +
    "') ";
  data1 =
    "SELECT * " +
    " FROM  bookingstatus " +
    " WHERE email = " +
    mysql.escape(userEmail);

  db.query(data, (err, result) => {
    if (err) throw err;
    else {
      //   db.query(data1, (err1, result) => {
      //     for (i in result) {
      //       var a = result[i].dateTo + result[i].dateFrom;
      //       a = a.toString();
      //       result[i].date = a.slice(0, 15);
      //     }
      //     res.render("user/statusShow", {
      //       user: userEmail,
      //       msg: "Your booking is placed",
      //       err: "",
      //       data: result,
      //     });
      //   });
      res.json({
        user: userEmail,
        msg: "Your booking is placed",
        err: "",
        status: true,
      });
    }
  });
};

//get status
exports.getShowStatus = (req, res, next) => {
  let mail = req.cookies.nature_roar_user || req.session.mail;
  data =
    "SELECT * " +
    " FROM  bookingstatus " +
    " WHERE email = " +
    mysql.escape(mail);

  db.query(data, (err, result) => {
    if (err) throw err;
    else {
      for (i in result) {
        var dateTo = result[i].dateTo.toString();
        var dateFrom = result[i].dateFrom.toString();
        result[i].dateFrom = dateFrom.slice(0,15);
        result[i].dateTo = dateTo.slice(0,15);
      }
      if (result.length < 1) {
        res.render("user/statusShow", {
          user: mail,
          msg: "",
          err: "No booking yet, Head to our booking section.",
          data: result,
        });
      } else {
        res.render("user/statusShow", {
          user: mail,
          msg: "",
          err: "",
          data: result,
        });
      }
    }
  });
};

//delete booking request
exports.deleteBooking = (req, res, next) => {
  data =
    "DELETE FROM bookingstatus " +
    " WHERE email = " +
    mysql.escape(req.body.mail) +
    " AND type = " +
    mysql.escape(req.body.type) +
    " AND category = " +
    mysql.escape(req.body.cat) +
    " AND roomWant = " +
    mysql.escape(req.body.want);

  db.query(data, (err, result) => {
    if (err) throw err;
    else {
      next();
    }
  });
};

//show contact page
exports.getContact = (req, res, next) => {
  if (req.session.mail == undefined) {
    res.render("user/contact", { user: "" });
  } else {
    res.render("user/contact", { user: req.session.mail });
  }
};

//logout
exports.logout = (req, res, next) => {
  req.session.destroy();
  req.headers.authorization = "";
  res.cookie("nature_roar_user_token", "");
  res.redirect("/");
};

exports.test = (req, res, next) => {
  res.send("hello world from test");
};
