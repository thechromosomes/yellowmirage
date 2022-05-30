const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");

// setUp DataBase
global.db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "p@ssw0rd",
  database: "hotel",
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../server-middleware/views"));

//own module
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(userRouter);
app.use("/admin", adminRouter);

// app.listen(PORT, () => console.log(`Server is Running @ ${PORT}`))
module.exports = app;
