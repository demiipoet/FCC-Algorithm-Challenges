//Truncate a string (first argument) if it is longer than the given maximum string length (second argument)
//Return the truncated string with a ... ending

function truncateString(str, num) {
  
  if (num > 3 && num >= str.length) {
    return str;
  
  } else if (num > 3 && num < str.length) {
    return str.slice(-str.length, num - 3) + "...";
    
  } else {
    return str.slice(-str.length, num) + "...";
    
  }
}

truncateString("Pleasant-pheasant-plucker", 7); //Returns "Plea..."
