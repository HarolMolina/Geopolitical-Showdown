// eleccion aleatoria de la computadora
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

// eleccion del jugador

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
// jugar una ronda
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Es un empate";
  }
  if (humanChoice === "piedra") {
    if (computerChoice === "tijera") {
      humanScore++;
      return "Ganaste, Piedra rompe a tijeras";
    } else {
      computerScore++;
      return "Perdiste, Papel Envuelve a Piedra";
    }
  }
  if (humanChoice === "tijera") {
    if (computerChoice === "papel") {
      humanScore++;
      return "Ganaste, Tijera Corta a papel";
    } else {
      computerScore++;
      return "Perdiste, Piedra rompe a tijeras";
    }
  }
  if (humanChoice === "papel") {
    if (computerChoice === "piedra") {
      humanScore++;
      return "Ganaste, papel envuelve a piedra";
    } else {
      computerScore++;
      return "Perdiste, tijera corta a papel";
    }
  }
}

// variables de puntuacion por rondas
let humanScore = 0;
let computerScore = 0;

// llamadas a las funciones de eleccion
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// llamada a la funcion para jugar una ronda
const result = playRound(humanSelection, computerSelection);

// todos los console.log
console.log("Tu eleccion;", humanSelection);
console.log("elecciond de la computadora;", computerSelection);
console.log(result);
console.log("usuario", humanScore);
console.log("computadora", computerScore);
