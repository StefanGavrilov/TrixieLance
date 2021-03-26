const Packet = require('../../../models/Packet');

module.exports = async (req, res) => {
  const { packetName, packetSize, price } = req.body;
  const packetModel = new Packet({
    packetName: packetName,
    packetSize: packetSize,
    price: price
  });

  await packetModel.save();
  res.json(packetModel);
};

