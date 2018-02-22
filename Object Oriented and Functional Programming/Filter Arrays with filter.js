/**Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.

Before
var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray; */

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.
var array = oldArray.filter(function(val) {
  return val < 6;
});
