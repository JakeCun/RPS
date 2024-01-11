// Get elements from the DOM
const buttons = document.querySelectorAll('.game-area button');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerImageElement = document.getElementById('player-image');
const computerImageElement = document.getElementById('computer-image');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Define choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get player's choice
        const playerChoice = parseInt(button.getAttribute('data-choice'));

        // Get computer's choice randomly
        const computerChoice = Math.floor(Math.random() * 3);

        // Update player and computer images
        playerImageElement.src = `assets/images/${choices[playerChoice].toLowerCase()}.png`;
        computerImageElement.src = `assets/images/${choices[computerChoice].toLowerCase()}.png`;

        // Determine the winner
        const winner = determineWinner(playerChoice, computerChoice);

        // Update scores and display result
        updateScores(winner);
    });
});

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if ((player + 1) % 3 === computer) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update scores and display result
function updateScores(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    // Update score elements
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    // Display result
    alert(`You chose ${choices[playerChoice]}\nComputer chose ${choices[computerChoice]}\n\n${winner === 'draw' ? 'It\'s a draw!' : winner === 'player' ? 'You win!' : 'Computer wins!'}`);
}
