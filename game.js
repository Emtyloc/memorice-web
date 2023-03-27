const cards = document.querySelectorAll(".card");
const cardsX8 = document.querySelectorAll(".cards-table-x8 .card");
const cardsX18 = document.querySelectorAll(".cards-table-x18 .card");
const cardsX32 = document.querySelectorAll(".cards-table-x32 .card");

let flippedCard = false;
let lockTable = false;
let firstCard, secondCard;

//function to flip card and detect if is first or second card
function flipCard() {
  if (lockTable) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  //if flippedCard == false then is the first card
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }
  //else is the second card and we check for a match
  secondCard = this;

  checkForMatch();
}

//check if the cards are pairs, if they are then disabled them,
// else flip them back.
function checkForMatch() {
  let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
  isMatch ? disableCards() : unflipCards();
}

//remove click actions for paired cards.
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetTable();
}

//flip cards back after 1.2 seconds.
function unflipCards() {
  lockTable = true;
  navigator.vibrate([150, 150]);
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetTable();
  }, 1000);
}

//set default values for flippedCard and lockTable,
// and reset first and second Cards values to null
function resetTable() {
  [flippedCard, lockTable] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffleArray(lenght) {
  return Array.from(Array(lenght).keys())
    .map((n) => n + 1)
    .sort(() => Math.random() - 0.5);
}

(function shuffle() {
  arr = shuffleArray(16);
  let i = 0;
  cardsX8.forEach((card) => {
    card.style.order = arr[i];
    card.querySelector(".figure-down").innerText = card.style.order;
    i++;
  });
})();

//adding click event listener for all cards, and calls flipCard().
cards.forEach((card) => card.addEventListener("click", flipCard));

//https://marina-ferreira.github.io/tutorials/js/memory-game/
