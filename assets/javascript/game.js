$(document).ready(function() {
//random number generator
var random = Math.floor(Math.random() * 102) + 19;
//display random number
$('#target').text(random);  
//random value generator of gems
var redValue = Math.floor(Math.random() * 12) + 1;
var blueValue = Math.floor(Math.random() * 12) + 1;
var yellowValue = Math.floor(Math.random() * 12) + 1;
var greenValue = Math.floor(Math.random() * 12) + 1;
//set global variables
var wins = 0;
var losses = 0;
var sum = 0;
//display wins and losses
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//reset function
function reset() {
 random = Math.floor(Math.random() * 102 + 19);
 $('#target').text(random);
 redValue = Math.floor(Math.random() * 12) + 1;
 blueValue = Math.floor(Math.random() * 12) + 1;
 yellowValue = Math.floor(Math.random() * 12) + 1;
 greenValue = Math.floor(Math.random() * 12) + 1;	
 sum = 0
 $('#total-score').text(sum);
};
//counter wins and alert
function winner() {
 alert("Congrats! You hit the target!");
 wins++;
 $('#numberWins').text(wins);
 reset();
};
//counter losses and alert
function loser() {
 alert("You went over! Try again!!");
 losses++
 $('#numberLosses').text(losses);
 reset();
};
//add red gem score to sum on click
$('#red').on('click', function() {
 sum = sum + redValue;
 $('#total-score').text(sum);
  if (sum == random) {
   winner();
  }
  else if (sum > random) {
   loser();
  };
});
//add blue gem score to sum on click
$('#blue').on('click', function() {
 sum = sum + blueValue;
 $('#total-score').text(sum);
  if (sum == random) {
   winner();
  }
  else if (sum > random) {
   loser();
  };
});
//add yellow gem score to sum on click
$('#yellow').on('click', function() {
 sum = sum + yellowValue;
 $('#total-score').text(sum);
  if (sum == random) {
   winner();
  }
  else if (sum > random) {
   loser();
  };
});
//add green gem score to sum on click
$('#green').on('click', function() {
 sum = sum + greenValue;
 $('#total-score').text(sum);
  if (sum == random) {
   winner();
  }
  else if (sum > random) {
   loser();
  };
});
});