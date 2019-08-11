/*Game Functions 
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNumber = Math.floor(Math.random() * 11),
    remainingGuesses = 4;

const numberGuesserView = {
    // UI Elements
    elements: {
        gameContainer: document.querySelector('#game'),
        minimumNumber: document.querySelector('.min-num'),
        maximumNumber: document.querySelector('.max-num'),
        guessButton: document.querySelector('#guess-btn'),
        guessInput: document.querySelector('#guess-input'),
        message: document.querySelector('.message'),
    },
    guessButtonListener () {
        numberGuesserView.elements.guessButton.addEventListener('click', () => {
            let guess = parseInt(numberGuesserView.elements.guessInput.value);
            numberGuesserView.validateInput(guess);
        });
    },
    playAgainListener() {
        /* If a class has been added after initial page load and needs an event listener added to it, use event delegation i.e
         add the listener onto a parent (as this element won't be available on initial page load) */
         numberGuesserView.elements.gameContainer.addEventListener('mousedown', (event) => {
             if(event.target.className === 'play-again') {
                 window.location.reload();
             }
         })

    },
    validateInput(guess) {
        remainingGuesses--;
        let won = true;
        let disableInput = true;
        let message;

        if (isNaN(guess) || guess < min || guess > max) {
            return numberGuesserView.setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        }
        // Check if won
        if (guess === winningNumber) {
            message = `${winningNumber} is correct! YOU WIN!`;
            numberGuesserView.isGameOver(won, message, disableInput);
        } else if (remainingGuesses >= 1) {
            message = `${guess} is not correct! You have only ${remainingGuesses} ${(remainingGuesses === 1)? 'guess' : 'guesses'} left.`;

            //Clear Input
            numberGuesserView.elements.guessInput.value = '';

            numberGuesserView.isGameOver(!won, message, !disableInput);
        } else {
            message = `GAME OVER! The winning number was ${winningNumber}.`;
            numberGuesserView.isGameOver(!won, message, disableInput);
        }
    },
    setMessage(message, color) {
        numberGuesserView.elements.message.textContent = message;
        numberGuesserView.elements.message.style.color = color;
    },

    isGameOver(won, message, disableInput) {
        let color = won ? 'green' : 'red';
        // Disable input
        numberGuesserView.elements.guessInput.disabled = disableInput;
        // Change border color
        numberGuesserView.elements.guessInput.style.borderColor = color;
        // Display message
        numberGuesserView.setMessage(message, color);
        //Play again
        if (won || remainingGuesses === 0) {
            numberGuesserView.elements.guessButton.value = 'Play Again';
            numberGuesserView.elements.guessButton.className += 'play-again';
        }
        
    },
    init () {
        numberGuesserView.elements.minimumNumber.textContent = min;
        numberGuesserView.elements.maximumNumber.textContent = max;
        numberGuesserView.guessButtonListener();
        numberGuesserView.playAgainListener();
    },
}
numberGuesserView.init();