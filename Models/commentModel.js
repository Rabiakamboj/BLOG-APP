const mongoose = require('mongoose');

// Comment Schema
const CommentSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    comment : {
        type : String,
        trim : true
    }
});

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = CommentModel;