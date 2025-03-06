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
console.log(result);
