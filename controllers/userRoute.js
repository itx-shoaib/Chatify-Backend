const express = require("express");
const userModal = require("../models/userModal");
let router = express.Router();

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new userModal({ username, password });
        await user.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createUser
};