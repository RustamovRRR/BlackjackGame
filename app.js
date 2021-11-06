let fistCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let player = {
  name: "John",
  money: 200,
};

const startGame = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const newCard = document.getElementById("newcard-btn");
const sumEl = document.querySelector(".sum-el");
const cardsEl = document.querySelector(".cards-el");
const playerEl = document.querySelector(".player-el");
playerEl.textContent = `${player.name}: ${player.money}$`;

startGame.addEventListener("click", () => {
  isAlive = true;
  fistCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [fistCard, secondCard];
  renderGame();
});

newCard.addEventListener("click", () => {
  /*
  My first way
  cards.push(Math.floor(Math.random() * 10 + 2));
  sum += cards[cards.length - 1];
  renderGame();
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${fistCard}, ${secondCard}, ${cards.join(
    ", "
  )}`;
  */
  if (isAlive && !hasBlackjack) {
    cards.push(getRandomCard());
  }

  renderGame();
});

const renderGame = () => {
  sum = 0;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}, `;
    sum += cards[i];
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack! ";

    hasBlackjack = true;
  } else {
    message = "You're are out of the game! ";
    isAlive = false;
  }
  if (sum !== 0) {
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
  }
};

function getRandomCard() {
  return Math.floor(Math.random() * 10 + 2);
}
