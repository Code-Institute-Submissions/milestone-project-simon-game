/*declaring & syncing boxes & button & counter display*/

const redbox = document.querySelector('#redbox');
const greenbox = document.querySelector('#greenbox');
const bluebox = document.querySelector('#bluebox');
const yellowbox = document.querySelector('#yellowbox');

const playButton = document.querySelector('#playButton');
const turnCounter = document.querySelector("#turn");


/*declaring some variables*/
let gameTurn = [];
let playerTurn = [];
let lightUp;


/*declaring initial colour changing functions*/

function lightUpColor() {
  redbox.style.backgroundColor = "red";
  greenbox.style.backgroundColor = "green";
  bluebox.style.backgroundColor = "blue";
  yellowbox.style.backgroundColor = "yellow";
}

function clearColor() {
  redbox.style.backgroundColor = "darkred";
  greenbox.style.backgroundColor = "darkgreen";
  bluebox.style.backgroundColor = "darkblue";
  yellowbox.style.backgroundColor = "khaki";
}
