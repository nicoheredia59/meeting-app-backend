const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

app.use(
  session({
    name: "qid",
    secret: "asndoabsdiasidas",
    cookie: {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "lax",
      secure: "auto",
    },
    resave: false,
    saveUninitialized: false,
  })
);

module.exports = app;
