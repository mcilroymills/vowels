function warmup (word) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  var count = [0, 0, 0, 0, 0, 0];

  word = word.toUpperCase();
  console.log("Word: " + word);

  for (var i = 0; i < word.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j])
        count[j]++;
    }
  }

  var tracker = 0;

  for (var i = 0; i < count.length; i++) {
    if (count[i] > 0)
      tracker++;
  }

  console.log("tracker: " + tracker)

  if (tracker > 1)
    return false;
  else
    return true;

}

console.log("All vowels the same: " + warmup("AAAAAIAAAAAA"));