const mongoose = require("mongoose");

const packet = new mongoose.Schema({
  packetName: {
    type: String,
  },
  packetSize: {
    type: String,
  },
  price: {
    type: String,
  },
});

module.exports = Packet = mongoose.model("packet", packet);
