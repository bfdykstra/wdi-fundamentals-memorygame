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

//var cardsInPlay = [];

var cardsInPlay = new Set();

function checkForMatch(cardId){
    // iterates over cardsInPlay and checks if there is any match
    console.log(cardsInPlay);
    if(cardsInPlay.size > 1){
        if (cardsInPlay.has(cards[cardId].rank)){
            alert("You found a match");
        }else{
            alert("Try again");
        }
    }

    /*
    for(i = 0; i < cardsInPlay.length; i++){
        console.log("cardId: " + cardId + " ndx: " + i);
        if(i !== parseInt(cardId) && parseInt(cardId) < i){
            console.log(cardsInPlay[cardId].rank);
            console.log(cardsInPlay[i].rank);
            if(cardsInPlay[cardId].rank === cardsInPlay[i].rank){
                alert("You found a match");
            }else {
                alert("try again");
            }
        }

    }
    */
}


function flipCard() {
  //console.log("User flipped a " + cards[cardId].rank);
  var cardId = this.getAttribute('data-id');
  // switch the faces back over when they are clicked.
  if( cards[cardId].flipped === 1){
      this.setAttribute('src',"images/back.png");
      cards[cardId].flipped = 0;
      //ndxOfCard = cardsInPlay.indexOf(cards[cardId]);
      //console.log("The index of the card in the array: " + ndxOfCard);
      //cardsInPlay.splice(ndxOfCard,1); //removes that card from the array
      cardsInPlay.delete(cards[cardId].rank)
  }else{
      //cardsInPlay.push(cards[cardId]);
      if(! cardsInPlay.has(cards[cardId].rank)){
          cardsInPlay.add(cards[cardId].rank);
          if(cardsInPlay.size > 1){
              alert("try again!");
          }
      }else{
          alert("You found a match");
      }

      cards[cardId].flipped = 1;
      this.setAttribute('src', cards[cardId].cardImage);
  }
  //checkForMatch(cardId);

}


function resetCards(){
    //reset img
    var imgs = document.getElementsByTagName('img');
    for (i = 0; i < imgs.length; i++){
        imgs[i].setAttribute('src', "images/back.png");
        cards[i].flipped = 0;
    }

    //reset cardsInPlay
    cardsInPlay = new Set();
}


function createBoard() {
    console.log(document.getElementById('game-board'));
    for(i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        // add each img to the game-board
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();

var btn = document.getElementById('reset');
btn.addEventListener('click', resetCards);
