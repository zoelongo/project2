var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "holiday_db",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});










// connection.connect(function(err){
//     if (err) throw err;
//     runQuiz();
// });

// function runQuiz() {
//     inquirer
//       .prompt({
//         message: "If you could only eat one candy for Halloween what would it be?",
//         choices: [
//             "Snickers",
//             "Kit Kat",
//             "Reeses",
//             "Gummy Worms",
//             "exit"
//         ]
//       })
//       .then(function(answer) {
//         switch (answer.choices) {
//         case "Snickers":
//           nextQue();
//           break;
  
//         case "Kit Kat":
//           nextQue();
//           break;
  
//         case "Reeses":
//           nextQue();
//           break;
  
//         case "Gummy Worms":
//           nextQue();
//           break;
  
//         case "exit":
//           connection.end();
//           break;
//         }
//       });
//   }

//   function nextQue(){
//       inquirer
//         .prompt({
//             message: "If you could pick one animal to escort you into the underworld who would you choose?",
//             choices: [
//                 "Barry the Bat",
//                 "Shakira the Snake",
//                 "Waldo the Wolf",
//                 "Beatrice the Black Cat",
//                 "exit"
//             ]
//         })
//         .then(function(answer){
//             switch(answer.choices) {
//                 case "Barry the Bat":
//                     nextQue3();
//                     break;
            
//                   case "Shakira the Snake":
//                     nextQue3();
//                     break;
            
//                   case "Waldo the Wolf":
//                     nextQue3();
//                     break;
            
//                   case "Beatrice the Black Cat":
//                     nextQue3();
//                     break;
            
//                   case "exit":
//                     connection.end();
//                     break;
//             }
//         })
//   }

//   function nextQue3(){
//       inquirer 
//         .prompt({
//             message: "What is your favorite Halloween color?",
//             choices: [
//                 "Orange",
//                 "Purple",
//                 "Black",
//                 "Slime Green",
//                 "exit"
//             ]
//         })
//         .then(function(answer){
//             switch(answer.choices) {

//                 case "Orange":
//                     console.log("You should be a bumble bee for Halloween! Buzz buzz!");
//                     connection.end();
//                     break;

//                 case "Purple":
//                     console.log("You should be a princess for Halloween, ooohhhlala!");
//                     connection.end();
//                     break;

//                 case "Black":
//                     console.log("You should be a cowboy for Halloween, congratulations! Cowboys are awesome.");
//                     connection.end();
//                     break;

//                 case "Slime Green":
//                     console.log("You should be a decent human being for Halloween! Shape up buddy.");
//                     connection.end();
//                     break;

//                 case "exit":
//                     connection.end();
//                     break;

//             }
//         })
//   }

// runQuiz();




// function runQuiz(){
//     inquirer
//         .prompt({
//             name: (connection.query("SELECT question FROM quiz", function(err, res){
//                 if (err) throw err;

//                 console.log(res);
//                 connection.end();
//             }))

        
//         })




// function queryQuestion(){
//     connection.query("SELECT question FROM quiz", function(err, res){
//         if (err) throw err;

//         console.log(res);
//         connection.end();
//     })
// };

// function queryChoices(){
//     connection.query("SELECT choice1 FROM quiz", function(err,res){
//         if (err) throw err;

//         console.log(res);
//         connection.end();
//     })
//     connection.query("SELECT choice2 FROM quiz", function(err,res){
//         if (err) throw err;

//         console.log(res);
//         connection.end();
//     })
//     connection.query("SELECT choice3 FROM quiz", function(err,res){
//         if (err) throw err;

//         console.log(res);
//         connection.end();
//     })
//     connection.query("SELECT choice4 FROM quiz", function(err,res){
//         if (err) throw err;

//         console.log(res);
//         connection.end();
//     })

// };