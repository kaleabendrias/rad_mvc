var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const cors = require("cors");

var session = require("express-session");

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust to your frontend origin
    credentials: true, // Enable credentials (cookies)
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "secretkey" }));

const authRoutes = require("./routes/auth.routes");

app.use("/auth", authRoutes);

module.exports = app;
