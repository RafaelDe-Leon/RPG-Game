// global var

// create a var to hold the value of each power-levels of each character, hp, name.

// character HP
var characters = [
  {
    name: "Goku",
    HP: 10000,
    AP: 100
  },
  {
    name: "Gohan",
    HP: 5000,
    AP: 80
  },
  {
    name: "Vegeta",
    HP: 9001,
    AP: 90
  },
  {
    name: "Jiren",
    HP: 15000,
    AP: 120
  }
];

// attack variable to keep track of increasing attack damage for each game

var attack = 0;
var opponent = false;
var alive = false;
var gameStarted = false;
var opponent = characters.length-1;

$(document).ready(function() { 
// on click of a characters, the character is moved to the selectedCharacter div while the remaining characters are moved to the enemy selection div

$("#goku").on("click", function(event) {
   console.log("I am clicked, Goku");
   $("#goku").appendTo($("#character"));
});
if (characters === true) {
    console.log("im already here");
}

$("#gohan").on("click", function (event) {
    console.log("I am clicked gohan");
    $("#gohan").appendTo($("#character"));
});

$("#vegeta").on("click", function (event) {
    console.log("I am clicked vegeta");
    $("#vegeta").appendTo($("#character"));
});

$("#jiren").on("click", function (event) {
    console.log("I am clicked jiren");
    $("#jiren").appendTo($("#character"));
});



});