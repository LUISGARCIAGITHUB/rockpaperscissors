// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//0.0 ***rock*** .33 ***paper*** .66 ***scissors*** 1.0
/*
user + computer = result
rock + rock = tie
paper + rock = ?
scissors + rock ?
*/

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {
  let user = document.getElementById("input").value;
  user = user.toLowerCase();
  console.log(user);
  $("#userChoice").html(`<p>${user}</p>`);
  randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber < .30)
{
  computerChoice = 'rock';
  $("#computerChoice").html(`<p>${computerChoice}</p>`);
} 
  else if (randomNumber > .30 && randomNumber < .60)
    {
  computerChoice = 'paper';
  $("#computerChoice").html(`<p>${computerChoice}</p>`);
    }
    else if (randomNumber > .60 && randomNumber < 1.0)
    {
  computerChoice = 'scissor';
  $("#computerChoice").html(`<p>${computerChoice}</p>`);
    }
  if (computerChoice === 'rock' && user === 'rock')
{
  $("#result").text('tie');
}
  else if (computerChoice === 'scissor' && user === 'rock')
    {
      $("#result").text('User wins');
    }
   else if (computerChoice === 'paper' && user === 'rock')
    {
      $("#result").text('Computer wins');
    }
  else if (computerChoice === 'scissor' && user === 'paper')
    {
      $("#result").text('Computer wins');
    }
    else if (computerChoice === 'scissor' && user === 'scissor')
    {
      $("#result").text('tie');
    }
    else if (computerChoice === 'paper' && user === 'rock')
    {
      $("#result").text('Computer wins');
    }
    else if (computerChoice === 'paper' && user === 'paper')
    {
      $("#result").text('tie');
    }
    else if (computerChoice === 'rock' && user === 'paper')
    {
      $("#result").text('Computer wins');
    }
    else if (computerChoice === 'scissor' && user === 'scissor')
    {
      $("#result").text('tie');
    }
    else if (computerChoice === 'paper' && user === 'scissor')
    {
      $("#result").text('User wins');
    }
    else if (computerChoice === 'rock' && user === 'scissor')
    {
      $("#result").text('Computer wins');
    }
  else {
      alert("That's not an option");
  }
  
  $("h3").click(function() {
    alert("nice easter egg you found");
  })
});

let userChoice = "";
let computerChoice = "";
let winner = "";
let randomNumber = 0;