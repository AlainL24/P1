const openBtn = document.getElementById("howToPlayModal");

const modal = document.getElementById("modal");

const close = document.getElementById("close");

const hiddenWord = document.getElementById("hiddenWord");

const wrongGuess = document.querySelectorAll("li");

const resetBtn = document.querySelector("#resetBtn");

const backgroundPic = document.querySelector(".gameBox");

const winnerModal = document.getElementById("youWonModal");

const closeWinningMod = document.getElementById("closeWinningModal");

let userGuesses = [];

const openModal = () => {
	modal.style.display = 'block';
};

const closeModal = () => {
	modal.style.display = 'none';
};

const closeWinningModal = () => {
	winnerModal.style.display = 'none';
};

closeWinningMod.addEventListener('click', closeWinningModal);

openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

resetBtn.addEventListener('click', resetGame);

let wordBank = [
	'VENUS',
	'EARTH',
	'MARS',
	'OXYGEN',
	'SPACE',
	'NASA',
	'BREATH',
	'SOLID',
	'LUNCH',
	'PIZZA',
	'COZY',
	'CLONE',
	'FROZEN',
	"APPLE",
	"CHERRY",
];

let randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

function newWordGenerator() {
	wordPop.innerHTML = '';
	for (let i = 0; i < randomWordChoice.length; i++) {
		letter = document.createElement('span');
		letter.innerText = '_____';
		letter.style.color = 'chartreuse';
		letter.classList.add('letter');
		wordPop.appendChild(letter);
	}
}


function winningAlert() {
	winnerModal.style.display = 'block';
}

function checkWin() {
	if (userGuesses.length === randomWordChoice.length) {
		return winningAlert();
	}
}

newWordGenerator();

let enterBtn = document.querySelector('#enterGuess');

let numberOfWrongGuesses = 0;

function playerGuess(event) {
	event.preventDefault();
	