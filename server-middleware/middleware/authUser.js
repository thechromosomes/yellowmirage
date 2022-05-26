const jwt = require("jsonwebtoken");

//loading env var
const pass = "nature_roar";

//to authorize the user
module.exports = (req, res, next) => {
  console.log(req.body)
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const decode = jwt.verify(token, pass);
    if (decode.email != req.body.email || req.body.mail) {
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
