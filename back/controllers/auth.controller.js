const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const signToken = (email) => {
  return jwt.sign({ email }, "secret", {
    expiresIn: "6h",
  });
};

exports.signup = async (req, res) => {
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 8),
    });
    const token = signToken(user.email);
    res.cookie("jwt", token, { httpOnly: true, secure: false });
    res.status(201).send({ email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.signin = async (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const token = signToken(user.email);
    res.cookie("jwt", token, {
      secure: false,
      // domain: "localhost",
      // sameSite: "Lax",
      // domain: "localhost", // Set the appropriate domain
      // path: "/",
    });
    res.status(200).send({ email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.checktoken = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).send({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "secret");
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    res.status(200).send({ email: user.email, isAuthenticated: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.signout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.clearCookie("jwt");
    res.status(200).send("sucess");
  });
};
