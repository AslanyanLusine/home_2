const arr = ["1", "px", "2323"];
function parseInteger(arr) {
  const result = arr.map(item => {
    if(!isNaN(item)){
       return +item
    } else return null
  })
  return result;
}
const res = parseInteger(["1", "px", "2323"]);
console.log(res)