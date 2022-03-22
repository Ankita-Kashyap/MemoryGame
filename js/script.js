//Make a list of all memory card elements and store it in the const cards
const cards = document.querySelectorAll('.memory-card');

function flipCard()
{
    //in this context this keyword refers to the element that fired the event
   // console.log('I was clicked!');
   // console.log(this); 
    this.classList.toggle('flip');  //classlist ->take all classes toggle->if class is there then remove it if not add it



}


cards.forEach(card => card.addEventListener('click',flipCard));


//15:48