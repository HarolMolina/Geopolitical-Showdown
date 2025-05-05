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
        computerScore++;
        humanscore++;
        return "entre bomberos no nos pisamos la manguera";
      }
      if (humanChoice === "piedra") {
        if (computerChoice === "tijera") {
          humanscore++;
          return "Rusia le tira un Kinzhal al chinito....";
        } else {
          computerScore++;
          return "Trump te mete 400% de aranceles";
        }
      }
      if (humanChoice === "tijera") {
        if (computerChoice === "papel") {
          humanscore++;
          return "Se acabo el made in China y invaden taiwan";
        } else {
          computerScore++;
          return "Putin asere, dejame ir al desfile 'en chino'";
        }
      }
      if (humanChoice === "papel") {
        if (computerChoice === "piedra") {
          humanscore++;
          return "5000 millones pa ucrania como te cae";
        } else {
          computerScore++;
          return "Wa shing tong es la nueva capital de eeuu";
        }
      }
    }

    // mostrar la puntuacion
    let scoreOnDispaly = document.querySelector(".puntuacion");
    scoreOnDispaly.textContent = `${humanscore} Score ${computerScore}`;

    if (humanscore == 5) {
      alert("Ganaste!!! Ahora tu dominas el mundo");
      reiniciar();
    } else if (computerScore == 5) {
      alert("Perdiste!!! Bajate el Pantalon y ponte en 4");
      reiniciar();
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
    // maquina mostrar  a trump
    let pictureOnDisplay = document.querySelector(".computer-choice");
    let img = document.createElement("img");
    img.src = "/Images/trump gana .webp";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);

    return "papel";
  } else {
    // maquina mostrar  a xijinping
    let pictureOnDisplay = document.querySelector(".computer-choice");
    let img = document.createElement("img");
    img.src = "/Images/avocado.jpg";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);

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
    // humano mostrar  a trump
    let pictureOnDisplay = document.querySelector(".human-choice");
    let img = document.createElement("img");
    img.src = "/Images/trump gana .webp";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);
    return "papel";
  } else if (humanInput === "tijera") {
    // humano mostrar  a xijinping
    let pictureOnDisplay = document.querySelector(".human-choice");
    let img = document.createElement("img");
    img.src = "/Images/avocado.jpg";
    pictureOnDisplay.textContent = "";
    pictureOnDisplay.appendChild(img);
    return "tijera";
  } else {
    return console.log("error, ingrese valor correcto");
  }
}
let humanscore = 0;
let computerScore = 0;

// reiniciar juego
function reiniciar() {
  humanscore = 0;
  computerScore = 0;

  welcome.textContent = "Choose your weapon";
  score.textContent = "Score";
  choice.textContent = "❔";
  computerChi.textContent = "❔";
}
