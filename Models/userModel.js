const mongoose = require('mongoose');

// User Schema - use for define structure 

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        trim : true
    },
    mobile : {
        type : String,
        trim : true
    },
    password : {
        type : String,
        trim : true
    }
}, { timestamps : true });

// User Model

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;