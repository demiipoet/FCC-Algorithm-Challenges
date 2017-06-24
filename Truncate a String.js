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
