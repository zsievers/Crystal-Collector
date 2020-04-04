// crystal var
var crystal = {
  blue: {
    name: "blue",
    value: 0
  },
  green: {
    name: "green",
    value: 0
  },
  red: {
    name: "red",
    value: 0
  },
  yellow: { 
    name: "yellow", 
    value: 0 }
};
// Score var

var userScore = 0;
var targetScore = 0;

// wins and loss

var winCount = 0;
var lossCount = 0;

// functions

var setup = function() {
  // reset current score
  userScore = 0;
  // set new target score 19-120
  targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  // set dif values to crystals 1-12
  crystal.blue.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystal.green.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystal.red.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystal.yellow.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  // change html to update changes

  // console.log
  console.log("-------------------------------------------------------");
  console.log("Target Score: " + targetScore);
  console.log(
    "Blue: " +
      crystal.blue.value +
      " | Green: " +
      crystal.green.value +
      " | Red: " +
      crystal.red.value +
      " | Yellow: " +
      crystal.yellow.value
  );
  console.log("-------------------------------------------------------");
};

/// on click crystals

$(".crystal").click(function() {
  var number = parseInt($(this).attr("data-value"));
  console.log(number);
  userScore += number;
  $("#score-total").text(userScore);
  userWin();
});

// function adding random values to each crystal
function reset() {
  setup(); // values and number reset
  $("#targetNum").text(targetScore);
  // $("#winText").text("");
  // $("#lossText").text(" ");
  $("#blue").attr("data-value", crystal.blue.value);
  $("#green").attr("data-value", crystal.green.value);
  $("#red").attr("data-value", crystal.red.value);
  $("#yellow").attr("data-value", crystal.yellow.value);
}
reset();

// check if user won or lost
var userWin = function() {
  // check if userScore is larger than targetScore
  if (userScore > targetScore) {
    alert("You lost!");
    // add to counter
    lossCount++;
    // add to html area
    $("#loss-area").text("Losses: " + lossCount);
    // restart game
    setup();
    reset();
  } else if (userScore === targetScore) {
      alert("You Won!")
    // add to counter
    winCount++;
    // add to html area
    $("#wins-area").text("Wins: " + winCount);
    // restart game
    setup();
    reset();
  }
};

