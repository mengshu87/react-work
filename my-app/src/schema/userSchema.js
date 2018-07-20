const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name:String,
    pass:String
});


module.exports = User
