//Return the remaining elements of an array after removing n elements from the beginning of the array

function slasher(arr, howMany) {
  
  return arr.slice(howMany);
}

slasher([1, 2, 3], 1); //Returns [2,3]
