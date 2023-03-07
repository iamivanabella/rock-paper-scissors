const icons = document.querySelectorAll('.sub-container i');

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        const playerSelection = icon.id;
        playRound(playerSelection, getComputerChoice());
    });
    icon.addEventListener('mouseover', () => {
        icon.classList.replace(icon.classList[0], `fa-solid`);
    });

    icon.addEventListener('mouseout', () => {
        icon.classList.replace(icon.classList[0], `fa-regular`);
    });
});

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Use the random number to determine the computer's choice
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log(`It's a tie!`);
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        console.log(`You win!`);
    } else {
        console.log(`Computer wins!`);
    }

    console.log(`${playerSelection} vs ${computerSelection}`);
}