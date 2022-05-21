var squareList = document.querySelectorAll(".row .square");
var playerSignal = 'X';

function selectSquare(elementId) {
  let squareElement = document.getElementById(elementId);
  if (squareElement.textContent === '-') {
    if (playerSignal === 'X') {
      squareElement.style.color = 'red';
      squareElement.textContent = playerSignal;
    } else {
      squareElement.style.color = 'blue';
      squareElement.textContent = playerSignal;
    }
    changePlayer();
    checkSequence();
  } else {
    return;
  }
}

function checkSequence() {
  if (squareList[0].textContent !== '-' && squareList[0].textContent === squareList[1].textContent && squareList[1].textContent === squareList[2].textContent) {
    changeSquareColor(squareList[0], squareList[1], squareList[2])
  } else if (squareList[3].textContent !== '-' && squareList[3].textContent === squareList[4].textContent && squareList[4].textContent === squareList[5].textContent) {
    changeSquareColor(squareList[3], squareList[4], squareList[5])
  } else if (squareList[6].textContent !== '-' && squareList[6].textContent === squareList[7].textContent && squareList[7].textContent === squareList[8].textContent) {
    changeSquareColor(squareList[6], squareList[7], squareList[8])
  } else if (squareList[0].textContent !== '-' && squareList[0].textContent === squareList[3].textContent && squareList[3].textContent === squareList[6].textContent) {
    changeSquareColor(squareList[0], squareList[3], squareList[6])
  } else if (squareList[1].textContent !== '-' && squareList[1].textContent === squareList[4].textContent && squareList[4].textContent === squareList[7].textContent) {
    changeSquareColor(squareList[1], squareList[4], squareList[7])
  } else if (squareList[2].textContent !== '-' && squareList[2].textContent === squareList[5].textContent && squareList[5].textContent === squareList[8].textContent) {
    changeSquareColor(squareList[2], squareList[5], squareList[8])
  } else if (squareList[0].textContent !== '-' && squareList[0].textContent === squareList[4].textContent && squareList[4].textContent === squareList[8].textContent) {
    changeSquareColor(squareList[0], squareList[4], squareList[8])
  } else if (squareList[2].textContent !== '-' && squareList[2].textContent === squareList[4].textContent && squareList[4].textContent === squareList[6].textContent) {
    changeSquareColor(squareList[2], squareList[4], squareList[6])
  }
}

function changeSquareColor(squareOne, squareTwo, squareThree) {
  squareOne.style.backgroundColor = 'green';
  squareTwo.style.backgroundColor = 'green';
  squareThree.style.backgroundColor = 'green';
}

function changePlayer() {
  if (playerSignal === 'X') {
    playerSignal = 'O'
    playerSignal = 'O'
  } else {
    playerSignal = 'X'
  }
  // ADD ELEMENT OF HTML
}