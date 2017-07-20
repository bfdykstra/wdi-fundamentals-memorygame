


var cards = [
  {"rank": "queen",
   "suit": "hearts",
   "cardImage": "images/queen-of-hearts.png",
   "flipped" : 0
 },
  {"rank": "queen",
   "suit": "diamonds",
   "cardImage": "images/queen-of-diamonds.png",
   "flipped": 0
 },
 {"rank": "king",
  "suit": "diamonds",
  "cardImage": "images/king-of-diamonds.png",
  "flipped": 0
 },
 {"rank": "king",
 "suit": "hearts",
 "cardImage": "images/king-of-hearts.png",
 "flipped": 0
 }
];

var cardsInPlay = [];

function flipCard() {
  //console.log("User flipped a " + cards[cardId].rank);
  var cardId = this.getAttribute('data-id');
  console.log(cardId);

  // switch the faces back over when they are clicked.
  if( cards[cardId].flipped === 1){
      this.setAttribute('src',"images/back.png");
      cards[cardId].flipped = 0;
      cardsInPlay.splice(cardId,1); //removes that card from the array

  }else{
      cardsInPlay.push(cards[cardId]);
      cards[cardId].flipped = 1;
      console.log(cards[cardId].cardImage);
      console.log(cards[cardId].suit);
      this.setAttribute('src', cards[cardId].cardImage);
  }

  console.log(cardsInPlay);

  if(cardsInPlay.length > 1){
      if( cardsInPlay[0].rank === cardsInPlay[1].rank){
      console.log("You found a match");
      }else{
      console.log("sorry, try again.");
      }
  }

}

function createBoard() {
    console.log(document.getElementById('game-board'));
    for(i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();
