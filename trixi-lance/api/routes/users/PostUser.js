const User = require("../../../models/User");

module.exports = async (req, res) => {
  const { email, fullName, username, password } = req.body;
  const userModel = new User({
    email: email,
    fullName: fullName,
    username: username,
    password: password
  });

  console.log(req.body)
  await userModel.save();
  res.json(userModel);
};

