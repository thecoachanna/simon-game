let buttonColors = ['red', 'green', 'blue', 'yellow']
let gamePattern = []

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100).
}

nextSequence()