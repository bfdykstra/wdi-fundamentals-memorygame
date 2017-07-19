
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("user is out of their damn mind " + cardTwo);

if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }else{
    alert("sorry, try again");
  }
}
