//Make a list of all memory card elements and store it in the const cards
const cards = document.querySelectorAll('.memory-card');

let hasflippedCard = false;
 let firstCard,secondCard;

function flipCard()
{
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
        // console.log(firstCard.dataset.framework); console.log(secondCard.dataset.framework); Displays names
        //check if those cards match
       if(firstCard.dataset.framework === secondCard.dataset.framework)
       {
           //its a match
           firstCard.removeEventListener('click',flipCard);
           secondCard.removeEventListener('click',flipCard);
           //console.log("Function was executed!");
        }
        else{
            //not a match
            setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            },1000);
        }

      

       
    }


}


cards.forEach(card => card.addEventListener('click',flipCard));


//15:48