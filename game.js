const cards = document.querySelectorAll(".card");

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  flippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1200);
}

cards.forEach((card) => card.addEventListener("click", flipCard));
