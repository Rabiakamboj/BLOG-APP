
const express = require("express"); // Express framework
const path = require("path"); // path module
const bodyParser = require("body-parser"); // User for parsing data from body
const DatabaseConnection = require('./Common/DBconnection.js');


DatabaseConnection();



// Routes
const AuthRoutes = require('./Routes/authRoutes.js');
const PostRoutes = require('./Routes/postRoutes.js');


const PORT = process.env.PORT || 8080; // app's port
const app = express() // create express server

app.use(bodyParser.json()); // Handle JSON data
app.use(bodyParser.urlencoded({extended : true})) // For query parsing

app.get('/app', function(req, res){
    res.send("<h1> Welcome ! BLOG APP SERVER is listening... </h1>")
})

//
app.use('/api/auth', AuthRoutes);
app.use('/api/post', PostRoutes);


app.listen(PORT, ()=> console.log(`SERVER LISTENING ON PORT ${PORT}`))