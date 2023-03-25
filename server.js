const express = require("express");
const cors = require("cors")
const dbconfig = require('./db')

const app = express();

// Middlewear
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

// Routers
const userRouter = require('./routes/userRoute')

// API PATH
app.use('/api/user', userRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started by using nodemon on port ${port} `))