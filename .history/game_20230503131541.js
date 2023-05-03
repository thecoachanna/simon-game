let buttonColors = ['red', 'green', 'blue', 'yellow']
let randomChosenColor = nextSequence(buttonColors)
let gamePattern = []

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    alert(randomNumber)
}

