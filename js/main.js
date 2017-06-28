// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

// var cards = ["queen", "queen", "king", "king"];
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

// var cardOne = cards[0];
// var cardTwo = cards[2];

// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

// if (cardsInPlay.length === 2) {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//         alert('You found a match!');
//     }
//     else {
//         alert('Sorry, try again.');
//     }
// }

var checkForMatch = function() {
    if (cardsInPlay.length === 2) { // error in code- 9.6
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    }
}

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log("Card Suit " + cards[cardId].suit);
    console.log("Card Image " + cards[cardId].cardImage);
    checkForMatch();
}

flipCard(0);
flipCard(2);
