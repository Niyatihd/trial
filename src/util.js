let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let canvasNextTetrad = document.getElementById('canvas-next-tetrad');
let cN = canvasNextTetrad.getContext('2d');

const Util = {
  drawUnitSquareBoard(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "#E7BFEC";
    c.setLineDash([4, 2]);
    c.lineDashOffset = 4;
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    // c.clearRect(X, Y, 15, 15);
    // c.strokeRect(X, Y, 25, 25);
  },

  drawUnitSquareTetrad(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "black";
    c.setLineDash([4, 2]);
    c.lineDashOffset = 4;
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.clearRect(X, Y, 30, 30);
    c.strokeRect(X, Y, 30, 30);
  },

  drawUnitSquareTetradU(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    cN.fillStyle = color;
    cN.strokeStyle = "black";
    cN.setLineDash([4, 2]);
    cN.lineDashOffset = 4;
    cN.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    cN.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    cN.clearRect(X, Y, 30, 30);
    cN.strokeRect(X, Y, 30, 30);
  },

  drawUnitSquareTetradN(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    cN.fillStyle = color;
    cN.strokeStyle = "black";
    cN.setLineDash([4, 2]);
    cN.lineDashOffset = 4;
    cN.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    cN.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    // cN.clearRect(X, Y, 30, 30);
    // cN.strokeRect(X, Y, 30, 30);
  },

   drawNextTetrad(nextTetrad) {
     for (let i = 0; i < nextTetrad.length; i++) {
       for (let j = 0; j < nextTetrad.length; j++) {
        //  debugger
         if (nextTetrad[i][j]) {
           this.drawUnitSquareTetradN(j, i, "yellow");
         }
       }
     }
   },

   undrawNextTetrad() {
     for (let i = 0; i < 4; i++) {
       for (let j = 0; j < 4; j++) {
        //  debugger
           this.drawUnitSquareTetradU(j, i, "black");
       }
     }
   }
};

module.exports = Util;