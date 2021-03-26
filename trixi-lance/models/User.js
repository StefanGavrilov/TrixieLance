const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: {
    type: String,
  },
  fullName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", user);
