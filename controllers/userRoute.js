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
        jwt.sign({ userid: user._id }, secret, (err, token) => {
            if (err) throw err
            res.cookie("token", token).status(200).json({ message: 'User created successfully' });
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createUser
};