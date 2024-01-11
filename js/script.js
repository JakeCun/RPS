document.addEventListener("DOMContentLoaded", function () {
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const playerImage = document.getElementById('player-image');
    const computerImage = document.getElementById('computer-image');
    const resultDisplay = document.getElementById('results');
    const buttons = document.querySelectorAll('.buttons-container button');
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked.');
            playRound(button.dataset.choice);
        });
    });

    function playRound(playerChoice) {
        console.log('Player choice:', playerChoice);
        const computerChoice = Math.floor(Math.random() * 3);
        playerImage.src = `assets/images/${playerChoice}.png`;
        computerImage.src = `assets/images/${computerChoice}.png`;

        if (playerChoice === '0' && computerChoice === 2 ||  // Rock beats Scissors
            playerChoice === '1' && computerChoice === 0 ||  // Paper beats Rock
            playerChoice === '2' && computerChoice === 1) {  // Scissors beats Paper
            playerScore++;
            resultDisplay.textContent = 'You win!';
        } else if (playerChoice === '2' && computerChoice === 0 ||  // Scissors loses to Rock
                   playerChoice === '0' && computerChoice === 1 ||  // Rock loses to Paper
                   playerChoice === '1' && computerChoice === 2) {  // Paper loses to Scissors
            computerScore++;
            resultDisplay.textContent = 'Computer wins!';
        } else {
            resultDisplay.textContent = 'It\'s a tie!';
        }

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
});
