let multiplier = 1.0;
let running = false;
let interval;

const multiplierDisplay = document.getElementById('multiplier');
const cashoutButton = document.getElementById('cashout');
const startButton = document.getElementById('start-game');
const statusDisplay = document.getElementById('status');

function startGame() {
  if (running) return;

  running = true;
  multiplier = 1.0;
  cashoutButton.disabled = false;
  startButton.disabled = true;
  statusDisplay.textContent = "";

  interval = setInterval(() => {
    multiplier += Math.random() * 0.05;
    multiplierDisplay.textContent = multiplier.toFixed(2) + 'x';

    // Randomly crash the game
    if (Math.random() < 0.01) {
      clearInterval(interval);
      running = false;
      cashoutButton.disabled = true;
      startButton.disabled = false;
      statusDisplay.textContent = "Crashed at " + multiplier.toFixed(2) + "x!";
    }
  }, 100);
}

function cashOut() {
  if (!running) return;

  clearInterval(interval);
  running = false;
  cashoutButton.disabled = true;
  startButton.disabled = false;
  statusDisplay.textContent = "Cashed out at " + multiplier.toFixed(2) + "x!";
}

startButton.addEventListener('click', startGame);
cashoutButton.addEventListener('click', cashOut);
