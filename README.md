# BLOG APP - NODE JS

>USER REGISTERATION 
>USER LOGIN

# POST
> CREATE POST
> READ POST
> DELETE POST
> UPDATE POST


# LIKE
> LIKE
> UNLIKE

# COMMENT
> CREATE COMMENT
> UPDATE COMMENT
> READ COMMENTS
> DELETE COMMENTS


# REPLY
> CREATE COMMENT
> UPDATE COMMENT
> READ COMMENTS
> DELETE COMMENTS



<hr/>

User's Model --> UserModel

> UserModel.find({filter},{projector})  {_id : id}, {_id : 0, name : 1, address : 1, contact : 0} 

> UserModel.findById(id);

> UserModel.findOne({filter}, {}) {email : yourmail@gmail.com}  

> UPDATE METHODS

> UserModel.finndByIdAdUpdate(id,req.body, {new : true});

> UserModel.findOneAndUpdate({name : 'rabia'},{mobile : 5552154},{new : true});

> UserModel.updateOne({filter},{data},{upsert : true});

> UserModel.updateMany({filter},{data},{upsert : true});

> DELETE METHODS

> UserModel.findByIdAndDelete(id);

> UserModel.findOneAndDelete({filter});

> UserModel.deleteOne({filter});

> UserModel.deleteMany({filter});