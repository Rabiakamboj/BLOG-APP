const mongoose = require('mongoose');

// Post Schema

const PostSchema = mongoose.Schema({
    topic: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    like: {
        type: Boolean,
        default: false
    },
    postedAt: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });


// Model
const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;

