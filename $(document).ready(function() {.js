$(document).ready(function() {
    var currentGuess = 0;
    var targetNum = randomNum();
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var crystals;
  
    function setGame() {
      // resetting game
      currentGuess = 0; // current num starts at 0
      crystals = randomCrystalValues(); // gen random crystal values
      targetNum = randomNum();
      $("#targetNum-area").text(targetNum);
      // $("#score-total").text(currentGuess);  // probably not but idk
    }
  
    function randomCrystalValues() {
      // assigning random values to crystals // not sure if this is the best way. I saw it in an example but idk what to do with it
      return {
        blueCrystal: {
          points: Math.floor(Math.random() * 12) + 1
        },
        greenCrystal: {
          points: Math.floor(Math.random() * 12) + 1
        },
        purpleCrystal: {
          points: Math.floor(Math.random() * 12) + 1
        },
        rainbowCrystal: {
          points: Math.floor(Math.random() * 12) + 1
        }
      };
    }
  
    function randomNum() {
      // creating random target num 19-120
      return Math.floor(Math.random() * 120) + 19;
    }
  
    // blue crystal to dom
    var blueCrystal = $("<img>");
  
    blueCrystal.addClass("crystal-image");
  
    blueCrystal.attr("src", "assets/images/bluecrystal.jpg");
  
    $("#crystals-area").append(blueCrystal);
  
    // green crystal to dom
  
    var greenCrystal = $("<img>");
  
    greenCrystal.addClass("crystal-image");
  
    greenCrystal.attr("src", "assets/images/greencrystal.jpg");
  
    $("#crystals-area").append(greenCrystal);
  
    // purple crystal to dom
  
    var purpleCrystal = $("<img>");
  
    purpleCrystal.addClass("crystal-image");
  
    purpleCrystal.attr("src", "assets/images/purplecrystal.jpg");
  
    $("#crystals-area").append(purpleCrystal);
  
    // rainbow crystal to dom
  
    var rainbowCrystal = $("<img>");
  
    rainbowCrystal.addClass("crystal-image");
  
    rainbowCrystal.attr("src", "assets/images/rainbow-crystal.jpg");
  
    $("#crystals-area").append(rainbowCrystal);
    
  
  
    
  
    function updatePage(userWin) {
      $("#winsLoss-area").empty(); // function that holds the page update
  
      //user win
      if (userWin === true) {
        $("#winsLoss-area").append($("<p>").text("You won!")); // adding message that you won
        setGame();
        genMatchingNum();
      } // user lost
      else if (userWin === false) {
        $("#winsLoss-area").append($("<p>").text("You lose!")); // adding message that you lost
        setGame();
        genMatchingNum();
      }
      
      // wins loss message
      var winsDiv = $("<div>").text("wins");
      var lossDiv = $("<div>").text("losses");
  
      var winsP = $("<p>").text("Wins: ");
      var lossP = $("<p>").text("Losses: ");
  
      winsP.append(winsDiv);
      lossP.append(lossDiv);
  
      $("winsLoss-area").append("winsP");
      $("winsLoss-area").append("lossP");
    }
    
   
  
    // function genMatchingNum() {
    //
    // call functions
      setGame();
      updatePage();
      // genMatchingNum();
  
  });
  
  
  // On click function
  // counter var
  // call values function