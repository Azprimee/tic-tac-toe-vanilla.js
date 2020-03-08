const PLAYER1 = 'fa-times';
const PLAYER2 = 'fa-circle-o';
let round = 1;
let winner = false;

const boxes = [...document.querySelectorAll('.box')];
boxes.forEach(box => box.addEventListener('click', pick, { once: true }));

const combo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function pick(event) {
  const turn = round % 2 === 0 ? PLAYER2 : PLAYER1;
  event.target.classList.add(turn);
  round++;
  checkWin();
}

function checkWin() {
  combo.forEach(combination => {
    if (combination.every(index => boxes[index].classList.contains(PLAYER1))) {
      winner = true;
      alert(`Wygrał gracz X`);
    }
    if (combination.every(index => boxes[index].classList.contains(PLAYER2))) {
      winner = true;
      alert(`Wygral gracz O`);
    }
  });

  if (winner === true) {
    boxes.forEach(el => el.removeEventListener('click', pick));
  }

  checkDraw();
}

function checkDraw() {
  if (
    boxes.every(
      index =>
        index.classList.contains(PLAYER1) || index.classList.contains(PLAYER2)
    )
  ) {
    alert('remis');
  }
}
