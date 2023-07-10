// Elements for my How to Play Button
const openBtn = document.getElementById('howToPlayModal');

const modal = document.getElementById('modal');

const close = document.getElementById('close');

// Element for my hidden word
const wordPop = document.getElementById('wordPop');
// Element for the incorrect Guesses
const wrongGuess = document.querySelectorAll('li');
// Element for the Reset button
const resetBtn = document.querySelector('#resetBtn');
// Element for my background picture
const backgroundPic = document.querySelector('.gameBox');
// Element for the winning Modal box
const winnerModal = document.getElementById('youWonModal');
// Element for the close button within winning Modal
const closeWinningMod = document.getElementById('closeWinningModal');
// The variable that will hold our user's Guesses
let userGuesses = [];

//Functions for my How To Play Button
const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

// Function to close the winning modal
const closeWinningModal = () => {
	winnerModal.style.display = 'none';
};

// Event Listener for the Winning Modal
closeWinningMod.addEventListener('click', closeWinningModal);

// Event Listeners for my How to Play Button
openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

// Event Listener for my Reset Button
resetBtn.addEventListener('click', resetGame);

// My word bank
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
	'WRAP',
	'COZY',
	'CLONE',
	'FROZEN',
	"PEAR",
	"ORANGE",
];

let randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

// function that will take a randomized word 
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

// Function that will display the modal when our player wins.
function winningAlert() {
	winnerModal.style.display = 'block';
}

// Function that will determine if our player has won
function checkWin() {
	if (userGuesses.length === randomWordChoice.length) {
		return winningAlert();
	}
}

// Generating a new word on our page
newWordGenerator();

// Element for our letter guess button
let enterBtn = document.querySelector('#enterGuess');

// Variable for the number of wrong guesses within our function of playerGuess
let numberOfWrongGuesses = 0;

// Function for our letter guess button
function playerGuess(event) {
	event.preventDefault();
	// variable that will take the word and splits it into single letters
	let randomWordChoiceLetters = randomWordChoice.split('');
	// user input
	let userInput = document.querySelector('.input').value.toUpperCase();
	// variable for our blank letter spaces.
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

// Event listener for the letter guess button
enterBtn.addEventListener('click', playerGuess);  

// Function to reset our game
function resetGame() {
	numberOfWrongGuesses = 0;
	wrongGuess.forEach((li) => (li.innerText = ' '));
	backgroundPic.src = 'red.jpg';
	randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	newWordGenerator();
	userGuesses = [];
}

// Function that updates background picture of our astronaut.
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
			'You just let our fellow astronaut die :(. Luckily you get a second try! tap the restart button!');
	}
}
// Function to clear the input box for our user 
function clearButton() {
	document.getElementById('myInput').value = '';
}
