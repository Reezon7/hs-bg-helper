const express = require('express')
const hostname = "127.0.0.1";
const port = 8000;
const app = express()
const mongoose = require('mongoose');
const cardRouter = require('./routes/cardrouter');
const companionRouter = require('./routes/companionrouter')
const heroRouter = require('./routes/herorouter')
const urlConnection = "mongodb://localhost:27017/hsbghelper"

mongoose.connect(urlConnection)

app.use("/cards", cardRouter)
app.use("/companions", companionRouter)
app.use("/heroes", heroRouter)

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})