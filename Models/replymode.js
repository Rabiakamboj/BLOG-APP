const mongoose = require('mongoose');

// Reply Schema
const ReplySchema = mongoose.Schema({
    message : {
        type :"nice to work",
        ref : "User"
    },
    ContentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    userId : {
        type : String,
        trim : true
    }
});

const ReplyModel = mongoose.model("Reply", ReplySchema);

module.exports = ReplyModel;