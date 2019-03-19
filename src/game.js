const _ = require("lodash");
const Board = require('./board');
const Tetrad = require('./tetrad');
const tetradBlocks = require('./tetrad_blocks');
const Util = require('./util');

class Game {
  constructor() {
    this.activeTetrad = new Tetrad();
    this.newBoard = new Board();
    this.tetradMoves = this.tetradMoves.bind(this);
    // this.animate = this.animate.bind(this);
    this.gameOver = false;
    this.score = 0;
  }

  updateScore() {
    let scoreDiv = document.getElementById("score");
    scoreDiv.innerHTML = "Score: " + this.score;
  }

  updateNextTetrad() {
    // let nextTetradDiv = document.getElementById("next-tetrad");
    let nextTetrad = Tetrad.randomTetrads[Tetrad.randomTetrads.length - 1][0];
    // nextTetradDiv.innerHTML = nextTetrad;
    Util.drawNextTetrad(nextTetrad);
  }

  removeNextTetrad() {
    // let nextTetradDiv = document.getElementById("next-tetrad");
    // let nextTetrad = Tetrad.randomTetrads[Tetrad.randomTetrads.length - 1][0];
    // nextTetradDiv.innerHTML = nextTetrad;
    Util.undrawNextTetrad();
  }

  render() {
    this.newBoard.drawBoard();
    this.activeTetrad.drawTetrad();
    // debugger
    this.updateScore();
    this.removeNextTetrad();
    this.updateNextTetrad();
    // debugger
    // this.animate();
  }

  collision(nextX, nextY, currentTetrad) {
    let currPosX = this.activeTetrad.xOffset;
    let currPosY = this.activeTetrad.yOffset;
    let cols = this.newBoard.columns; //10
    let rows = this.newBoard.rows; //20

    for (let i = 0; i < currentTetrad.length; i++) {
      for (let j = 0; j < currentTetrad.length; j++) {
        let nextPosX = currPosX + j + nextX;
        let nextPosY = currPosY + i + nextY;

        if (!currentTetrad[i][j]) { //check if tetrad cell === 0
          continue;
        }
        if (nextPosY < 0) {
          continue;
        }

        if (nextPosX >= cols || nextPosX < 0 || nextPosY >= rows) { //check walls
          return true;
        }
        if (this.newBoard.grid[nextPosY][nextPosX] !== this.newBoard.baseColor) { //check adjacent cell to be empty and on board
          return true;
        }
      }
    }
  }

  rotateTetrad1() {
    let nextTetradRotation = this.activeTetrad.tetrad[(this.activeTetrad.currentRotation + 1) % this.activeTetrad.tetrad.length];
    let shift = 0;

    if (this.collision(0, 0, nextTetradRotation)) {

      if (this.activeTetrad.xOffset > 5) {
        shift = -1;
      } else {
        shift = 1;
      }
    }

    if (!this.collision(shift, 0, nextTetradRotation)) {
      // debugger
      this.activeTetrad.removePrev();
      this.activeTetrad.xOffset += shift;
      this.activeTetrad.currentRotation = (this.activeTetrad.currentRotation + 1) % this.activeTetrad.tetrad.length;
      this.activeTetrad.currentTetrad = this.activeTetrad.tetrad[this.activeTetrad.currentRotation];
      this.activeTetrad.drawTetrad();
    }
  }

  stackTetrad() {
    // this.removeNextTetrad();
    // this.updateNextTetrad();
    for (let i = 0; i < this.activeTetrad.currentTetrad.length; i++) {
      for (let j = 0; j < this.activeTetrad.currentTetrad.length; j++) {
        if (!this.activeTetrad.currentTetrad[i][j]) {
          continue;
        } else if (this.activeTetrad.yOffset + i < 0) {
          // alert("Game Over");
          this.gameOver = true;
          break;
        }
        if (this.activeTetrad.currentTetrad[i][j]) {
          // debugger
          let idxJ = this.activeTetrad.xOffset + j;
          let idxI = this.activeTetrad.yOffset + i;
          this.newBoard.grid[idxI][idxJ] = "yellow";
          // this.removeNextTetrad();
          // this.updateNextTetrad();
        }
      }
    }
  }

  addEmptyRow() {
    this.newBoard.grid.unshift(Array(10).fill(this.newBoard.baseColor));
  }

  rowStackFull() {
    for (let i = 0; i < this.newBoard.rows; i++) {
      let rowFull = true;
      for (let j = 0; j < this.newBoard.columns; j++) {
        if (this.newBoard.grid[i][j] === this.newBoard.baseColor) {
          rowFull = false;
        }
      }
      if (rowFull) {
        // document.getElementById('t-body').click();
        $('#t-body').trigger("click");
        this.newBoard.grid = this.newBoard.grid.slice(0, i).concat(this.newBoard.grid.slice(i + 1));
        this.addEmptyRow();
        this.score += 10;
        // let scoreBoard = document.getElementById("score");
        this.updateScore(this.score);
      }
    }
  }

    moveDown() {
      this.removeNextTetrad();
      this.updateNextTetrad();
      if (!this.collision(0, 1, this.activeTetrad.currentTetrad)) {
        // debugger
        this.activeTetrad.removePrev();
        // this.activeTetrad.moveDown();
        this.activeTetrad.yOffset += 1;
        this.activeTetrad.drawTetrad();
      } else {
        this.stackTetrad();
        this.rowStackFull();
        this.newBoard.drawBoard();
        this.activeTetrad = new Tetrad();
      }
    }
  



  tetradMoves(e) {
    e.preventDefault();
    switch (event.keyCode) {
      case 37:
        if (!this.collision(-1, 0, this.activeTetrad.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveLeft();
          this.activeTetrad.drawTetrad();
        }
        // dropStart = Date.now();
        break;
      case 38:
        this.rotateTetrad1();
        // dropStart = Date.now();
        break;
      case 39:
        if (!this.collision(1, 0, this.activeTetrad.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveRight();
          this.activeTetrad.drawTetrad();
        }
        // dropStart = Date.now();
        break;
      case 40:
        this.moveDown();
        if (this.gameOver) {
          alert("Game Over");
        }
        break;
      }
    }

}


// const gameex = new Game();
// window.gameex = gameex;
// const x = new Game
// window.x = x;
module.exports = Game;

//DELETE
// window.newBoard = newBoard;
// window.currtetrad = currtetrad;
//DELETE