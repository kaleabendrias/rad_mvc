const app = require("./index");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

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

const db = require("./models/User");

mongoose
  .connect("mongodb://localhost:27017/rad", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
