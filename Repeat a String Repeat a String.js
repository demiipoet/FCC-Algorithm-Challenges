//Repeat a given string (first argument) num times (second argument)
//Return an empty string if num is not a positive number

function repeatStringNumTimes(str, num) {
  
  if (str.length >= 0) {
    var numArr = [];
    
    for (var a = 0; a < num; a++) {
      numArr.push(str);
    }
    return numArr.join('');
  } else {
    return 0;
  }
}

repeatStringNumTimes("abc", 5); //Returns "abcabcabcabcabc"

