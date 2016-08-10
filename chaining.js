var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
  var descending = integers.sort(function(a,b) {
    return b-a
  })
  console.log("Sort the numbers in descending order (10, 9, 8, 7, etc).",descending);


for (var i = 0; i < integers.length; i++) {
  if(integers[i] >= 19) {
    integers.splice(i, 4);
  }
}

console.log("Remove any integers greater than 19.", descending)

// Multiply each remaining number by 1.5 and then subtract 1.

var multiply = integers.map(function(num) {
  return num * 1.5 - 1;
})
console.log("Multiply each remaining number by 1.5 and then subtract 1.", multiply)

// Then output (either in the DOM or the console) the sum of all the resulting numbers.










// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];