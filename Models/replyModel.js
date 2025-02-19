const mongoose = require('mongoose');

// Reply Schema
//--------------------------13feb----------------------
const ReplySchema = mongoose.Schema({
    message : {
        type : String,
        trim : true
    },
    commentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});

const ReplyModel = mongoose.model("Reply", ReplySchema);

module.exports = ReplyModel;