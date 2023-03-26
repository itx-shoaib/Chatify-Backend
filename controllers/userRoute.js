const express = require("express");
const dotenv = require("dotenv").config()
var jwt = require('jsonwebtoken');
const userModal = require("../models/userModal");
const secret = process.env.MONGO_URI
let router = express.Router();

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModal.create({ username, password });
        const token = jwt.sign({ userid: user._id, username }, secret);
        res.cookie("token", token, { sameSite: "none", secure: true }).status(201).json({ id: user._id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getLoggedInUser = async (req, res) => {
    try {
        const { token } = res.cookie.token
        if (token) {
            jwt.verify(token, secret, {}, (err, UserData) => {
                if (err) throw err
                res.json(UserData)
            })
        } else {
            res.status(401).json({ error: "No token" });
        }
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createUser,
    getLoggedInUser
};