/**
 * Dependencies
 */

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


/**
 * Setting up express app
 */
var app  = express();
var PORT = 3000 || process.env.PORT;

/**
 * Express app to handle data parsing 
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// })


// app.get("/survey",function(req,res){
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// })

//application routes
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.listen(PORT,function(){
    console.log("App listening on PORT" + PORT);
})

