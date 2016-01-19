/*****************************************
* Author: Mills McIlroy
* Date: 1/19/2016
* Description: This function takes a word and returns true if and only if all of
* the vowels in the word are the same. "Y" is considered a vowel.
*  myFn('oligopoly') >> false
*  myFn('zoom') >> true
*******************************************/

function warmup (word) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  var count = [0, 0, 0, 0, 0, 0];//A count for each respective letter

  word = word.toUpperCase();
  console.log("Word: " + word);

  //These nested loops traverse the word and compare to each
  //vowel in the array of vowels, incrementing their respective counts if a match is found
  for (var i = 0; i < word.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j])
        count[j]++;
    }
  }

  var tracker = 0;//This will increment above 1 if there is more than one vowel that is not the same as the others

  //This loop increments tracker for every num in count that is > 0
  for (var i = 0; i < count.length; i++) {
    if (count[i] > 0)
      tracker++;
  }

  if (tracker > 1)
    return false;
  else
    return true;

}

//console.log("All vowels the same: " + warmup("Constononoplo"));//For testing