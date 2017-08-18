//Removes false values from an array

function bouncer(arr) {
  var trueValues = arr.filter(function(values) {
    return Boolean(values);
  });
  return trueValues;
}

bouncer([7, "ate", "", false, 9]); //Returns [7, "ate", 9]
