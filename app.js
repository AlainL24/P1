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