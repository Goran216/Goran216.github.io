const cards = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bicycle", "fa-bomb", "fa-leaf", "fa-bolt", "fa-cube"];
const doubledCards = cards.concat(cards);


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Defining necessary variables
const newCards = shuffle(doubledCards);
const deck = document.querySelector('.deck');
let cardChecked = [0, 0]; //the first index will be changed to 1 if first card was clicked. And the second index will also be changed to 1 if second card selected after selecting the first card. If the array is [0,0] then it means no card is selected.
let card1, card2;
let cardClassName1, cardClassName2;
let matchCounter = 0;
let moveCounter = 0;
let initialTime; //start time of the game
let resetButton = document.getElementsByClassName('restart')[0]; //storing the reset button to a variable
let timerValue;
let idOfFirstSelectedCard;

//Looping through each card and creating its HTML
for (let i=0; i<newCards.length; i++) {
  const cardItem = document.createElement("li");
  cardItem.classList.add("fa");
  cardItem.classList.add(newCards[i]);
  cardItem.setAttribute("id", i);

  const card = document.createElement("li");
  card.classList.add("card");
  card.appendChild(cardItem);

  deck.appendChild(card); //add each card to the deck.

  card.addEventListener('click', function clicked(e){
    card.classList.add('show', 'open'); //unhide the card

    //Adding timer
    if (moveCounter>0){
      let timer = setInterval(function(){
        let currentTime = new Date().getTime();
        timerValue = (Math.floor(currentTime/1000) - Math.floor(initialTime/1000));
        document.getElementsByClassName('timer')[0].innerHTML =  timerValue;
      }, 1000);
    };

    if (cardChecked[0]==0) { //check if first card is not selected yet.
      cardChecked[0]=1;
      card1 = e.target.firstChild; //store the HTML element object to card1
      cardClassName1 = card1.classList[1]; //store its classname.
      idOfFirstSelectedCard = e.target.firstChild.getAttribute("id");

      if (moveCounter==0) {
        initialTime = new Date().getTime();
      }

      moveCounter++; // Add 1 to move Counter.
    } else if (cardChecked[1]==0) { //check if second card if not selected yet.
      if (e.target.firstChild==null || e.target.firstChild.getAttribute("id")==idOfFirstSelectedCard) {
        alert("You can't select the same card twice!");
        window.setTimeout(function(){
          card1.parentElement.classList.remove('show', 'open');
          cardChecked = [0, 0];
        }, 400);
      } else {
        cardChecked[1]=1;
        console.log("cardCheck is: "+ cardChecked);
        card2 = e.target.firstChild; //store the HTML element object to card1
        cardClassName2 = card2.classList[1]; //store its classname.

        if (cardClassName1 == cardClassName2){ //check if both cards match by checking if both classnames are same.
          card1.parentElement.classList.add('match');
          card2.parentElement.classList.add('match');
          card1.parentElement.classList.remove('open', 'show');
          card2.parentElement.classList.remove('open', 'show');

          matchCounter++; //add matchCounter by 1, because by reaching matchCouner to 8, it means all cards are matched and the game must be finished.
          cardChecked = [0, 0];

          if (matchCounter==8){ //finish the game if all cards are matched
            let overlay = document.getElementById('overlay');
            let closeModalButton = document.getElementById('playAgainButton');

            function openModal(){
              overlay.classList.remove("is-hidden");
            }
            function closeModal(){
              overlay.classList.add("is-hidden");
            }

            const numberOfStars = document.getElementsByClassName('stars')[0].childElementCount;

            document.getElementById('finalMessage').textContent="You won the game by "+moveCounter+" moves in "+timerValue+" seconds! And you earned "+ numberOfStars +" star"+ (numberOfStars==1 ? "" : "s") +"."
            openModal();

            closeModalButton.addEventListener('click', function(){
              closeModal();
              reset();
            });
          }
        } else {
          window.setTimeout(function(){
            card1.parentElement.classList.remove('show', 'open');
            card2.parentElement.classList.remove('show', 'open');
            cardChecked=[0, 0];
          }, 400);

        };


        // window.setTimeout(function(){
           //deselect both of the selected cards.
        // }, 500);

        //Removing stars based on moves
        if (moveCounter === 15) {
          let stars = document.getElementsByClassName('stars')[0];
          stars.removeChild(stars.children[0]);
        } else if (moveCounter === 25) {
          let stars = document.getElementsByClassName('stars')[0];
          stars.removeChild(stars.children[0]);
        };
      }
    } else {
      e.target.classList.remove('show', 'open');
      card1.parentElement.classList.remove('show', 'open');
      card2.parentElement.classList.remove('show', 'open');
      alert("You clicked more than two cards simultaneously! Please give some time to see the answer for the two chosen cards first.");

    }

    document.getElementsByClassName('moves')[0].textContent = moveCounter;
  });
}

//Resetting
function reset(){
  location.reload(); //simply reloading the page to reset everything. this is fine for this page since load time is very short.

  //ALTERNATIVELY WE CAN YOU THE CODE BELOW.
  // for (let i = 0; i<cards.length; i++) {
  //   let cardd = document.getElementsByClassName('card')[i];
  //
  //   //Flipping the cards to be hidden like the beginning of the game.
  //   if(cardd.classList=="card show open") {
  //     cardd.classList.remove("show", "open", "match");
  //   }
  //
  //   if(cardd.classList=="card match") {
  //     cardd.classList.remove("show", "open", "match");
  //   }
  // }
  //
  // //reseting number of moves.
  // moveCounter=0;
  // document.getElementsByClassName('moves')[0].textContent = moveCounter;
  //
  // // Resetting the timer.
  // initialTime = new Date().getTime();
  // document.getElementsByClassName('timer')[0].innerHTML = 0 ;
  //
  // cardChecked = [0,0]; //deselecting selected cards.
}
resetButton.addEventListener('click', reset);
