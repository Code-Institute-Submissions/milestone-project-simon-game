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
  turnCounter.innerHTML = "LET'S GO: " + 1;
  lightUp = 0;
  correct = true;
  intervalid = 0;
  for (let i = 0; i < 15; i++) {
    gameTurn.push(Math.floor(Math.random() * 4) + 1);   //random selection of the 4 boxes
  }
  whosTurn = true;
  intervalid = setInterval(autoTurn, 800);
}


//computer goes first & selects boxes randomly...

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

function redTile() {                             //must add sounds to these
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


//then player goes and boxes are waiting to be clicked...

redbox.addEventListener('click', (event) => {
   playerTurn.push(1);
    check();
    redTile();
    if(!win) {
      setTimeout(() => {
        clearColor(); }, 300);
    }
});

greenbox.addEventListener('click', (event) => {
  playerTurn.push(2);
    check();
    greenTile();
    if(!win) {
      setTimeout(() => {
        clearColor(); }, 300);
    }
});

bluebox.addEventListener('click', (event) => {
  playerTurn.push(3);
    check();
    blueTile();
    if(!win) {
      setTimeout(() => {
        clearColor(); }, 300);
    }
});

yellowbox.addEventListener('click', (event) => {
  playerTurn.push(4);
    check();
    yellowTile();
    if(!win) {
      setTimeout(() => {
        clearColor(); }, 300);
    }
});


//to check if the player selected the correct boxes

function check() {
  if (playerTurn[playerTurn.length - 1] !== gameTurn[playerTurn.length - 1])
    correct = false;

  if (playerTurn.length == 10 && correct) {        //10 levels, can add more
    winGame();
}

  if (correct == false) {
    lightUpColor();
    turnCounter.innerHTML = "THAT'S WRONG!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();
      turnCounter.innerHTML = "BACK TO LEVEL 1";
    }, 800);
  }

  if (turn == playerTurn.length && correct && !win) {
    turn++;
    playerTurn = [];
    whosTurn = true;
    lightUp = 0;
    turnCounter.innerHTML = turn;
    intervalid = setInterval(autoTurn, 800);
  }
  }


function winGame () {
  lightUpColor();
  turnCounter.innerHTML = "YOU WIN!";
  win = true;
}