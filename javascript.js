function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "piedra";
  } else if (choice === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

function getHumanChoice() {
  let humanInput = prompt(
    "Por favor, elije piedra, papel tijera"
  ).toLowerCase();

  if (humanInput === "piedra") {
    return "piedra";
  } else if (humanInput === "papel") {
    return "papel";
  } else if (humanInput === "tijera") {
    return "tijera";
  } else {
    return console.log("error, ingrese valor correcto");
  }
}
let humanscore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
  checkScore();
}

function checkScore() {
  if (computerScore <= 5 && humanscore <= 5) {
    Playgame();
  } else {
  }
}

function Playgame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  console.log("eleccion de la computadora;", computerSelection);

  let result = playRound(humanSelection, computerSelection);
  console.log(result);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      humanscore++;
      computerScore++;
      return "Es un empate";
    }
    if (humanChoice === "piedra") {
      if (computerChoice === "tijera") {
        humanscore++;
        return "Ganaste, Piedra rompe a tijeras";
      } else {
        computerScore++;
        return "Perdiste, Papel Envuelve a Piedra";
      }
    }
    if (humanChoice === "tijera") {
      if (computerChoice === "papel") {
        humanscore++;
        return "Ganaste, Tijera Corta a papel";
      } else {
        computerScore++;
        return "Perdiste, Piedra rompe a tijeras";
      }
    }
    if (humanChoice === "papel") {
      if (computerChoice === "piedra") {
        humanscore++;
        return "Ganaste, papel envuelve a piedra";
      } else {
        computerScore++;
        return "Perdiste, tijera corta a papel";
      }
    }
  }
  console.log(
    "la puntuacion es Usuario " +
      humanscore +
      " // computadora " +
      computerScore
  );
}
