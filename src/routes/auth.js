const express = require("express");
const {
  createUser,
  getUsers,
  deleteUser,
  login,
} = require("../controllers/auth");

const authRouter = express.Router();

authRouter.get("/", getUsers);

authRouter.post("/login", login);

authRouter.post("/register", createUser);

authRouter.put("/", (req, res) => {
  res.send(`hello`);
});

authRouter.delete("/", deleteUser);

module.exports = authRouter;
