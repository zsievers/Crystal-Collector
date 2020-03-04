// crystal var
var crystal = {
  blue:
  {
    name: "blue",
    value: 0
  },
  green: 
  {
    name: "green",
    value: 0
  },
  purple:
  {
    name: "purple",
    value: 0
  },
  rainbow: 
  {  name: "rainbow",
    value: 0
  }
};
// Score var

var userScore  = 0;
var targetScore   = 0;

// wins and loss

var winCount    = 0;
var lossCount   = 0;

// functions

var startGame = function () {

    // reset current score
    var currentScore = 0;
    // set new target score 19-120
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // set dif values to crystals 1-12
    crystal.blue.value      = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.green.value     = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.purple.value    = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.rainbow.value   = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    // change html to update changes

      // console.log
      console.log("-------------------------------------------------------")
      console.log("Target Score: " + targetScore);
      console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.green.value + " | Purple: " + crystal.purple.value + " | Rainbow: " + crystal.rainbow.value);
      console.log("-------------------------------------------------------")
}

/// on click crystals

// starts game

$(".crystal").click(function() {
    var number =parseInt($(this).attr("data-value"));
    console.log(number);
    userScore += number;
    $("#score-total").text(userScore);
})

  function resetScore() {
    startGame();
    $("#targetNum-area").text(targetScore);
    $("#blue").attr("data-value", crystal.blue.value);
    $("#green").attr("data-value", crystal.green.value);
    $("#purple").attr("data-value", crystal.purple.value);
    $("#rainbow").attr("data-value", crystal.rainbow.value);
  }
  resetScore();

  



