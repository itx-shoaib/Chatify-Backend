var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    // This is the basic model schema of user
    username: { type: String, unique: true },
    password: Strinng,
}, { timestamps: true });

var User = mongoose.model("User", UserSchema);
module.exports.User = User;