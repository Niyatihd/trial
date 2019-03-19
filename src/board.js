const _ = require("lodash");
const Util = require("./util");
const Tetrad = require('./tetrad');


class Board {
  constructor() {
    this.rows = 20;
    this.columns = 10;
    this.baseColor = "black";
    this.grid = Array(20).fill(null).map(() => Array(10).fill(this.baseColor));
  }
  
  drawBoard() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        Util.drawUnitSquareBoard(j, i, this.grid[i][j]);
      }
    }
  }

  drawBoard2() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        Util.drawUnitSquareTetrad(j, i, this.grid[i][j]);
      }
    }
  }

  // addEmptyRow() {
  //  this.grid.unshift(Array(10).fill(this.baseColor));
  // }

  // rowStackFull() {
  //   for (let i = 0; i < this.rows; i++) {
  //     let rowFull = true;
  //     for (let j = 0; j < this.columns; j++) {
  //       if (this.grid[i][j] === this.baseColor) {
  //         rowFull = false;
  //       }
  //     }
  //     if (rowFull) {
  //       // this.fillBoard(i);
  //       $('#t-body').trigger("click");
  //       this.grid =  this.grid.slice(0, i).concat(this.grid.slice(i+1));
  //       this.addEmptyRow();
  //       this.score += 10;
  //     }
  //   }
  // }

//   drawBoardStack(i, j) {
//     Util.drawUnitSquareTetrad(j, i, this.grid[i][j]);
//   }
}

module.exports = Board;





