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

const port = process.env.Port || 3001;

app.get('/', (req, res) => {
    res.send("We are on Home")
})

app.use("/api", routes);

app.listen(3001, () => {
    console.log(`Server started on port ${port}`)
})