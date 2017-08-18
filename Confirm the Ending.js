//Check if a string (first argument, str) ends with the given target string (second argument, target)

function confirmEnding(str, target) {
  var endStr = str.substr(-target.length);
  
  if (endStr === target) {
    return true;    
  } else {
    return false;    
  }
}

confirmEnding("Bastian", "tian"); //Returns true
