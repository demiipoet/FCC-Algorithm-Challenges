//Return the provided string with the first letter of each word capitalized

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  var capArr = [];
  
  for (var i = 0; i < splitStr.length; i++) {
    capArr.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));
  }
  
  return capArr.join(' ');
}

titleCase("I'm a little TEA pot"); //Returns "I'm A Little Tea Pot"
