const CommentModel = require('../Models/commentModel.js');
const PostModel = require('../Models/postModel.js');


const CreateComment = async (req, res) => {
    try {
        const create = await CommentModel.create(req.body);
        if(create){
            res.status(200).json({ status : 201, success : true, message : "Successfully Created", data : create});
        }else{
            res.status(200).json({ status : 400, success : false, message : "Failed To Create"})
        }
    } catch (error) {
        console.log("ERROR DURING CREATE COMMENT", error);
    }
}



const FetchComment = async (req, res) => {
    try { const posts = await PostModel.find();

        if(posts.length == 0){
            res.status(200).json({status : 200, success : true, message : "Empty", data : []});
        }else{
            res.status(200).json({status : 200, success : true, message : "Fetch Successfully", data : posts});
        }
        } catch (error) {
        console.log("ERROR DURING FETCH COMMENT", error);
    }
}


const FetchCommentById = async (req, res) => {
    const postid = req.query.postid;

    try { 
        const comments = await CommentModel.find({postId : postid});

        if(comments.length == 0){
            res.status(200).json({status : 200, success : true, message : "Empty", data : []});
        }else{
            res.status(200).json({status : 200, success : true, message : "Fetch Successfully", data : comments});
        }
        } catch (error) {
        console.log("ERROR DURING FETCH COMMENT", error);
    } 
}



const EditComment = async (req, res) => {
    try {
        const posts = await PostModel.find();

            if(posts.length == 0){
              res.status(200).json({status : 200, success : true, message : "Empty", data :[]});
            }else{
                res.status(200).json({status :200, success : true, message : "Edited SuccessFullly"})
            }
        
       

    } catch (error) {
        console.log("ERROR DURING EDIT COMMENT", error);
    }
}



const DeleteComment = async (req, res) => {
    try {
        const deleted = await PostModel.findByIdAndDelete(req.query.id);
        
        if(deleted){
           res.status(200).json({ statsu : 200, success : true, message : "Successfully Deleted", data : deleted });
        }else{
            res.status(200).json({ statsu : 200, success : false, message : "Failed To Delete" });
        }

    } catch (error) {
        console.log("ERROR DURING DELETE POST", error);
    }
}


module.exports = { CreateComment, FetchComment, EditComment, DeleteComment, FetchCommentById};
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































