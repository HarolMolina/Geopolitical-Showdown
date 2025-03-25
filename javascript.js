// jugar 5 rondas
function Playgame() {
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

  // llamadas a las funciones de eleccion
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  console.log("Tu eleccion;", humanSelection);
  console.log("eleccion de la computadora;", computerSelection);

  // llamada a la funcion para jugar una ronda
  let result = playRound(humanSelection, computerSelection);
  console.log(result);

  // jugar una ronda
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Es un empate";
    }
    if (humanChoice === "piedra") {
      if (computerChoice === "tijera") {
        return "Ganaste, Piedra rompe a tijeras";
      } else {
        return "Perdiste, Papel Envuelve a Piedra";
      }
    }
    if (humanChoice === "tijera") {
      if (computerChoice === "papel") return "Ganaste, Tijera Corta a papel";
    } else {
      return "Perdiste, Piedra rompe a tijeras";
    }
    if (humanChoice === "papel") {
      if (computerChoice === "piedra") {
        return "Ganaste, papel envuelve a piedra";
      } else {
        return "Perdiste, tijera corta a papel";
      }
    }
  }
}

for (let i = 1; i <= 5; i++) {
  Playgame();
}
