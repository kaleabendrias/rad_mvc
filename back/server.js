const app = require("./index");

const mongoose = require("mongoose");

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
