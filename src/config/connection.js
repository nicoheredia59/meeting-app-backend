require("dotenv").config();

const { default: mongoose } = require("mongoose");

const connection = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`connected`);
    })
    .catch(() => {
      mongoose.connection.close();
      console.log(`error`);
    });

module.exports = connection;
