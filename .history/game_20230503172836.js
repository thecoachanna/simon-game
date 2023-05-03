let buttonColors = ['red', 'green', 'blue', 'yellow']
let gamePattern = []
let userClickedPattern = []

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    console.log("clicked", randomChosenColor)
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3")
    audio.play()
}

$(".btn").onclick(function () {
    let userChosenColor = this.id
    userClickedPattern.push(userChosenColor)
})