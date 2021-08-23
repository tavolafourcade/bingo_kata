/******************************/
/********* BINGO KATA *********/
/* Author: Octavio Lafourcade */
/******************************/

/* Bingo is a game of chance played using cards with numbers printed on them, which are marked off of the card as the
caller reads out some manner of random numbers. Play usually ceases once a certain pattern is achieved on a card,
where the winner will shout out "Bingo!" in order to let the caller and the room know that there may be a winner.
 */

/* Calling Bingo Numbers */

/* Calling a number between 1 and 75 inclusive */
function call_number(){
  return (Math.floor(Math.random()*75)+1)
}

random_number = call_number();
console.log(random_number);