const express = require("express");
const dbconfig = require('./db')

const app = express();


app.get("/test", (req, res) => {
    res.json("test ok")
})

app.listen(4040)