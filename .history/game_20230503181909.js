let buttonColors = ['red', 'green', 'blue', 'yellow']
let gamePattern = []
let userPattern = []
let started = false
let level = 0

// START GAME
$(document).on("keydown", function () {
    if (gamePattern.length === 0) {
        nextSequence()  
    }
})

$(".btn").click (function(event) {
    var userChosenColor = this.id
    
    playSound(userChosenColor)
    animatePress(userChosenColor)
    userPattern.push(userChosenColor)
    checkAnswer()
})

function nextSequence() {
    userPattern = []
    
    var randomColor = buttonColors[Math.floor(Math.random() * 4)]
    gamePattern.push(randomColor)

    playSound(randomColor)
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100)
    $("h1").text("Level " + gamePattern.length)
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function checkAnswer() {

    if (userPattern[userPattern.length-1] === gamePattern[userPattern.length-1]) {
      if (gamePattern.length === userPattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
        $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}

function startOver() {
    level = 0
    gamePattern = []
    started = false
}


