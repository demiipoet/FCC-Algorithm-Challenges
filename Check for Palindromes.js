//Checks for palindromes

function palindrome(str) {
  var justStr = str.replace(/[\W_]/gi, "").toLowerCase();
  
  if (justStr === justStr.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("Rac#eCa_R"); //Returns true
