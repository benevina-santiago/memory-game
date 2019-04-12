var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push("queen");
console.log("User flipped " + cards[0]);
var cardTwo = cards[2];
cardsInPlay.push("king");
console.log("User flipped " + cards[2]);
if (cardsInPlay.length === 2) {
  cardsInPlay.cards[0] === cardsInPlay.cards[1]
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}