//Make a list of all memory card elements and store it in the const cards
const cards = document.querySelectorAll('.memory-card');

let hasflippedCard = false;
let lockBoard = false;    // to lock the board : so that the cards first unflip then the user takes another try
 let firstCard,secondCard;

function flipCard()
{
    if(lockBoard) return; 
    //in this context this keyword refers to the element that fired the event
   // console.log('I was clicked!');
   // console.log(this); 
    this.classList.add('flip');  //classlist ->take all classes toggle->if class is there then remove it if not add it

    if(!hasflippedCard){
        //first time player clicked card
        hasflippedCard=true;
        firstCard = this;

       // console.log(hasflippedCard,firstCard);    
    }
    else{
        //second click
        hasflippedCard = false;
        secondCard = this;

        // console.log(firstCard,secondCard);
       checkForMatch();
      
        }


        function checkForMatch()
        {    // console.log(firstCard.dataset.framework); console.log(secondCard.dataset.framework); Displays names
            //check if those cards match
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
            isMatch? disableCards() : unflipCards();
           
        }
        function disableCards()
        {
            //its a match
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard);
        }

        function unflipCards()
        {
            lockBoard = true;
             //not a match
             setTimeout(() =>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockBoard = false;
                },1000);
        }

}


cards.forEach(card => card.addEventListener('click',flipCard));


//15:48