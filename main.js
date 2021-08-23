/******************************/
/********* BINGO KATA *********/
/* Author: Octavio Lafourcade */
/******************************/

/* Bingo is a game of chance played using cards with numbers printed on them, which are marked off of the card as the
caller reads out some manner of random numbers. Play usually ceases once a certain pattern is achieved on a card,
where the winner will shout out "Bingo!" in order to let the caller and the room know that there may be a winner.
 */

/* Calling Bingo Numbers */

function checker(){
  let values = [1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,
                41,42,43,44,45,46,47,48,49,50,
                51,52,53,54,55,56,57,58,59,60,
                61,62,63,64,65,66,67,68,69,70,
                71,72,73,74,75],
    list = [],
    i = values.length,
    j = 0;

  /* Calling a number between 1 and 75 inclusive */
  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      list.push(values[j]);
      values.splice(j,1);
  }
  return list;

}

test = checker();
console.log(test);

