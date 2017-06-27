function chunkArrayInGroups(arr, size) {
  var splitArr = [];
  
  for (var a = 0; a < arr.length; a += size) {
    splitArr.push(arr.slice(a, a+size));    
  }
  
  return splitArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //Returns [[0,1,2],[3,4,5],[6]]
