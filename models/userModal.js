var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    // This is the basic model schema of user
    username: { type: String, unique: true },
    password: String,
}, { timestamps: true });

const userModal = mongoose.model('users', userSchema)

module.exports = userModal