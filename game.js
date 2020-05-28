var userClickPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
$(document).on("keypress", function(e){
  if (e.key){
    $("h1").text("Level "+level);
    setTimeout(function(){
      nextSequence();
    }, 2000);
  }
})
$(".btn").on("click", function(){
  var userChosenColor = $(this).attr("id");
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickPattern.length-1);
})
function checkAnswer(chosenColor){
  if(userClickPattern[chosenColor] === gamePattern[chosenColor] ){
    if (userClickPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }
  else{
    startOver();
  }
}
function startOver(){
  var sound = new Audio("sounds/wrong.mp3");
  sound.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 2000);
  $("h1").text("Game Over, Press Any Key to Restart");
  level = 0;
  gamePattern = [];
}
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
  }, 200);
}
function playSound(chosenColor){
  var sound = new Audio("sounds/"+chosenColor+".mp3");
  sound.play();
}
function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeOut();
  userClickPattern = [];
  setTimeout(function(){
    $("#"+randomChosenColor).fadeIn();
  }, 200);
  playSound(randomChosenColor);
  level ++;
  $("h1").text("Level "+ level);
}
