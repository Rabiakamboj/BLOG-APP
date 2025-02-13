


const ReplyComments = async (req, res) => {
    try {
        const post = await ReplyModel.create(req.body);
        if(!post){
            res.status(200).json({ status : 404, message : "Not Found"});
        }

        res.status(200).json({status : 201, success : true, message : "Successfully Created", data : post});
    } catch (error) {
        console.log("ERROR DURING CREATE POST", error);
    }
}


module.exports = {ReplyComments };