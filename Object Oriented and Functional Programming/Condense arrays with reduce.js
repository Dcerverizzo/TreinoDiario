/** Use the reduce method to sum all the values in array and assign it to singleVal.

Before
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array;*/

var array = [4,5,6,7,8];
var singleVal = 0;

var singleVal = array.reduce(function(arraya, singleVal) {
  return arraya + singleVal;
}, 0);

