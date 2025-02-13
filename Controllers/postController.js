const PostModel = require('../Models/postModel.js');


const CreatePost = async (req, res) => {
    try {
        const post = await PostModel.create(req.body);
        if(!post){
            res.status(200).json({ status : 404, message : "Not Found"});
        }

        res.status(200).json({status : 201, success : true, message : "Successfully Created", data : post});
    } catch (error) {
        console.log("ERROR DURING CREATE POST", error);
    }
}


const FetchAllPost = async (req, res) => {
    try {
        const posts = await PostModel.find();

        if(posts.length == 0){
            res.status(200).json({status : 200, success : true, message : "Empty", data : []});
        }else{
            res.status(200).json({status : 200, success : true, message : "Fetch Successfully", data : posts});
        }
    } catch (error) {
        console.log("ERROR DURING FETCH ALL POSTS", error);
    }
}


const FetchAllPostById = async (req, res) => {
    try {
        const posts = await PostModel.find({userid : req.query.userId});

        if(posts.length == 0){
            res.status(200).json({status : 200, success : true, message : "Empty", data : []});
        }else{
            res.status(200).json({status : 200, success : true, message : "Fetch Successfully", data : posts});
        }
    }catch (error){
        console.log("ERROR DURING FETCH ALL POSTS", error);
    }
}

// postid, title, content

const UpdatePostById = async (req, res) => {
    try {
        
        const update = await PostModel.findByIdAndUpdate(req.body.id, req.body, {new : true})
        
        if(!update){
            res.status(200).json({status : 400, success : false, message : "Failed To Update"});
        }else{
            res.status(200).json({status : 200, success : true, message : "Update Successfully", data : update});
        }

    } catch (error) {
        console.log("ERROR DURING UPDATE POST", error);
    }
}


const DeletePostById = async (req, res) => {
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





const TogglePostLike = async (req, res) => {
    try {
        const like = await PostModel.findByIdAndUpdate(req.body.id, {like : req.body.like}, {new : true});

        if(like){
            res.status(200).json({ status : 200, success : true, message : "Successfully Updated", data : like})
        }else{
            res.status(200).json({ status : 400, success : false, message : "Failed To Updated",})
        }
    } catch (error) {
        console.log("ERROR DURING LIKE", error);
    }
}



module.exports = { CreatePost, FetchAllPost, UpdatePostById, DeletePostById, TogglePostLike, FetchAllPostById };