module.exports = rockPaperScissor;

function rockPaperScissor(guess) {

    if (!guess) {
        return 'Please enter Rock, Paper or Scissors as an argument';
    } else {

        guess = guess.toLowerCase();

        let guesses = {
            'rock': 0,
            'paper': 1,
            'scissors': 2
        }

        let guesses2 = {
            0: 'Rock',
            1: 'Paper',
            2: 'Scissors'
        }

        let guessNumber = guesses[guess];
        if (typeof guessNumber === 'undefined') {
            return 'Please enter Rock, Paper or Scissors'
        }

        let x = Math.floor(Math.random() * 3);
        let result = (guessNumber == x) ? 'tied' : (guessNumber == x - 1 || guessNumber == 2 && x == 0) ? 'lost' : 'won';

        return `You **${result}** by choosing ${guess} while the bot chose ${guesses2[x]}`;
    }
}