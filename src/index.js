const _ = require("lodash");
const Game = require('./game');
const display = require('./how_to_play');
// const board = require('./board');
// const tetrad = require('./tetrad');
// const tetradBlocks = require("./tetrad_blocks");


document.addEventListener("DOMContentLoaded", () => {
  display();
  // const canvasEl = document.getElementsByTagName("canvas")[0];
  // const ctx = canvasEl.getContext("2d");
  let button = document.createElement("button");
  button.innerHTML = "Start Game";
  button.id = "startGame";
  

  // 2. Append somewhere
  let body = document.getElementsByClassName("tetris-canvas")[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener("click", function () {
      // alert("did something");
    document.getElementById('startGame').classList.add('animated', 'zoomOutDown');
    // document.getElementById('startGame').classList.add('hide');

    // let showNext = document.createElement("div");
    // showNext.innerHTML = "Next Tetrad";
    // showNext.id = "next-tetrad";
    // let nextTetradDiv = document.getElementsByClassName("right-panel")[0];
    // body.appendChild(nextTetradDiv);

    // element.addEventListener("click", function () {
    //   alert("Hello World!");
    
    const newGame = new Game();
    //DELETE
      window.newGame = newGame;
    //DELETE
    // let button = document.getElementById("gameStart");
    // button.onclick();
    newGame.render();
    document.addEventListener("keydown", newGame.tetradMoves);

    let start = Date.now();
    // let gameOver = false;

    function animate() {
      let now = Date.now();
      let timeDelta = now - start;
      if (newGame.score <= 50) {
        if (timeDelta > 750) {
          newGame.moveDown();
          start = Date.now();
        }
      } else if (newGame.score <= 100) {
        if (timeDelta > 400) {
          newGame.moveDown();
          start = Date.now();
        }
      } else if (newGame.score <= 200) {
        if (timeDelta > 200) {
          newGame.moveDown();
          start = Date.now();
        }
      } else {
        if (timeDelta > 120) {
          newGame.moveDown();
          start = Date.now();
        }
      }
      // debugger
      if (!newGame.gameOver) {
        requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(requestAnimationFrame(animate));
        alert("Game Over!");
      }

    }

  
    window.requestAnimationFrame(animate);
  });
  //  });
  

 });


