//Make a list of all memory card elements and store it in the const cards
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
//corner case 1 ->  // to lock the board : so that the cards first unflip then the user takes another try
//corner case 2 ->double click we get same dataframework so they match and give us wrong ans
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  //in this context this keyword refers to the element that fired the event
   // console.log('I was clicked!');
   // console.log(this); 

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //first time player clicked card
    hasFlippedCard = true;
    firstCard = this;

    return;
     // console.log(hasflippedCard,firstCard);    
  }

  // second click
  secondCard = this;
 // console.log(firstCard,secondCard);
  checkForMatch();
}

function checkForMatch() {
    // console.log(firstCard.dataset.framework); console.log(secondCard.dataset.framework); Displays names
            //check if those cards match
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    //its a match
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
//not a match
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
(function shuffle()
{
    cards.forEach(card => {
        let randomPas = Math.floor(Math.random() *12);
        card.style.order = randomPas;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
