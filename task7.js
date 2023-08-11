const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function numberArr(arr) {
  const result = arr.filter(item => typeof item === "number" && !isNaN(item));
return result
}
const res = numberArr(arr);
console.log(res)