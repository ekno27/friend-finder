var path = require("path");

//people array from data folder
var people = require("../data/friends");
module.exports= function(app){
    

    //display all characters
    app.get("/api/friends", function(req,res){
        return res.json(people);
    })
    //create new character by takin json input
    app.post("/api/friends",function(req,res){
        var userInput = req.body;
        console.log(userInput);
        people.push(userInput);
        res.json(userInput);
    });
    
}

