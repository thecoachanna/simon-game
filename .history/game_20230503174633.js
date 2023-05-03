let buttonColors = ['red', 'green', 'blue', 'yellow']
let gamePattern = []
let userClickedPattern = []

function nextSequence() {
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
}

nextSequence();