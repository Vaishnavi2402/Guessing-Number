document.getElementById('submit-number').addEventListener('click', function() {
    const userNumber = document.getElementById('user-number').value;
    if (userNumber >= 1 && userNumber <= 100) {
        document.getElementById('user-number').disabled = true;
        document.getElementById('submit-number').disabled = true;
        GuessingGame(userNumber);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

function GuessingGame(number) {
    let attempts = 0;
    document.getElementById('guess-button').addEventListener('click', function() {
        const guessNumber = document.getElementById('guess-number').value;
        attempts++;
        if (guessNumber == number) {
            document.getElementById('result').textContent = 'Congratulations! You guessed the number!';
        } 
        else if (guessNumber < number) {
            document.getElementById('result').textContent = 'Try again! The number is higher.';
        } 
        else if (guessNumber > number) {
            document.getElementById('result').textContent = 'Try again! The number is lower.';
        }
        if (attempts == 10) {
            document.getElementById('result').textContent = 'Game Over! The number was ' + number;
            document.getElementById('guess-button').disabled = true;
        }
        document.getElementById('attempts').textContent = attempts;
    });
}