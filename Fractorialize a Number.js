//Return the factorial of the provided integer

function fractorialize(num) {
  var product = 1;
  
  for (var z = 1; z < (num + 1); z++) {
    product *= z;
  }
  return product;
}

fractorialize(5); //Returns 120
