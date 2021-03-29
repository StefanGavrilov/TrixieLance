const express = require('express');
const path = require('path');
const cors = require("cors");
const routes = require("./api/routes");
const connectDB = require('./db/Connection');

const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("We are on Home")
})

app.use("/api", routes);

app.listen(3001, () => {
    console.log(`Server started on port ${PORT}`)
})