const arr1 = [1, 2, 3, 4]; 
const arr2 = [5, 6, 7, 8, 9];
function concated(arr, arr1) {
   return arr.concat(arr1);
}
const concat = concated(arr1,arr2);
console.log(concat)