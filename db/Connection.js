const mongoose = require('mongoose');

const URI ="mongodb+srv://tetratka:tetratka@cluster0.kwqgv.mongodb.net/TrixieLance?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
