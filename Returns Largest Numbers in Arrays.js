//Return an array consisting of the largest number from each provided sub-array

function largestOfFour(arr) {
  var results = [];
  
  for (var a = 0; a < arr.length; a++) {
    var largest = arr[a][0];
    
    for (var b = 1; b < arr[a].length; b++) {
      if (arr[a][b] > largest) {
        largest = arr[a][b];
      }
    }  
    
    results[a] = largest;
  }
  
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //Returns [5,27,39,1001]
