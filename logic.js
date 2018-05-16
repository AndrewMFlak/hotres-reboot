var express = require("express");
var path = require("path");
var bp = require("body-parser");
// var jquery = require("https://code.jquery.com/jquery-3.3.1.js");

var app = express() 
var PORT = 3000 

var tables = [
];

var waitingList = [
];

app.get("/", function(request, response){
response.sendFile(path.join(__dirname, "index.html"))
});

app.get("/view", function(request, response){
response.sendFile(path.join(__dirname, "indexView.html"))
});

app.listen(PORT, function(){
console.log("Yay it worked!")
});

// Question: What does this code do?
// Question: What does this code do?
// $("#add-btn").on("click", function(event) {
//     event.preventDefault();
//     var newCharacter = {
//       name: $("#name").val().trim(),
//       role: $("#role").val().trim(),
//       age: $("#age").val().trim(),
//       forcePoints: $("#force-points").val().trim()
//     };

//     // Question: What does this code do??
//     $.post("/api/characters", newCharacter)
//       .then(function(data) {
//         console.log("add.html", data);
//         alert("Adding character...");
//       });
//   });