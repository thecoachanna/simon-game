let buttonColors = ['red', 'green', 'blue', 'yellow']
let randomChosenColor = nextSequence(buttonColors)

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    alert(randomNumber)
}

