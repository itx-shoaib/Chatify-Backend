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
        const token = jwt.sign({ userid: user._id }, secret);
        res.cookie("token", token).status(201).json({ _id: user._id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createUser
};