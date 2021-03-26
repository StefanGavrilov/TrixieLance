module.exports = async (req, res) => {
    try {
      const packets = await Packet.find();
      res.json(packets);
    } catch (err) {
      res.json({ message: err });
    }
  };
  
  