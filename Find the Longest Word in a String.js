function findLongestWord(str) {
  var longest = 0;
  var argh = str.split(' ');
  
  for (var l = 0; l < argh.length; l++) {
    if (argh[l].length > longest) {
      longest = argh[l].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //Returns '6'
