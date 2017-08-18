//Return true if the string in the first element of the array
//contains all of the letters of the string in the second element of the array

function mutation(arr) {
  var firstEle = arr[0].toLowerCase();
  var secondEle = arr[1].toLowerCase();
  
  for (var z = 0; z < secondEle.length; z++) {
    if (firstEle.indexOf(secondEle[z]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "heeeloly"]); //Returns false
