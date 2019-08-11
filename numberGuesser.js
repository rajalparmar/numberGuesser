/*Game Functions 
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Let player choose to play again
*/

let min = 1,
    max = 10,
    winningNumber = 2,
    remainingGuesses = 3;

const numberGuesserView = {
    elements: {
        gameContainer: document.querySelector('#game'),
        minimumNumber: document.querySelector('.min-num'),
        maximumNumber: document.querySelector('.max-num'),
        guessButton: document.querySelector('#guess-btn'),
        guessInput: document.querySelector('#guess-input'),
        message: document.querySelector('.message'),
    },
    guessButtonListener () {
        numberGuesserView.elements.guessButton.addEventListener('click', function () {
            let guess = parseInt(numberGuesserView.elements.guessInput.value);
            numberGuesserView.validateInput(guess);
        });
    },
    validateInput (guess) {
        if (isNaN(guess) || guess < min || guess > max) {
            numberGuesserView.setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        }
    },
    setMessage (message, color) {
        numberGuesserView.elements.message.textContent = message;
        numberGuesserView.elements.message.style.color = color;
    },
    
    init () {
        numberGuesserView.elements.minimumNumber.textContent = min;
        numberGuesserView.elements.maximumNumber.textContent = max;
        numberGuesserView.guessButtonListener();
    },
}
numberGuesserView.init();