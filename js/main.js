const choices = ["rock", "paper", "scissors"];

function game() {
  //play the game
  //play five rounds
  //console based
  for(let i = 0; i <= 4; i++) {
      playRound();
  }
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  console.log("Player chose " + playerSelection)
  console.log("Computer chose " + computerSelection)
  const winner = checkWinner(playerSelection, computerSelection)
  console.log(winner);
}

function playerChoice() {
  //receive input from player
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be correct but capitalization does not matter."
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }

  return input;
}

function computerChoice() {
  //random input from computer
  return choices[Math.floor(Math.random() * 3)];
  
}


function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie!";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC =="paper")
  ) {
    return "Player Wins!";
  } else {
      return "Computer Wins!"
  }
}

