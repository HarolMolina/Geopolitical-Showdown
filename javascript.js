console.log('hola mundo');

function getComputerChoice(max) {
  let choice = Math.floor(Math.random() * max);

  if (choice === 0) {
    return 'piedra';
  } else if (choice === 1) {
    return 'papel';
  } else {
    return 'tijera';
  }
}
let result = getComputerChoice(3);
// console.log(result);

function getHumanChoice() {
  let humanInput = prompt();
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
let humanInput = getHumanChoice();
// console.log(humanInput);

let humanScore = 0;
let computerScore = 0;
