//declaring & syncing boxes & button & counter display

const redbox = document.querySelector('#redbox');
const greenbox = document.querySelector('#greenbox');
const bluebox = document.querySelector('#bluebox');
const yellowbox = document.querySelector('#yellowbox');

const playButton = document.querySelector('#playButton');
const turnCounter = document.querySelector("#turn");


//declaring some variables
let gameTurn = [];
let playerTurn = [];
let lightUp;
let turn;
let correct;          //is sequence correct?
let whosTurn;
let intervalid;       //time between auto selections
let win;


//declaring initial colour changing functions

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


//syncing the play button to the play function below

playButton.addEventListener('click', (event) => {
        play();
});

function play() {
  gameTurn = [];
  playerTurn = [];
  win = false;
  turn = 1;
  turnCounter.innerHTML = 'TURN: ' + 1;
  lightUp = 0;
  correct = true;
  intervalid = 0;
  for (let i = 0; i < 15; i++) {
    gameTurn.push(Math.floor(Math.random() * 4) + 1);   //random selection of the 4 boxes
  }
  whosTurn = true;
  intervalid = setInterval(autoTurn, 800);
}


//computer goes first & selects boxes randomly

function autoTurn() {
  if (lightUp == turn) {
    clearInterval(intervalid);
    whosTurn = false;
    clearColor();                  //reset colours after random selection
  }
  
  if (whosTurn) {
    clearColor();
    setTimeout(() => {
      if (gameTurn[lightUp] == 1) redTile();       //if computer selects this then light up box
      if (gameTurn[lightUp] == 2) greenTile();         //and play sound from functions below
      if (gameTurn[lightUp] == 3) blueTile();
      if (gameTurn[lightUp] == 4) yellowTile();
      lightUp++;
    }, 200);
  }
}

function redTile() {
  redbox.style.backgroundColor = "red";
}

function greenTile() {
  greenbox.style.backgroundColor = "green";
}

function blueTile() {
  bluebox.style.backgroundColor = "blue";
}

function yellowTile() {
  yellowbox.style.backgroundColor = "yellow";
}


//then player goes and boxes are waiting to be clicked here...

redbox.addEventListener('click', (event) => {
  
});

greenbox.addEventListener('click', (event) => {
  
});

bluebox.addEventListener('click', (event) => {
  
});

yellowbox.addEventListener('click', (event) => {
  
});

