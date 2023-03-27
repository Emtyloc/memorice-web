const cards = document.querySelectorAll(".card");

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
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetTable();
  }, 1200);
}

//set default values for flippedCard and lockTable,
// and reset first and second Cards values to null
function resetTable() {
  [flippedCard, lockTable] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//adding click event listener for all cards, and calls flipCard().
cards.forEach((card) => card.addEventListener("click", flipCard));
