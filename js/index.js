var count = 0;
var compMoves = [];
var playerMoves = [];
var power = 'off';
var turn = 'player';
var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blueAudio = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var greenAudio = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var yellowAudio = new Audio ('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

function powerUp() {
 //first thing should be to call all the colors and play them all so we can watch them light up lel
//should also have an mouseup, mousedown, mouseover style thing here to change the look of the button so it looks like it's being pressed.
  if (power == 'off') {
   power = 'on';
  blueAudio.play();
  startGame();
  }
  else {
    power = 'off';
    yellowAudio.play();
    compMoves = [];
    playerMoves = [];
  }
}

function startGame() {
  //
  count++;
  determineColor();
}

function determineColor() {
    var color = Math.random();
    if (color <= 0.25) {
      compMoves.push('green');
    }
  else if ((color > 0.25) && (color <= 0.5)) {
    compMoves.push('red');
  }
  else if ((color > 0.5) && (color <= 0.75)) {
    compMoves.push('yellow');
  }
  else {
    compMoves.push('blue');
  }
  console.log(color);
  console.log(compMoves);
}

function redPress() {
  if ((power == 'on') && (turn == 'player')){
  redAudio.play();
  $("#red").mousedown(function() {
  $(this).css("background-color", "#ff4c4c");
});
$("#red").mouseup(function() {
  $(this).css("background-color", "#9f0f17");
});
$("#red").mouseout(function() {
  $(this).css("background-color", "#9f0f17");
});
    playerMoves.push('red');
}
  
  else {
    return;
  }
}

function bluePress() {
  if ((power == 'on') && (turn == 'player')){
  greenAudio.play();
  $("#blue").mousedown(function() {
  $(this).css("background-color", "#1c8cff");
});
$("#blue").mouseup(function() {
  $(this).css("background-color", "#094A8F");
});
$("#blue").mouseout(function() {
  $(this).css("background-color", "#094A8F");
});
playerMoves.push('blue');
} else {
  return;
}
}

function greenPress() {
  if ((power == 'on') && (turn == 'player')){
  blueAudio.play();
  $("#green").mousedown(function() {
  $(this).css("background-color", "#13ff7c");
});
$("#green").mouseup(function() {
  $(this).css("background-color", "#00A74A");
});
$("#green").mouseout(function() {
  $(this).css("background-color", "#00A74A");
});
    playerMoves.push('green');
} else {
  return;
}}

//color functions need to play sound, change color, add their identifier to array.
function yellowPress() { 
  if ((power == 'on') && (turn == 'player')){
  yellowAudio.play();
  function changeClass() {
    document.getElementById("yellow").className += "yellowClicked";
  }

   
    // function mouseUp(element){ element.style.background = 'red'; }
    //   function mouseDown(element){ element.style.background = 'blue'; }
// $("#yellow").mousedown(function() {
//   $(this).removeClass("yellowUnclicked").addClass("yellowClicked");
// });
// $("#yellow").mouseup(function() {
//   $(this).removeClass("yellowClicked").addClass("yellowUnclicked");
// });

  playerMoves.push('yellow');
} else {
  return;
}} //end of yellowPress

//to do:
//figure out why the divs need to be clicked once first before the colours light up
//figure out web API sound stuff.
//function to display counter iterating in little box.
//obvis make it much prettier.
//make changing colors more modular, so you dont have to repeat the same bit of jQuery everywhere you need to change the colors.
//the jQuery selectors are buggy. Currently the colours will light up if power is set to off, and they've been pressed previously. oh dear.
//put variable text on the buttons, such as on/off.
//change color of power button from red to green when on/off. maybe make it a gradient so it looks luminescent.