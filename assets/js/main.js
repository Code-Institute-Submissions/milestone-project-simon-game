//declaring & syncing boxes & button & counter display

const redbox = document.querySelector('#redbox');
const greenbox = document.querySelector('#greenbox');
const bluebox = document.querySelector('#bluebox');
const yellowbox = document.querySelector('#yellowbox');

const playButton = document.querySelector('#playButton');
const turnCounter = document.querySelector('#turn');


//declaring some variables
let gameTurn = [];
let playerTurn = [];
let lightUp;
let turn;

//is sequence correct?
let correct;          
let whosTurn;

//time between auto selections
let intervalid;       
let win;
let noise = true;


//declaring initial colour changing functions
function lightUpColor() {
  redbox.style.backgroundColor = 'red';
  greenbox.style.backgroundColor = 'green';
  bluebox.style.backgroundColor = 'blue';
  yellowbox.style.backgroundColor = 'yellow';
}

function clearColor() {
  redbox.style.backgroundColor = 'darkred';
  greenbox.style.backgroundColor = 'darkgreen';
  bluebox.style.backgroundColor = 'darkblue';
  yellowbox.style.backgroundColor = 'khaki';
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
  turnCounter.innerHTML = 'HERE WE GO: ' + 1;
  lightUp = 0;
  correct = true;
  intervalid = 0;
  
//random selection of the 4 boxes
  for (let i = 0; i < 15; i++) {
    gameTurn.push(Math.floor(Math.random() * 4) + 1);   
  }
  whosTurn = true;
  intervalid = setInterval(autoTurn, 800);
}


//computer goes first & selects boxes randomly...
function autoTurn() {
  if (lightUp == turn) {
    clearInterval(intervalid);
    whosTurn = false;
//reset colours after random selection
    clearColor();                  
  }
  
  if (whosTurn) {
    clearColor();
    setTimeout(() => {
//if computer selects this then light up box and play sound from functions below
      if (gameTurn[lightUp] == 1) redTile();       
      if (gameTurn[lightUp] == 2) greenTile();
      if (gameTurn[lightUp] == 3) blueTile();
      if (gameTurn[lightUp] == 4) yellowTile();
      lightUp++;
    }, 200);
  }
}

//lights up and adds sound if selected
function redTile() {
  if (noise) {
    let audio = document.getElementById('buzzRed');
    audio.play();
  }
  noise = true;
  redbox.style.backgroundColor = 'red';
}

function greenTile() {
  
  if (noise) {
    let audio = document.getElementById('buzzGreen');
    audio.play();
  }
  noise = true;
  greenbox.style.backgroundColor = 'green';
}

function blueTile() {
  if (noise) {
    let audio = document.getElementById('buzzBlue');
    audio.play();
  }
  noise = true;
  bluebox.style.backgroundColor = 'blue';
}

function yellowTile() {
  if (noise) {
    let audio = document.getElementById('buzzYellow');
    audio.play();
  }
  noise = true;
  yellowbox.style.backgroundColor = 'yellow';
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

//I put in 10 levels here but I can add more
  if (playerTurn.length == 10 && correct) { 
    winGame();
}

  if (correct == false) {
    lightUpColor();
//losing tone here
    let audio = document.getElementById('buzzlose');
      audio.play();
      noise = true;
    turnCounter.innerHTML = 'THAT IS WRONG!';
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();
      turnCounter.innerHTML = 'YOU CRASHED - TRY AGAIN';
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
  turnCounter.innerHTML = 'YOU WIN!';
  win = true;
//winners tone here
  let audio = document.getElementById('buzzwin');
    audio.play();
    noise = true;
}