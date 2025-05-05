const botones = document.querySelectorAll("button");
botones.forEach((button) => {
  button.addEventListener("click", () => {
    Playgame();
  });

  function Playgame() {
    let humanSelection = getHumanChoice(button.id);
    let computerSelection = getComputerChoice();

    console.log("eleccion de la computadora;", computerSelection);

    let result = playRound(humanSelection, computerSelection);
    console.log(result);

    // Mostrar en pantalla el ganador
    document.getElementById("welcome").textContent = result;

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        return `${humanChoice} empata con ${computerChoice}`;
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

    // mostrar la puntuacion
    let scoreOnDispaly = document.querySelector(".puntuacion");
    scoreOnDispaly.textContent = `${humanscore} Score ${computerScore}`;

    if (humanscore == 5) {
      alert("Ganaste!!! Ahora tu dominas el mundo");
    } else if (computerScore == 5) {
      alert("Perdiste!!! Bajate el Pantalon y ponte en 4");
    }
  }
});

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    //mostrar  a putin
    let pictureOnDisplay = document.querySelector(".computer-choice");
    let img = document.createElement("img");
    img.src = "Images/putin gana.webp";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);
    return "piedra";
  } else if (choice === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

function getHumanChoice(button) {
  let humanInput = button;

  if (humanInput === "piedra") {
    // humano  mostrar  a putin
    let pictureOnDisplay = document.querySelector(".human-choice");
    let img = document.createElement("img");
    img.src = "Images/putin gana.webp";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);
    return "piedra";
  } else if (humanInput === "papel") {
    // humano mostrar  a xijinping
    let pictureOnDisplay = document.querySelector(".human-choice");
    let img = document.createElement("img");
    img.src = "/Images/avocado.jpg";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);

    return "papel";
  } else if (humanInput === "tijera") {
    // humano mostrar  a trump
    let pictureOnDisplay = document.querySelector(".human-choice");
    let img = document.createElement("img");
    img.src = "/Images/trump gana .webp";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);
    return "tijera";
  } else {
    return console.log("error, ingrese valor correcto");
  }
}
let humanscore = 0;
let computerScore = 0;
