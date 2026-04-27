let random = parseInt(Math.random(100)*100+1)
// console.log(random)


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        ValidateGuess(guess)
    })
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter a number greater than 1')
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else {
        prevguess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displaymsg(`Game Over. Random number was ${random}`)
            endgame()
        }else {
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if (guess === random) {
        displaymsg(`You guessed it right! You win`)
        endgame()
    }else if(guess < random){
        displaymsg('Number is too low')
    }else if(guess > random){
        displaymsg('Number is too high')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displaymsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startover.appendChild(p)
    playGame = false
    newgame()
}

function newgame(){
    const newGameButton = document.getElementById('newGame').addEventListener('click', function(){
        random = parseInt(Math.random(100)*100+1)
        playGame = true
        numGuess = 1
        prevguess = []
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        displaymsg('')
    })
}



// console.log(parseFloat(remaining.textContent));
