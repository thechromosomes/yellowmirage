const jwt = require("jsonwebtoken");

//loading env var
const pass = "nature_roar";

//to authorize the user
module.exports = (req, res, next) => {
  try {
    const token =
      req.cookies.nature_roar_user_token ||
      req.session.mail ||
      req.headers["authorization"].split(" ")[1];

    const email =
      req.body.email || req.body.mail || req.cookies.nature_roar_user;
    const decode = jwt.verify(token, pass);

    if (decode.email != email) {
      res.json({
        status: 401,
        message: "unauthorized activity",
      });
    } else {
      req.body.email = decode.email;
      req.body.mail = decode.email;
      next();
    }
  } catch (err) {
    console.log(err);

    return res.json({
      status: 401,
      message: `user not authorized`,
    });
  }
};
