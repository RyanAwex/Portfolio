let userScore = 0;
let computerScore = 0;
let autoPlayInterval;

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock-btn').addEventListener('click', () => playGame('rock'));
document.getElementById('paper-btn').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors-btn').addEventListener('click', () => playGame('scissors'));
document.getElementById('reset-btn').addEventListener('click', resetScore);
document.getElementById('auto-play-btn').addEventListener('click', toggleAutoPlay);

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult(userChoice, computerChoice);
  updateScore(result);
  displayResult(userChoice, computerChoice, result);
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScore(result) {
  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  document.getElementById('user-score').textContent = `User Score: ${userScore}`;
  document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
}

function displayResult(userChoice, computerChoice, result) {
  document.getElementById('text-el').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. You ${result}!`;
}

function resetScore() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('user-score').textContent = `User Score: ${userScore}`;
  document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
  document.getElementById('text-el').textContent = '';
}

function toggleAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    document.getElementById('auto-play-btn').textContent = 'Auto Play';
  } else {
    autoPlayInterval = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      playGame(randomChoice);
    }, 1000);
    document.getElementById('auto-play-btn').textContent = 'Stop Auto Play';
  }
}