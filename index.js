
const express = require("express"); // Express framework
const path = require("path"); // path module
const bodyParser = require("body-parser"); // User for parsing data from body
const DatabaseConnection = require('./Common/DBconnection.js');


DatabaseConnection();


// Routes
const AuthRoutes = require('./Routes/authRoutes.js');
const PostRoutes = require('./Routes/postRoutes.js');
const CommentRoutes = require('./Routes/commentRoutes.js');
const replyControllers = require('./Routes/replyRoutes.js');

const PORT = process.env.PORT || 8080; // app's port
const app = express() // create express server

app.use(bodyParser.json()); // Handle JSON data
app.use(bodyParser.urlencoded({extended : true})) // For query parsing

app.get('/app', function(req, res){
    res.send("<h1> Welcome ! BLOG APP SERVER is listening... </h1> <br> <img src='data:image/jpeg;base64,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'>")
})

//
app.use('/api/auth', AuthRoutes);
app.use('/api/post', PostRoutes);
app.use('/api/comment', CommentRoutes);
app.use('/api/reply', replyControllers)


app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`))