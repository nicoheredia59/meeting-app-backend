const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
  const users = await User.find({}).populate("created_meeting");

  return res.status(200).json(users);
};

exports.createUser = async (req, res) => {
  const hashPass = await bcrypt.hash(req.body.password, 12);

  const user = await User.create({ ...req.body, password: hashPass });

  return res.status(201).json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!(user, isValidPassword)) {
    return res.json({ message: "Invalid credentials" });
  }

  req.session.user = user;

  return res.status(200).json(user);
};

exports.loginRequired = async (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.status(400).json({
      message: "You need login to access to this route",
    });
  }

  next();
};

exports.logout = async (req, res) => {
  delete req.session.user;

  return res.status(200).json({ message: "Loged out 😢" });
};

exports.updateUser = async (req, res) => {
  const { email, name } = req.body;

  const user = await User.findOneAndUpdate({});
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;

  await User.findOneAndDelete(email);

  return res.status(200).json({ message: "Deleted" });
};
