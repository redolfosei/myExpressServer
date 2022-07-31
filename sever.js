//jshint esversion:6

//create and require package express
const express = require('express');

//app is a function that represent the express module
const app = express();

//use the app function to request and sent response 
app.get("/",function(req,res){
    //console.log(req);
    res.send("<h1>Hello World</h1>");
}); 

app.get("/contact", function(req,res){
    res.send("contact me @ redolf@gmail.com")
});

app.get("/about",function(req,res){
    res.send("This website is for Redolf a beginner in node Ebey3yie...");
});

//listen on a specific port and callback function to confirm it's working.  
app.listen(3000, function(){
    console.log('sever startered on port 3000');
});



