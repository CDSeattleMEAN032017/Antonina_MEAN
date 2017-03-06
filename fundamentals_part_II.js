// //Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// function findSum(x, y){
//   var sum = 0;
//   for(var i = x; i <= y; i++){
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// findSum(1,5);
// //Write a loop that will go through an array, find the minimum value, and then return it
// function findMin(arr){
//   var min = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
//Write a loop that will go through an array, find the average of all of the values, and then return it
var findAvg = function(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  var avg = sum/arr.length;
  return avg;
}
console.log(findAvg([3,2,6]));
