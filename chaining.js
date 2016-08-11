var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log("original array of numbers", integers)

var descending = integers.sort(function(a,b) {
  return b-a
})
console.log("Sort the numbers in descending order: ",descending);


for (var i = 0; i < integers.length; i++) {
  if(integers[i] >= 19) {
    integers.splice(i, 4);
  }
}

console.log("Remove any integers greater than 19: ", descending)


var multiply = integers.map(function(num) {
  return num * 1.5 - 1;
})
console.log("Multiply each remaining number by 1.5 and then subtract 1: ", multiply)


var sum = multiply
var add = sum.reduce(function(a, b) {
  return a + b;
});
console.log("sum of all the resulting numbers: ",add)

var display = document.getElementById("output")
display.innerHTML += "<div>sum of all the resulting numbers:</div><h1>" + add + "</h1>"
