

// Declare and assign multiple variables at once

// Game variables
let min= 1,
    max= 10,
    tries = 3,
    luckyNumber = rollNumber();

// 1. Roll a number between 1-10
function rollNumber(){
    return Math.floor(((Math.random() * (max - min +1)) + min))
}

console.log(luckyNumber)

// UI elements
const  UIgame = document.getElementById('game'),
       UIminNum = document.querySelector('.min-num'),
       UImaxNum = document.querySelector('.max-num'),
       UIsubmitBtn = document.getElementById('guess-value'),
       UIinput = document.getElementById('guess-input'),
       UImessage= document.querySelector('.message')
       ;

// Assing ui min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Play again event listener - we need to use event delegation
UIgame.addEventListener('mousedown', function(e){
    
    if(e.target.className === 'play-again'){
        console.log(e.target)
        console.log('honk')
        window.location.reload()
    }
})



UIsubmitBtn.addEventListener('click', checkGuess)


// 2. Take the input from user and compare
function checkGuess(){
    
    const userGuess = parseInt(UIinput.value);

    // Validate it is a number
    if(isNaN(userGuess) || userGuess < min || userGuess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');  
    }

    if(userGuess === luckyNumber ){
        // Game was won
        gameOver(`${luckyNumber} is correct! YOU WIN`, true)

    } else {
        //Wrong number
        tries -= 1

        if(tries === 0){
            //Game was lost
            gameOver(`You lost. Correct number was ${luckyNumber}`, false);
        } else {
            //Inform user on tries left
            setMessage(`${userGuess} is not correct, you have ${tries} tries left.`, 'orange');

            //Clear input
            UIinput.value = '';
        }
    }
}

// set message 
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}

//Game over
function gameOver(msg, won){
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input
    //another way of disabling input
    UIinput.disabled = true;
    //Change border color
    UIinput.style.borderColor = color;
    // Inform user he has won
    setMessage(msg, color);

    // Play Again
    UIsubmitBtn.value = 'Play Again';
    UIsubmitBtn.className += 'play-again';
}


