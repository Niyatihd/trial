let steps = [
              "OBJECTIVE: Try and score as many points as you can by clearing maximum number of lines. And if you make a skyscraper you are toast.",
              "DIRECTION: Use the arrow keys to move and rotate the tetrads.",
              "UP: Rotates the tetrads.",
              "RIGTH: Moves the tetrads right.",
              "LEFT: Moves the tetrads left.",
              "DOWN: Moves the tetrads down.",
            ];

// for (let i = 0; i < steps.length; i++) {
//   let step = steps[i];
//   let ul = document.getElementById("friendsList");
//   let li = document.createElement('li');
//   li.appendChild(document.createTextNode(name));
//   ul.appendChild(li);
// }



function display() {
  let element = document.getElementById("gameDirections");
  let clicked = false;
  let count = 0;
  let instructions = document.createElement("div");
  // instructions.innerHTML = "Game Directions";
  instructions.id = "gameDirections-text";
  let ul = document.createElement('ul');
  instructions.appendChild(ul);
  instructions.classList.add('animated', 'rollIn');
  
  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(step));
    ul.appendChild(li);
  }

  // instructionstText.innerHTML = "Game Directions";
  // instructions.id = "gameDirections-text";
  // debugger

   // 3. Add event handler
  element.addEventListener("click", function () {
    // debugger
    if (count > 0) {
      document.getElementById('gameDirections-text').classList.remove('hide');
    }

    if (!clicked) {
      let leftPanel = document.getElementsByClassName("left-panel")[0];
      leftPanel.appendChild(instructions);
      clicked = true;
      count += 1;
    } else {
      document.getElementById('gameDirections-text').classList.add('hide');
      clicked = false;
      count += 1;
    }
  });
  
}

module.exports = display;