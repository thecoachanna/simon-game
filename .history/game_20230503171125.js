var buttonColors = ['red', 'green', 'blue', 'yellow']
var gamePattern = []

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    console.log("clicked", randomChosenColor)
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3")
    audio.play()
}
