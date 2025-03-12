function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return 'piedra';
  } else if (choice === 1) {
    return 'papel';
  } else {
    return 'tijera';
  }
}
// let ComputerChoice = getComputerChoice(3);
// console.log(ComputerChoice);

function getHumanChoice() {
  let humanInput = prompt(
    'Por favor, elije piedra, papel tijera',
  ).toLowerCase();

  if (humanInput === 'piedra') {
    return 'piedra';
  } else if (humanInput === 'papel') {
    return 'papel';
  } else if (humanInput === 'tijera') {
    return 'tijera';
  } else {
    return console.log('error, ingrese valor correcto');
  }
}
// let humanInput = getHumanChoice();
// console.log(humanInput);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return console.log('Es un empate');
  }
  if (humanChoice === 'piedra') {
    if (computerChoice === 'tijera') {
      return console.log('Ganaste, Piedra Aplasta a papel');
    } else {
      return console.log('Perdiste, Papel Envuelve a Piedra');
    }
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
