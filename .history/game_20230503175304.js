let buttonColors = ['red', 'green', 'blue', 'yellow']
let gamePattern = []
let userClickedPattern = []
let started = false
let level = 0

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level)
        nextSequence()
        started = true
    }
})

function nextSequence() {
    userClickedPattern = []
    level++
    $("level-title").text
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
}

$(".btn").on("click", function(event) {
    let userChosenColor = event.currentTarget.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
})


function playSound(name) {
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3")
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

nextSequence();