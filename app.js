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

	let randomWordChoiceLetters = randomWordChoice.split('');

	let userInput = document.querySelector('.input').value.toUpperCase();

	let blankSpaces = document.querySelectorAll('.letter');
	clearButton();


	if (userInput === randomWordChoiceLetters[0]) {
		blankSpaces[0].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[1]) {
		blankSpaces[1].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[2]) {
		blankSpaces[2].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[3]) {
		blankSpaces[3].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[4]) {
		blankSpaces[4].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[5]) {
		blankSpaces[5].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[6]) {
		blankSpaces[6].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[7]) {
		blankSpaces[7].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[8]) {
		blankSpaces[8].innerText = userInput;
		userGuesses.push(userInput);
	} else {
		wrongGuess[numberOfWrongGuesses].innerText = userInput;
		numberOfWrongGuesses++;
		updatePic();
	}
	checkWin();
}

enterBtn.addEventListener('click', playerGuess);  

function resetGame() {
	numberOfWrongGuesses = 0;
	wrongGuess.forEach((li) => (li.innerText = ' '));
	backgroundPic.src = '0 bckgd.jpg';
	randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	newWordGenerator();
	userGuesses = [];
}

function updatePic() {
	if (numberOfWrongGuesses == 1) {
		backgroundPic.src = '1.jpg';
	} else if (numberOfWrongGuesses == 2) {
		backgroundPic.src = '2.jpg';
	} else if (numberOfWrongGuesses == 3) {
		backgroundPic.src = '3.jpg';
	} else if (numberOfWrongGuesses == 4) {
		backgroundPic.src = '4.jpg';
	} else if (numberOfWrongGuesses == 5) {
		backgroundPic.src = '5.jpg';
	} else if (numberOfWrongGuesses == 6) {
		backgroundPic.src = '6.jpg';
	} else if (numberOfWrongGuesses == 7) {
		alert(
    	'You have failed to rescue the spaceman. All hope is not lost, Click the start/restart button to try again'
);
	}
}

function clearButton() {
	document.getElementById('myInput').value = '';
}