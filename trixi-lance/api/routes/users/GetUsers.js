module.exports = async (req, res) => {
  try {
    const users = await User.find();
/*     const filteredUsers = users.filter((user) => {
      if (user.firstName[0] == "J") {
        return user;
      }
    }); */
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

