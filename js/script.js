var squareList = document.querySelectorAll(".row .square"),
  resetGame = document.querySelector(".board .reset-game button"),
  startButton = document.querySelector(".information button"),
  winnerField = document.querySelector(".board .winner"),
  turnField = document.querySelector(".board .game-time"),
  menuScreen = document.querySelector(".information");
(hasWinner = false), (playerSignal = "X"), (turnField.textContent = "Turn: X");

startButton.addEventListener("click", () => {
  setInterval(() => {
    menuScreen.style.display = "none";
  }, 300);
});

function selectSquare(elementId) {
  let squareElement = document.getElementById(elementId);
  if (squareElement.textContent === "-" && !hasWinner) {
    if (playerSignal === "X") {
      squareElement.style.color = "#d429ff";
      squareElement.textContent = playerSignal;
    } else {
      squareElement.style.color = "#d429ff";
      squareElement.textContent = playerSignal;
    }

    changePlayer();
    checkSequence();
  } else {
    return;
  }
}

function checkSequence() {
  if (
    squareList[0].textContent !== "-" &&
    squareList[0].textContent === squareList[1].textContent &&
    squareList[1].textContent === squareList[2].textContent
  ) {
    changeSquareColor([squareList[0], squareList[1], squareList[2]]);
    setWinner(squareList[0].textContent);
  } else if (
    squareList[3].textContent !== "-" &&
    squareList[3].textContent === squareList[4].textContent &&
    squareList[4].textContent === squareList[5].textContent
  ) {
    changeSquareColor([squareList[3], squareList[4], squareList[5]]);
    setWinner(squareList[3].textContent);
  } else if (
    squareList[6].textContent !== "-" &&
    squareList[6].textContent === squareList[7].textContent &&
    squareList[7].textContent === squareList[8].textContent
  ) {
    changeSquareColor([squareList[6], squareList[7], squareList[8]]);
    setWinner(squareList[6].textContent);
  } else if (
    squareList[0].textContent !== "-" &&
    squareList[0].textContent === squareList[3].textContent &&
    squareList[3].textContent === squareList[6].textContent
  ) {
    changeSquareColor([squareList[0], squareList[3], squareList[6]]);
    setWinner(squareList[0].textContent);
  } else if (
    squareList[1].textContent !== "-" &&
    squareList[1].textContent === squareList[4].textContent &&
    squareList[4].textContent === squareList[7].textContent
  ) {
    changeSquareColor([squareList[1], squareList[4], squareList[7]]);
    setWinner(squareList[1].textContent);
  } else if (
    squareList[2].textContent !== "-" &&
    squareList[2].textContent === squareList[5].textContent &&
    squareList[5].textContent === squareList[8].textContent
  ) {
    changeSquareColor([squareList[2], squareList[5], squareList[8]]);
    setWinner(squareList[2].textContent);
  } else if (
    squareList[0].textContent !== "-" &&
    squareList[0].textContent === squareList[4].textContent &&
    squareList[4].textContent === squareList[8].textContent
  ) {
    changeSquareColor([squareList[0], squareList[4], squareList[8]]);
    setWinner(squareList[0].textContent);
  } else if (
    squareList[2].textContent !== "-" &&
    squareList[2].textContent === squareList[4].textContent &&
    squareList[4].textContent === squareList[6].textContent
  ) {
    changeSquareColor([squareList[2], squareList[4], squareList[6]]);
    setWinner(squareList[2].textContent);
  }
}

function changeSquareColor(elementsArray) {
  elementsArray.forEach((element) => {
    element.style.backgroundColor = "#120116";
  });
}

function setWinner(winnerSignal) {
  winnerField.textContent = `O ganhador foi o jogador com o ${winnerSignal}.`;
  hasWinner = true;
  turnField.style.display = "none";
}

function changePlayer() {
  if (playerSignal === "X") {
    playerSignal = "O";
    playerSignal = "O";
  } else {
    playerSignal = "X";
  }
  turnField.textContent = `Turn: ${playerSignal}`;
}

resetGame.addEventListener("click", () => document.location.reload(true));
