//initial variables
let fistCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

//creating player object
let player = {
  name: "John",
  money: 200,
};

//using get getElementById
const startGame = document.getElementById("start-btn");
const newCard = document.getElementById("newcard-btn");
const messageEl = document.getElementById("message-el");

//using querySelector
const sumEl = document.querySelector(".sum-el");
const cardsEl = document.querySelector(".cards-el");
const playerEl = document.querySelector(".player-el");

//using textContent property
playerEl.textContent = `${player.name}: ${player.money}$`;

//windows load propert
window.addEventListener("load", () => {
  startGame.style.transform = "scale(1)";
  startGame.style.opacity = 0.6;

  newCard.style.transform = "scale(1)";
  newCard.style.opacity = 0.6;
});

// startGame buttons style
startGame.addEventListener("mouseover", () => {
  startGame.style.transform = "scale(1.2)";
  startGame.style.opacity = 1;
});

//using mouseout event on startGame
startGame.addEventListener("mouseout", () => {
  startGame.style.transform = "scale(1)";
  startGame.style.opacity = 0.6;
});

// newCard buttons style
newCard.addEventListener("mouseover", () => {
  newCard.style.transform = "scale(1.2)";
  newCard.style.opacity = 1;
});

//using mouseout event on startGame
newCard.addEventListener("mouseout", () => {
  newCard.style.transform = "scale(1)";
  newCard.style.opacity = 0.6;
});

//add click event listner to the startGame
startGame.addEventListener("click", () => {
  isAlive = true;
  fistCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [fistCard, secondCard];
  //avoiding DRY
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
    //you cant add new card without start the game
    cards.push(getRandomCard());
  }

  //avoiding DRY
  renderGame();
});

const renderGame = () => {
  //assinging sum to the zero
  sum = 0;
  cardsEl.textContent = "Cards: ";

  //using for loop for adding new cards to the sum and cardsEl
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}, `;
    sum += cards[i];
  }

  //game logic
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

//getting random value
function getRandomCard() {
  return Math.floor(Math.random() * 10 + 2);
}
