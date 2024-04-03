let randomBox;
let alpha = 0.5;
let score = 0;

function createTiles(n) {
  let tiles = "";
  for (let i = 0; i < n; i++) {
    tiles += `<div class='box' id='b${i}'></div>`;
  }
  document.querySelector(".wrapper").innerHTML = tiles;
}

function setBackgroundColor() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let baseColor = `rgb(${red},${green},${blue})`;
  let allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach(function(ele) {
    ele.style.backgroundColor = baseColor;
  })
  randomBox = Math.floor(Math.random() * 16);
  alpha += 0.01;
  document.querySelector(`#b${randomBox}`).style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`
}

document.querySelector('.wrapper').addEventListener("click", function(ev) {
  let rc = ev.target.id.slice(1);
  if (rc == randomBox) {
    score++;
    document.getElementById("score").textContent = score;
    setBackgroundColor();
  } else {
    document.getElementById("scoreboard").innerHTML = `<p>Game Over! Your score is: <span id="score">${score}</span></p><button id="restartBtn">Restart</button>`;
  }
});

document.body.addEventListener("click", function(ev) {
  if (ev.target.id === "restartBtn") {
    score = 0;
    document.getElementById("score").textContent = score;
    setBackgroundColor();
    document.getElementById("scoreboard").innerHTML = `<p>Score: <span id="score">${score}</span></p><button id="restartBtn">Restart</button>`;
  }
});

createTiles(16);
setBackgroundColor();
