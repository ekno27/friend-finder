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
        var userResults = userInput.scores;
        var match;
        var minIndex;
      
        var minTotalDifference = 100;
        console.log(minTotalDifference);

        for (var i = 0; i <people.length;i++){
            var totalDifference = calculateDifference(userResults,people[i].scores);
             if(totalDifference<minTotalDifference){
                 minTotalDifference = totalDifference;
                 console.log(minTotalDifference);
                 minIndex=i;
             }
        }
        var match = people[minIndex];
        console.log(minIndex);
      
    

        people.push(userInput);
        res.json(match);
    });
    

  
    function calculateDifference(userScore, db_score){
        var totalDifference =0;
        for(var i = 0;i<db_score.length;i++){
            totalDifference += Math.abs(userScore[i]-db_score[i]);
           
        }
        
        return totalDifference;
    }
}

